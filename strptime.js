/**
 * User: rikishi
 * Date: 06.07.13
 * Time: 21:17
 *
 */
(function() {
    'use strict';

    var strptime = function(str, format) {

    };

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

    (function(strptime) {

        strptime.locale = {
            'a': ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            'A': ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            'b': ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            'B': ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            'f': ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'Jun.', 'Jul.', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.'],
            'c': '%Y-%m-%d %H:%M:%S',
            'P': ['am', 'pm'],
            'r': '%I:%M:%S %p',
            'x': '%m/%d/%y',
            'X': '%H:%M:%S',
            'day': ['Yesterday', 'Today', 'Tomorrow'],

            // алиас падежа обязательно указать после обозначения
            'bg': ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            'Bg': ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            'fg': ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'Jun.', 'Jul.', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.'],

            'Date_dBY_year_in_HM': '%#B %-d, %Y at %-H:%M',
            'Date_dBY_year': '%#B %-d, %Y',
            'Date_dBY': '%#B %-d, %Y',
            'Date_AdBY': '%A, %#B %-d, %Y',
            'Date_dBA': '%#B %-d, %A',
            'Date_df_in_HM': '%#f, %-d at %-H:%M',
            'Date_dfY': '%-d %#f %Y',
            'Date_dB_in_HM': '%#B %-d at %-H:%M',
            'Date_df': '%-d %#f'
        };
    }(strptime));


    (function(strptime) {

        var locale = strptime.locale;

        var strRegNum2 = '([0-9]{2}|[0\s]?[0-9]{1})';
        var strRegNum3 = '([0-9]{3}|[0\s]?[0-9]{2}|\s?[0\s]?[0-9]{1})';

        var specifiers = {
            '%': {
                'reg': '(\%)'
            },
            'a': {
                'reg': '(\S+)'
            },
            'A': {
                'reg': '(\S+)'
            },
            'b': {
                'reg': '(\S+)'
            },
            'h': {
                'reg': '(\S+)'
            },
            'B': {
                'reg': '(\S+)'
            },
            'f': {
                'reg': '(\S+)'
            },
            'c': function() {
                return locale.c;
            },
            'g': {
                'reg': strRegNum2,
                'check': function(data, mode, numPad, genitive) {
                    data = data|0;
                    return data > -1 && data < 100;
                }
            },
            'G': {
                'reg': '(\d{4})',
                'check': function(data, mode, numPad, genitive) {
                    data = data|0;
                    return data > -1;
                }
            },
            'C': {
                'reg': strRegNum2,
                'check': function(data, mode, numPad, genitive) {
                    data = data|0;
                    return data > -1 && data < 100;
                }
            },
            'd': {
                'reg': strRegNum2,
                'check': function(data, mode, numPad, genitive) {
                    data = data|0;
                    return data > 0 && data < 32;
                }
            },
            'e': {
                'reg': strRegNum2,
                'check': function(data, mode, numPad, genitive) {
                    data = data|0;
                    return data > 0 && data < 32;
                }
            },
            'D': function() {
                return '%m/%d/%y';
            },
            'F': function() {
                return '%Y-%m-%d';
            },
            'H': {
                'reg': strRegNum2,
                'check': function(data, mode, numPad, genitive) {
                    data = data|0;
                    return data > -1 && data < 24;
                }
            },
            'I': {
                'reg': strRegNum2,
                'check': function(data, mode, numPad, genitive) {
                    data = data|0;
                    return data > 0 && data < 13;
                }
            },
            'j': {
                'reg': strRegNum3,
                'check': function(data, mode, numPad, genitive) {
                    data = data|0;
                    return data > 0 && data < 367;
                }
            },
            'm': {
                'reg': strRegNum2,
                'check': function(data, mode, numPad, genitive) {
                    data = data|0;
                    return data > 0 && data < 13;
                }
            },
            'M': {
                'reg': strRegNum2,
                'check': function(data, mode, numPad, genitive) {
                    data = data|0;
                    return data > -1 && data < 60;
                }
            },
            'n': {
                'reg': '(\n)'
            },
            'p': {
                'reg': '(\S+)'
            },
            'P': {
                'reg': '(\S+)'
            },
            'r': function() {
                return locale.r;
            },
            'R': function() {
                return '%H:%M';
            },
            'S': {
                'reg': strRegNum2,
                'check': function(data, mode, numPad, genitive) {
                    data = data|0;
                    return data > -1 && data < 61;
                }
            },
            't': {
                'reg': '(\t)'
            },
            'T': function() {
                return '%H:%M:%S';
            },
            'u': {
                'reg': '(\d)',
                'check': function(data, mode, numPad, genitive) {
                    data = data|0;
                    return data > -1 && data < 7;
                }
            },
            'U': {
                'reg': strRegNum2,
                'check': function(data, mode, numPad, genitive) {
                    data = data|0;
                    return data > -1 && data < 54;
                }
            },
            'w': {
                'reg': '(\d)',
                'check': function(data, mode, numPad, genitive) {
                    data = data|0;
                    return data > -1 && data < 7;
                }
            },
            'W': {
                'reg': strRegNum2,
                'check': function(data, mode, numPad, genitive) {
                    data = data|0;
                    return data > -1 && data < 54;
                }
            },
            'x': function() {
                return locale.x;
            },
            'X': function() {
                return locale.X;
            },
            'y': {
                'reg': strRegNum2,
                'check': function(data, mode, numPad, genitive) {
                    data = data|0;
                    return data > -1 && data < 100;
                }
            },
            'Y': {
                'reg': '(\d{4})',
                'check': function(data, mode, numPad, genitive) {
                    data = data|0;
                    return data > -1;
                }
            },
            'z': {
                'reg': '([+\-]\d{4})'
            },
            'Z': {
                'reg': '(\S+)'
            },
            'l': {
                'reg': strRegNum2,
                'check': function(data, mode, numPad, genitive) {
                    data = data|0;
                    return data > 0 && data < 13;
                }
            },
            's': {
                'reg': '(\d{10})'
            },


            'Date_iso': function() {
                return '%Y-%m-%dT%H:%M:%S';
            },
            'Date_dBY_year_in_HM': function() {
                return locale.Date_dBY_year_in_HM;
            },
            'Date_dBY_year': function() {
                return locale.Date_dBY_year;
            },
            'Date_dBY': function() {
                return locale.Date_dBY;
            },
            'Date_dBA': function() {
                return locale.Date_dBA;
            },
            'Date_AdBY': function() {
                return locale.Date_AdBY;
            },
            'Date_df_in_HM': function() {
                return locale.Date_df_in_HM;
            },
            'Date_dfY': function() {
                return locale.Date_dfY;
            },
            'Date_dB_in_HM': function() {
                return locale.Date_dB_in_HM;
            },
            'Date_dmY__dot': function() {
                return '%d.%m.%Y';
            },
            'Date_df': function() {
                return locale.Date_df;
            },
            'Date_FT': function() {
                return '%F %T';
            },
            'Date_dmY__minus': function() {
                return '%d-%m-%Y';
            }
        };

    }(strptime));

}());