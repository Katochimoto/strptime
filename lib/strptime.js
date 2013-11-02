/**
 * User: rikishi
 * Date: 07.07.13
 * Time: 19:17
 *
 */

/**
 * @param {String} str
 * @param {String} format
 * @param {Boolean} [utc]
 * @returns {Date|Null}
 */
/*jshint -W079 */
var strptime = function(str, format, utc) {
    return strptime.parse(str, format, utc);
};
