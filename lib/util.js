(function(strptime) {

    var locale = strptime.locale;

    var strRegNum2 = '([0-9]{2}|[0\\s]?[0-9]{1})';
    var strRegNum3 = '([0-9]{3}|[0\\s]?[0-9]{2}|\\s?[0\\s]?[0-9]{1})';
    var strRegStr = '(\\S+)';
    var monthDay = [31, [28, 29], 31, 30, 31, 30, 31, 31, 30, 31, 30 ,31];
    var regAgregatSearch = /%(Date_[a-zA-Z0-9_]+|[cDFrRTxX])/g;
    var regAgregat = /%(Date_[a-zA-Z0-9_]+|[cDFrRTxX])/;
    var regSpec = /%(([#\^!~]{0,2})[aAbBfh]|([0\-_]?)[degHImMSVWyl]|[GnpPtuUwYzZs%])/g;

    var specifiers = {
        '%': {
            'reg': '(\\%)',
            'make': function() {
                return true;
            }
        },
        'a': {
            'reg': strRegStr,
            'make': function(date, data) {
                return inArray(locale.a, data) !== -1;
            }
        },
        'A': {
            'reg': strRegStr,
            'make': function(date, data) {
                return inArray(locale.A, data) !== -1;
            }
        },
        'b': {
            'reg': strRegStr,
            'make': function(date, data) {
                data = inArray(locale.b, data);
                if (data === -1) {
                    return false;
                }

                date.setUTCMonth(data);
                return true;
            }
        },
        'h': {
            'reg': strRegStr,
            'make': function(date, data) {
                data = inArray(locale.b, data);
                if (data === -1) {
                    return false;
                }

                date.setUTCMonth(data);
                return true;
            }
        },
        'B': {
            'reg': strRegStr,
            'make': function(date, data) {
                data = inArray(locale.B, data);
                if (data === -1) {
                    return false;
                }

                date.setUTCMonth(data);
                return true;
            }
        },
        'f': {
            'reg': strRegStr,
            'make': function(date, data) {
                data = inArray(locale.f, data);
                if (data === -1) {
                    return false;
                }

                date.setUTCMonth(data);
                return true;
            }
        },
        'g': {
            'reg': strRegNum2,
            'make': function(date, data) {
                data = data|0;
                if (data < 0 || data > 99) {
                    return false;
                }

                data = data + 100 * ((new Date()).getUTCFullYear() / 100|0);
                date.setUTCFullYear(data);
                return true;
            }
        },
        'G': {
            'reg': '(\\d{4})',
            'make': function(date, data) {
                data = data|0;
                date.setUTCFullYear(data);
                return true;
            }
        },
        'd': {
            'reg': strRegNum2,
            'make': function(date, data) {
                data = data|0;
                if (data < 1 || data > 31) {
                    return false;
                }
                date.setUTCDate(data);
                return true;
            }
        },
        'e': {
            'reg': strRegNum2,
            'make': function(date, data) {
                data = data|0;
                if (data < 1 || data > 31) {
                    return false;
                }
                date.setUTCDate(data);
                return true;
            }
        },

        'H': {
            'reg': strRegNum2,
            'make': function(date, data) {
                data = data|0;
                if (data < 0 || data > 23) {
                    return false;
                }
                date.setUTCHours(data);
                return true;
            }
        },
        /*'I': {
         'reg': strRegNum2,
         'make': function(date, data) {
         data = data|0;
         return data > 0 && data < 13;
         }
         },*/
        'm': {
            'reg': strRegNum2,
            'make': function(date, data) {
                data = data|0;
                if (data < 1 || data > 12) {
                    return false;
                }
                date.setUTCMonth(data - 1);
                return true;
            }
        },
        'M': {
            'reg': strRegNum2,
            'make': function(date, data) {
                data = data|0;
                if (data < 0 || data > 59) {
                    return false;
                }
                date.setUTCMinutes(data);
                return true;
            }
        },
        'n': {
            'reg': '(\\n)',
            'make': function() {
                return true;
            }
        },
        /*'p': {
         'reg': strRegStr,
         'make': function(date, data) {

         }
         },
         'P': {
         'reg': strRegStr,
         'make': function(date, data) {

         }
         },*/

        'S': {
            'reg': strRegNum2,
            'make': function(date, data) {
                data = data|0;
                if (data < 0 || data > 60) {
                    return false;
                }
                date.setUTCSeconds(data);
                return true;
            }
        },
        't': {
            'reg': '(\\t)',
            'make': function() {
                return true;
            }
        },
        'u': {
            'reg': '(\\d)',
            'make': function() {
                return true;
            }
        },
        'U': {
            'reg': strRegNum2,
            'make': function() {
                return true;
            }
        },
        'w': {
            'reg': '(\\d)',
            'make': function() {
                return true;
            }
        },
        'W': {
            'reg': strRegNum2,
            'make': function() {
                return true;
            }
        },
        'y': {
            'reg': strRegNum2,
            'make': function(date, data) {
                data = data|0;
                if (data < 0 || data > 99) {
                    return false;
                }

                data = data + 100 * ((new Date()).getUTCFullYear() / 100|0);
                date.setUTCFullYear(data);
                return true;
            }
        },
        'Y': {
            'reg': '(\\d{4})',
            'make': function(date, data) {
                data = data|0;
                date.setUTCFullYear(data);
                return true;
            }
        },
        /*'z': {
         'reg': '([+\\-]\\d{4})',
         'make': function(date, data) {

         }
         },
         'Z': {
         'reg': strRegStr,
         'make': function(date, data) {

         }
         },
         'l': {
         'reg': strRegNum2,
         'make': function(date, data) {
         data = data|0;
         return data > 0 && data < 13;
         }
         },*/
        's': {
            'reg': '(\\d+)',
            'make': function(date, data) {
                data = data|0;
                date.setUTCMilliseconds(data);
                return true;
            }
        },



        'c': function() {
            return locale.c;
        },
        'r': function() {
            return locale.r;
        },
        'R': function() {
            return '%H:%M';
        },
        'T': function() {
            return '%H:%M:%S';
        },
        'x': function() {
            return locale.x;
        },
        'X': function() {
            return locale.X;
        },
        'D': function() {
            return '%m/%d/%y';
        },
        'F': function() {
            return '%Y-%m-%d';
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

    strptime.parse = function(str, format) {
        var loop = 5;
        formatTransform.make = [];

        while (regAgregatSearch.test(format) && loop) {
            format = format.replace(regAgregat, formatTransform);
            loop--;
        }


        var reg = format.replace(regSpec, formatTransform);
        // TODO добавить проверку повторяющихся форматов


        var match = str.match(reg);

        if (!match) {
            return null;
        }

        var date = new Date(0);
        for (var i = 1, l = match.length; i < l; i++) {
            if (!formatTransform.make[i - 1](date, match[i])) {
                return null;
            }
        }

        return date;
    };

    function formatTransform(_, spec, mod, numPad, pos, str) {
        spec = '' + spec;
        mod = '' + mod;

        spec = spec.replace(/^[#_0\^\-!~]+/, '');
        var s = specifiers[spec];

        if (!s) {
            return _;
        }

        /*var genitive = false;
         if (mod.indexOf('!') === -1
         && spec.length === 1
         && (mod.indexOf('~') > -1 || ('bBf'.indexOf(spec) > -1 && /%[0\-_]?d[\s]+$/.test(str.substr(0, pos))))) {

         genitive = true;
         }

         return s(formatTransform.date, mod, numPad, genitive);
         */

        if (typeof s === 'function') {
            return s();
        }

        formatTransform.make.push(s.make);
        return s.reg;
    }

    function inArray(arr, el) {
        for (var i = 0, l = arr.length; i < l; i++) {
            if (el === arr[i]) {
                return i;
            }
        }

        return -1;
    }

}(strptime));