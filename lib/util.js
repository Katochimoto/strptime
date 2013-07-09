(function(strptime) {

    var inArray = Array.prototype.indexOf || function(el) {
        var l = this.length;
        var i = 0;
        while (i < l) {
            if (el == this[i]) {
                return i;
            }
            i++;
        }
        return -1;
    };

    var locale = strptime.locale;

    var strRegNum2 = '[\\d\\s]?\\d';
    var strRegNum3 = '\\d{3}|[0\\s]?\\d{2}|\\s?[0\\s]?\\d';
    var strRegStr = '\\S+';
    var monthDay = [31, [28, 29], 31, 30, 31, 30, 31, 31, 30, 31, 30 ,31];
    var regAgregatSearch = /%(Date_[a-zA-Z0-9_]+|[cDFrRTxX])/g;
    var regAgregat = /%(Date_[a-zA-Z0-9_]+|[cDFrRTxX])/;
    var regSpec = /%(([#\^!~]{0,2})[aAbBfh]|([0\-_]?)[degHImMSVWyl]|[GnpPtuUwYzZs%])/g;

    var specifiers = {
        '%': '\\%',
        'a': {
            'reg': strRegStr,
            'make': function(date, data) {
                return inArray.call(locale.a, data) !== -1;
            }
        },
        'A': {
            'reg': strRegStr,
            'make': function(date, data) {
                return inArray.call(locale.A, data) !== -1;
            }
        },
        'b': {
            'reg': strRegStr,
            'make': function(date, data) {
                data = inArray.call(locale.b, data);
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
                data = inArray.call(locale.b, data);
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
                data = inArray.call(locale.B, data);
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
                data = inArray.call(locale.f, data);
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
            'reg': '\\d{4}',
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
        'n': '\\n',
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
        't': '\\t',
        'u': '\\d',
        'U': strRegNum2,
        'w': '\\d',
        'W': strRegNum2,
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
            'reg': '\\d{4}',
            'make': function(date, data) {
                data = data|0;
                date.setUTCFullYear(data);
                return true;
            }
        },
        /*'z': {
         'reg': '[+\\-]\\d{4}',
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
            'reg': '\\d+',
            'make': function(date, data) {
                data = data|0;
                date.setUTCMilliseconds(data);
                return true;
            }
        },



        'c': locale.c,
        'r': locale.r,
        'R': '%H:%M',
        'T': '%H:%M:%S',
        'x': locale.x,
        'X': locale.X,
        'D': '%m/%d/%y',
        'F': '%Y-%m-%d',


        'Date_iso': '%Y-%m-%dT%H:%M:%S',
        'Date_dBY_year_in_HM': locale.Date_dBY_year_in_HM,
        'Date_dBY_year': locale.Date_dBY_year,
        'Date_dBY': locale.Date_dBY,
        'Date_dBA': locale.Date_dBA,
        'Date_AdBY': locale.Date_AdBY,
        'Date_df_in_HM': locale.Date_df_in_HM,
        'Date_dfY': locale.Date_dfY,
        'Date_dB_in_HM': locale.Date_dB_in_HM,
        'Date_dmY__dot': '%d.%m.%Y',
        'Date_df': locale.Date_df,
        'Date_FT': '%F %T',
        'Date_dmY__minus': '%d-%m-%Y'
    };

    strptime.parse = function(str, format) {
        str = '' + str;
        format = '' + format;

        var loop = 5;
        while (regAgregatSearch.test(format) && loop) {
            format = format.replace(regAgregat, formatTransform);
            loop--;
        }

        // TODO добавить проверку повторяющихся форматов

        formatTransform.make = [];
        var reg = format.replace(regSpec, formatTransform);
        reg = new RegExp(reg);
        var match = str.match(reg);

        if (!match || !formatTransform.make.length) {
            return null;
        }

        var date = new Date(0);
        for (var i = 0, l = formatTransform.make.length; i < l; i++) {
            if (!formatTransform.make[i](date, match[i + 1])) {
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

        switch (typeof(s)) {
            case 'function':
                return s();
            case 'string':
                return s;
            case 'object':
                formatTransform.make.push(s.make);
                return '(' + s.reg + ')';
            default:
                return _;
        }
    }

}(strptime));