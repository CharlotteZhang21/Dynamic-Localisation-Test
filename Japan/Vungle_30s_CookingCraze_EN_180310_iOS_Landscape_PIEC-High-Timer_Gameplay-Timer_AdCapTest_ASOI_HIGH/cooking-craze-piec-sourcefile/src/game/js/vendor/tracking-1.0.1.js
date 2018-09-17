!function(t,e){function n(){this.queue=[],this.stage="v1",this.variation="default",this.url="https://ads.cloudgames.com",this.publisher="cloudgames",this.game=null}switch(n.prototype.init=function(t){"string"==typeof(t=t||{}).url&&(this.url=t.url),"string"==typeof t.stage&&(this.stage=t.stage),"string"==typeof t.variation&&(this.variation=t.variation),"string"==typeof t.publisher&&(this.publisher=t.publisher),"string"==typeof t.game&&(this.game=t.game),this.startTransaction()},n.prototype.startTransaction=function(){var t=this.url+"/"+this.stage+"/transaction?publisher="+encodeURIComponent(this.publisher)+"&game="+encodeURIComponent(this.game)+"&variation="+encodeURIComponent(this.variation);this.requestJSON(t,function(t,e){t?setTimeout(this.startTransaction.bind(this),1e3):(this.transactionId=e.transactionId,this.handleQueue())}.bind(this))},n.prototype.track=function(t){if(this.transactionId){var e=this.url+"/"+this.stage+"/track?publisher="+encodeURIComponent(this.publisher)+"&game="+encodeURIComponent(this.game)+"&variation="+encodeURIComponent(this.variation)+"&event="+encodeURIComponent(t)+"&transactionId="+encodeURIComponent(this.transactionId);this.requestJSON(e,function(e,n){e?this.queue.push(t):this.handleQueue()}.bind(this))}else this.queue.push(t)},n.prototype.handleQueue=function(){for(;this.queue.length;){var t=this.queue.shift();this.track(t)}},n.prototype.requestJSON=function(t,e){try{var n=new XMLHttpRequest;e&&(n.onreadystatechange=function(){try{if(4===n.readyState&&200===n.status){var t=JSON.parse(this.responseText);e(null,t)}}catch(t){e(t)}}),n.open("GET",t,!0),n.send()}catch(t){console.log("XHR error",t)}},n.setup=function(){e.Tracking=new n,e.trackingAsyncInit&&"function"==typeof e.trackingAsyncInit&&e.trackingAsyncInit()},t.readyState){default:case"loading":t.addEventListener("DOMContentLoaded",n.setup);break;case"interactive":case"complete":n.setup()}}(document,window);