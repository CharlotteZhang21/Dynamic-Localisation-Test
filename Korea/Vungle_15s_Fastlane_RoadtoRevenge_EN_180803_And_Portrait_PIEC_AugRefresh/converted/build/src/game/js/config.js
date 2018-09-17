/* eslint-disable no-undef */
/**
 * File that is used to store and get config variables for the playable
 */
// eslint-disable-next-line no-unused-vars
class Config {
  /**
   * Get someConfigurationVariable from global config
   * @return {number} Return the someConfigurationVariable defined in the Template.html or the
   * default value
   */
  static get godMode() {
    const defaultValue = true;
    return Config.getExistingOrDefaultValue(
      playableConfig.godMode,
      defaultValue,
    );
  }

  static get carsToBoss() {
    const defaultValue = 12;
    return Config.getExistingOrDefaultValue(
      playableConfig.carsToBoss,
      defaultValue,
    );
  }

  static get playerHP() {
    const defaultValue = 100;
    return Config.getExistingOrDefaultValue(
      playableConfig.playerHP,
      defaultValue,
    );
  }

  static get rocketDamage() {
    const defaultValue = 40;
    return Config.getExistingOrDefaultValue(
      playableConfig.rocketDamage,
      defaultValue,
    );
  }

  static get bulletDamage() {
    const defaultValue = 10;
    return Config.getExistingOrDefaultValue(
      playableConfig.bulletDamage,
      defaultValue,
    );
  }

  static get wreckDamage() {
    const defaultValue = 20;
    return Config.getExistingOrDefaultValue(
      playableConfig.wreckDamage,
      defaultValue,
    );
  }

  /**
   * Checks if the existing value actually exists. If it doesn't it returns the default value.
   * @param pExistingValue The value which should be checked for existence
   * @param pDefaultValue The default value that should be returned if the the existing value is
   * undefined
   * @return {*}
   */
  static getExistingOrDefaultValue(pExistingValue, pDefaultValue) {
    return typeof pExistingValue !== 'undefined' ? pExistingValue : pDefaultValue;
  }

  // region Wrapper Getters
  /**
   * Define the iOS store link here. Replace the default value with the actual store link.
   * @return {String}
   */
  static get iOSStoreLink() {
    // Example value: 'https://itunes.apple.com/us/app/adventure-capitalist/id927006017?mt=8'
    const defaultValue = 'https://itunes.apple.com/us/app/fastlane-road-to-revenge/id1169029463?mt=8';
    const returnValue = Config.getExistingOrDefaultValue(
      playableConfig.iOSStoreLink,
      defaultValue,
    );

    if (returnValue === '') throw new Error('iOS install link is undefined');
    if (typeof returnValue !== 'string') {
      throw new TypeError('iOS store link must be of type \'string\'');
    }
    return returnValue;
  }

  /**
   * Define the Android store link here. Replace the default value with the actual store link.
   * @return {String}
   */
  static get androidStoreLink() {
    // Example value: 'https://play.google.com/store/apps/details?id=com.kongregate.mobile.adventurecapitalist.google'
    const defaultValue = 'https://play.google.com/store/apps/details?id=com.spaceapegames.fastlane&hl=en';
    const returnValue = Config.getExistingOrDefaultValue(
      playableConfig.androidStoreLink,
      defaultValue,
    );

    if (returnValue === '') throw new Error('Android install link is undefined');
    if (typeof returnValue !== 'string') {
      throw new TypeError('Android store link must be of type \'string\'');
    }
    return returnValue;
  }

  /**
   * Define the name of the app here. Replace the default value with the actual app name
   * @return {String}
   */
  static get appName() {
    // Example value: 'big-fish-casino'
    const defaultValue = 'fastlane-road-to-revenge';
    const returnValue = Config.getExistingOrDefaultValue(
      playableConfig.appName,
      defaultValue,
    );

    if (returnValue === '') throw new Error('App name is undefined');
    if (typeof returnValue !== 'string') {
      throw new TypeError('App name must be of type \'string\'');
    }
    return returnValue;
  }
  // endregion
}
