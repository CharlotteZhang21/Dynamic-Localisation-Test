/**
 * @author richt / http://richt.me
 * @author WestLangley / http://github.com/WestLangley
 *
 * W3C Device Orientation control (http://w3c.github.io/deviceorientation/spec-source-orientation.html)
 */

var GYROSCOPE = false, _gyroDetect = function(e){
    if (e.rotationRate&& e.rotationRate.alpha || e.rotationRate.beta || e.rotationRate.gamma) {
        GYROSCOPE = true;
        window.removeEventListener("devicemotion", _gyroDetect);
    }
}
window.addEventListener("devicemotion", _gyroDetect);

var DeviceOrientationController = function (object) {

    var scope = this;

    this.object = object;
    this.object.rotation.reorder("YXZ");

    this.element = document;

    this.enabled = true;
    this.manualMode = true;

    this.orientationData = null;
    this.screenOrientation = 0;

    this.alpha = 0;
    this.alphaOffsetAngle = 0;

    // Manual rotate override components
    var startX = 0,
        startY = 0,
        currentX = 0,
        currentY = 0,
        scrollSpeedX, scrollSpeedY,
        tmpQuat = new THREE.Quaternion();


    var CONTROLLER_STATE = {
        AUTO: 0,
        MANUAL_ROTATE: 1
    };

    var CONTROLLER_EVENT = {
        CALIBRATE_COMPASS: 'compassneedscalibration',
        SCREEN_ORIENTATION: 'orientationchange',
        MANUAL_CONTROL: 'userinteraction', // userinteractionstart, userinteractionend
        ROTATE_CONTROL: 'rotate' // rotatestart, rotateend
    };

    var deviceQuat = new THREE.Quaternion();

    var appState = CONTROLLER_STATE.AUTO;

    var fireEvent = function () {
        var eventData;

        return function (name) {
            eventData = arguments || {};

            eventData.type = name;
            eventData.target = this;

            this.dispatchEvent(eventData);
        }.bind(this);
    }.bind(this)();


    var onDeviceOrientationChangeEvent = function (event) {
        if (!GYROSCOPE) return;
        scope.manualMode = false;
        scope.rotationData = scope.rotationData || {};
        scope.rotationData.alpha = event.alpha;
        scope.rotationData.beta = event.beta;
        scope.rotationData.gamma = event.gamma;
    };

    var onScreenOrientationChangeEvent = function () {
        scope.screenOrientation = window.orientation || 0;
    };

    // The angles alpha, beta and gamma form a set of intrinsic Tait-Bryan angles of type Z-X'-Y''

    var setObjectQuaternion = function () {
        var zee = new THREE.Vector3(0, 0, 1);
        var euler = new THREE.Euler();
        var q0 = new THREE.Quaternion();
        var q1 = new THREE.Quaternion(-Math.sqrt(0.5), 0, 0, Math.sqrt(0.5)); // - PI/2 around the x-axis
        return function (quaternion, alpha, beta, gamma, orient) {
            euler.set(beta, alpha, -gamma, 'YXZ'); // 'ZXY' for the device, but 'YXZ' for us
            quaternion.setFromEuler(euler); // orient the device
            quaternion.multiply(q1); // camera looks out the back of the device, not the top
            quaternion.multiply(q0.setFromAxisAngle(zee, -orient)); // adjust for screen orientation
        }
    }();

    this.connect = function () {
        onScreenOrientationChangeEvent(); // run once on load
        window.addEventListener('orientationchange', onScreenOrientationChangeEvent, false);
        window.addEventListener('deviceorientation', onDeviceOrientationChangeEvent, false);
        this.element.addEventListener('mousedown', this.onDocumentMouseDown, false);
        this.element.addEventListener('touchstart', this.onDocumentTouchStart, false);
        scope.enabled = true;
    };

    var _skyFixed = false;
    this.disconnect = function () {
        window.removeEventListener('orientationchange', onScreenOrientationChangeEvent, false);
        window.removeEventListener('deviceorientation', onDeviceOrientationChangeEvent, false);
        this.element.removeEventListener('mousedown', this.onDocumentMouseDown, false);
        this.element.removeEventListener('touchstart', this.onDocumentTouchStart, false);
        scope.enabled = false;
        _skyFixed = false;
    };

    this.update = function () {
        if (scope.rotationData) {
            if (scope.enabled === false) return;
            var alpha = scope.rotationData.alpha ? THREE.Math.degToRad(scope.rotationData.alpha) + this.alphaOffsetAngle : 0; // Z
            var beta = scope.rotationData.beta ? THREE.Math.degToRad(scope.rotationData.beta) : Math.PI * 0.5; // X'
            var gamma = scope.rotationData.gamma ? THREE.Math.degToRad(scope.rotationData.gamma) : 0; // Y''
            var orient = scope.rotationData ? THREE.Math.degToRad(scope.screenOrientation) : 0; // O
            // scope.object.rotation.set(beta, gamma, alpha);
            setObjectQuaternion(scope.object.quaternion, alpha, beta, gamma, orient);

            if (!_skyFixed) {
                var startQuat = new THREE.Quaternion();
                setObjectQuaternion(startQuat, alpha, beta, gamma, orient);
                app.scene.quaternion.copy(startQuat);
                _skyFixed = true;
            }
        }
        else if (appState !== CONTROLLER_STATE.AUTO) {
            this.updateManualMove();
        }
    };

    this.updateAlphaOffsetAngle = function (angle) {
        this.alphaOffsetAngle = angle;
        this.update();
    };

    this.dispose = function () {
        this.disconnect();
    };

    var getInteractionData = function (event) {
        return event.touches && event.touches[event.touches.length - 1] || event;
    }

    var startRotation = (function (event) {

        var data = getInteractionData(event);
        appState = CONTROLLER_STATE.MANUAL_ROTATE;

        this.freeze = true;

        tmpQuat.copy(this.object.quaternion);

        startX = currentX = data.pageX;
        startY = currentY = data.pageY;

        // Set consistent scroll speed based on current viewport width/height
        scrollSpeedX = (1200 / window.innerWidth) * 0.2;
        scrollSpeedY = (800 / window.innerHeight) * 0.2;

        if (data.type && data.type === "mousedown") {
            this.element.addEventListener('mousemove', this.onDocumentMouseMove, false);
            this.element.addEventListener('mouseup', this.onDocumentMouseUp, false);
        }
        else {
            this.element.addEventListener('touchmove', this.onDocumentTouchMove, false);
            this.element.addEventListener('touchend', this.onDocumentTouchEnd, false);
        }

        fireEvent(CONTROLLER_EVENT.MANUAL_CONTROL + 'start');
        fireEvent(CONTROLLER_EVENT.ROTATE_CONTROL + 'start');

    }).bind(this);

    var updateRotation = (function (event) {
        var data = getInteractionData(event);
        appState = CONTROLLER_STATE.MANUAL_ROTATE;
        currentX = data.pageX;
        currentY = data.pageY;
    }).bind(this);

    var stopRotation = (function (event) {
        if (event.type === "mouseup") {
            this.element.removeEventListener('mousemove', this.onDocumentMouseMove, false);
            this.element.removeEventListener('mouseup', this.onDocumentMouseUp, false);
        }
        else {
            this.element.removeEventListener('touchmove', this.onDocumentTouchMove, false);
            this.element.removeEventListener('touchend', this.onDocumentTouchEnd, false);
        }
        appState = CONTROLLER_STATE.AUTO;
        this.freeze = false;
        fireEvent(CONTROLLER_EVENT.MANUAL_CONTROL + 'end');
        fireEvent(CONTROLLER_EVENT.ROTATE_CONTROL + 'end');
    }).bind(this);

    this.onDocumentMouseDown = startRotation;

    this.onDocumentMouseMove = updateRotation;

    this.onDocumentMouseUp = stopRotation;

    this.onDocumentTouchStart = startRotation;

    this.onDocumentTouchMove = updateRotation;

    this.onDocumentTouchEnd = stopRotation;

    this.updateManualMove = function () {

        var lat, lon;
        var phi, theta;

        var rotation = new THREE.Euler(0, 0, 0, 'YXZ');

        var rotQuat = new THREE.Quaternion();
        var objQuat = new THREE.Quaternion();

        var tmpZ, objZ, realZ;

        return function () {

            objQuat.copy(tmpQuat);

            if (appState === CONTROLLER_STATE.MANUAL_ROTATE) {
                lat = (startY - currentY) * scrollSpeedY;
                lon = (startX - currentX) * scrollSpeedX;

                phi = THREE.Math.degToRad(lat);
                theta = THREE.Math.degToRad(lon);

                rotQuat.set(0, Math.sin(theta / 2), 0, Math.cos(theta / 2));

                objQuat.multiply(rotQuat);

                rotQuat.set(Math.sin(phi / 2), 0, 0, Math.cos(phi / 2));

                objQuat.multiply(rotQuat);

                // Remove introduced z-axis rotation and add device's current z-axis rotation

                tmpZ = rotation.setFromQuaternion(tmpQuat, 'YXZ').z;
                objZ = rotation.setFromQuaternion(objQuat, 'YXZ').z;
                realZ = rotation.setFromQuaternion(deviceQuat || tmpQuat, 'YXZ').z;

                rotQuat.set(0, 0, Math.sin((realZ - tmpZ) / 2), Math.cos((realZ - tmpZ) / 2));

                tmpQuat.multiply(rotQuat);

                rotQuat.set(0, 0, Math.sin((realZ - objZ) / 2), Math.cos((realZ - objZ) / 2));

                objQuat.multiply(rotQuat);

                this.object.quaternion.copy(objQuat);

            }

        };

    }();

    this.connect();
};

DeviceOrientationController.prototype = Object.create(THREE.EventDispatcher.prototype);