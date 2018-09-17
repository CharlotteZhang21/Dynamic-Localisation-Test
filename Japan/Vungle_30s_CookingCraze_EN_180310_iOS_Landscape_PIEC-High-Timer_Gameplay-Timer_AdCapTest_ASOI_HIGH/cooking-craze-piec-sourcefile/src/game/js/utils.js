/* global images */
/* eslint no-param-reassign: ["error", { "props": false }] */
// eslint-disable-next-line no-unused-vars
class utils {
  // Used for centering object
  static center(obj) {
    utils.centerHor(obj);
    utils.centerVer(obj);
  }

  // Used for centering text only
  static centerText(txt, align = 'center') {
    const text = txt;
    text.textAlign = align;
    text.textBaseline = 'middle';
  }

  // Center in horizontal direction
  static centerHor(obj) {
    obj.regX = obj.getBounds().width / 2;
  }

  // Center in vertical direction
  static centerVer(obj) {
    obj.regY = obj.getBounds().height / 2;
  }

  /**
   * Find image by name
   * @param {string} name of the text object
   * @param {array} list name
   * @return {object} image
   */
  static findImage(name, list = images) {
    return list.find(x => x.name === name).image;
  }

  static choose(objects) {
    return objects[Math.floor(Math.random() * objects.length)];
  }
}
