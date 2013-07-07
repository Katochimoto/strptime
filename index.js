/**
 * User: rikishi
 * Date: 06.07.13
 * Time: 21:17
 *
 */
(function() {
    'use strict';

    require('lib/strptime.js');

    strptime.version = '0.0.1';

    var namespace;

    if (typeof module !== 'undefined') {
        namespace = module.exports = strptime;
    } else {
        namespace = (function() {
            return this || (1, eval)('this');
        }());
    }

    namespace.strptime = strptime;

    require('lib/locale.js');
    require('lib/util.js');

}());