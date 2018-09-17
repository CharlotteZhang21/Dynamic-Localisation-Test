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
  static get showInstallButton() {
    const defaultValue = true;
    return Config.getExistingOrDefaultValue(
      playableConfig.showInstallButton,
      defaultValue,
    );
  }

  static get duration() {
    const defaultValue = 30;
    return Config.getExistingOrDefaultValue(
      playableConfig.duration,
      defaultValue,
    );
  }

  static get idleTimer() {
    const defaultValue = 5;
    return Config.getExistingOrDefaultValue(
      playableConfig.idleTimer,
      defaultValue,
    );
  }

  static get customerWaitTime() {
    const defaultValue = 10;
    return Config.getExistingOrDefaultValue(
      playableConfig.customerWaitTime,
      defaultValue,
    );
  }

  static get slideDurations() {
    const defaultValue = [2, 2];
    return Config.getExistingOrDefaultValue(
      playableConfig.slideDurations,
      defaultValue,
    );
  }

  static get tutorialTexts() {
    const defaultValue = ['Tap to serve your customers!', 'Cook donuts before you serve them'];
    return Config.getExistingOrDefaultValue(
      playableConfig.tutorialTexts,
      defaultValue,
    );
  }

  static get orders() {
    const defaultValue = [];
    return Config.getExistingOrDefaultValue(
      playableConfig.orders,
      defaultValue,
    );
  }

  static get customerDelay() {
    const defaultValue = 2;
    return Config.getExistingOrDefaultValue(
      playableConfig.customerDelay,
      defaultValue,
    );
  }

  static get donutFryTime() {
    const defaultValue = 1;
    return Config.getExistingOrDefaultValue(
      playableConfig.donutFryTime,
      defaultValue,
    );
  }

  static get milkshakeRespawnTime() {
    const defaultValue = 1;
    return Config.getExistingOrDefaultValue(
      playableConfig.milkshakeRespawnTime,
      defaultValue,
    );
  }

  static get customers() {
    const defaultValue = 30;
    return Config.getExistingOrDefaultValue(
      playableConfig.customers,
      defaultValue,
    );
  }

  static get customerWalkTime() {
    const defaultValue = 3;
    return Config.getExistingOrDefaultValue(
      playableConfig.customerWalkTime,
      defaultValue,
    );
  }

  static getExistingOrDefaultValue(pExistingValue, pDefaultValue) {
    return typeof pExistingValue !== 'undefined' ? pExistingValue : pDefaultValue;
  }
}
