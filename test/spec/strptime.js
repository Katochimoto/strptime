if (typeof require == 'function') {
    /*jshint -W020 */
    strptime = require('../../strptime');
    /*jshint -W020 */
    expect = require('expect.js');
}

describe('strftime', function() {
    it('Полное название месяца с большой буквы в РП', function() {
        var d = strptime('Today 9 July 2013 year', '%d %B %Y');

        expect(d.getDate()).to.be(9);
        expect(d.getMonth()).to.be(6);
        expect(d.getFullYear()).to.be(2013);
        expect(d.getHours()).to.be(0);
        expect(d.getMinutes()).to.be(0);
        expect(d.getSeconds()).to.be(0);
        expect(d.getMilliseconds()).to.be(0);
    });

    it('%Date_dBY_year_in_HM', function() {
        var d = strptime('november 2, 2013 at 22:25', '%Date_dBY_year_in_HM');

        expect(d.getDate()).to.be(2);
        expect(d.getMonth()).to.be(10);
        expect(d.getFullYear()).to.be(2013);
        expect(d.getHours()).to.be(22);
        expect(d.getMinutes()).to.be(25);
        expect(d.getSeconds()).to.be(0);
        expect(d.getMilliseconds()).to.be(0);
    });

    it('%Date_dBY_year', function() {
        var d = strptime('november 2, 2013', '%Date_dBY_year');

        expect(d.getDate()).to.be(2);
        expect(d.getMonth()).to.be(10);
        expect(d.getFullYear()).to.be(2013);
        expect(d.getHours()).to.be(0);
        expect(d.getMinutes()).to.be(0);
        expect(d.getSeconds()).to.be(0);
        expect(d.getMilliseconds()).to.be(0);
    });

    it('%Date_dBY', function() {
        var d = strptime('november 2, 2013', '%Date_dBY');

        expect(d.getDate()).to.be(2);
        expect(d.getMonth()).to.be(10);
        expect(d.getFullYear()).to.be(2013);
        expect(d.getHours()).to.be(0);
        expect(d.getMinutes()).to.be(0);
        expect(d.getSeconds()).to.be(0);
        expect(d.getMilliseconds()).to.be(0);
    });

    it('%Date_AdBY', function() {
        var d = strptime('Saturday, november 2, 2013', '%Date_AdBY');

        expect(d.getDate()).to.be(2);
        expect(d.getMonth()).to.be(10);
        expect(d.getFullYear()).to.be(2013);
        expect(d.getHours()).to.be(0);
        expect(d.getMinutes()).to.be(0);
        expect(d.getSeconds()).to.be(0);
        expect(d.getMilliseconds()).to.be(0);
    });

    it('%Date_dBA', function() {
        var d = strptime('november 2, Saturday', '%Date_dBA');

        expect(d.getDate()).to.be(2);
        expect(d.getMonth()).to.be(10);
        expect(d.getFullYear()).to.be(1900);
        expect(d.getHours()).to.be(0);
        expect(d.getMinutes()).to.be(0);
        expect(d.getSeconds()).to.be(0);
        expect(d.getMilliseconds()).to.be(0);
    });

    it('%Date_df_in_HM', function() {
        var d = strptime('nov., 2 at 22:30', '%Date_df_in_HM');

        expect(d.getDate()).to.be(2);
        expect(d.getMonth()).to.be(10);
        expect(d.getFullYear()).to.be(1900);
        expect(d.getHours()).to.be(22);
        expect(d.getMinutes()).to.be(30);
        expect(d.getSeconds()).to.be(0);
        expect(d.getMilliseconds()).to.be(0);
    });

    it('%Date_dfY', function() {
        var d = strptime('2 nov. 2013', '%Date_dfY');

        expect(d.getDate()).to.be(2);
        expect(d.getMonth()).to.be(10);
        expect(d.getFullYear()).to.be(2013);
        expect(d.getHours()).to.be(0);
        expect(d.getMinutes()).to.be(0);
        expect(d.getSeconds()).to.be(0);
        expect(d.getMilliseconds()).to.be(0);
    });

    it('%Date_dB_in_HM', function() {
        var d = strptime('november 2 at 22:32', '%Date_dB_in_HM');

        expect(d.getDate()).to.be(2);
        expect(d.getMonth()).to.be(10);
        expect(d.getFullYear()).to.be(1900);
        expect(d.getHours()).to.be(22);
        expect(d.getMinutes()).to.be(32);
        expect(d.getSeconds()).to.be(0);
        expect(d.getMilliseconds()).to.be(0);
    });

    it('%Date_df', function() {
        var d = strptime('2 nov.', '%Date_df');

        expect(d.getDate()).to.be(2);
        expect(d.getMonth()).to.be(10);
        expect(d.getFullYear()).to.be(1900);
        expect(d.getHours()).to.be(0);
        expect(d.getMinutes()).to.be(0);
        expect(d.getSeconds()).to.be(0);
        expect(d.getMilliseconds()).to.be(0);
    });

    it('%Date_iso', function() {
        var d = strptime('2013-11-02T22:34:21', '%Date_iso');

        expect(d.getDate()).to.be(2);
        expect(d.getMonth()).to.be(10);
        expect(d.getFullYear()).to.be(2013);
        expect(d.getHours()).to.be(22);
        expect(d.getMinutes()).to.be(34);
        expect(d.getSeconds()).to.be(21);
        expect(d.getMilliseconds()).to.be(0);
    });

    it('%Date_dmY__dot', function() {
        var d = strptime('02.11.2013', '%Date_dmY__dot');

        expect(d.getDate()).to.be(2);
        expect(d.getMonth()).to.be(10);
        expect(d.getFullYear()).to.be(2013);
        expect(d.getHours()).to.be(0);
        expect(d.getMinutes()).to.be(0);
        expect(d.getSeconds()).to.be(0);
        expect(d.getMilliseconds()).to.be(0);
    });

    it('%Date_FT', function() {
        var d = strptime('2013-11-02 22:36:05', '%Date_FT');

        expect(d.getDate()).to.be(2);
        expect(d.getMonth()).to.be(10);
        expect(d.getFullYear()).to.be(2013);
        expect(d.getHours()).to.be(22);
        expect(d.getMinutes()).to.be(36);
        expect(d.getSeconds()).to.be(5);
        expect(d.getMilliseconds()).to.be(0);
    });

    it('%Date_dmY__minus', function() {
        var d = strptime('02-11-2013', '%Date_dmY__minus');

        expect(d.getDate()).to.be(2);
        expect(d.getMonth()).to.be(10);
        expect(d.getFullYear()).to.be(2013);
        expect(d.getHours()).to.be(0);
        expect(d.getMinutes()).to.be(0);
        expect(d.getSeconds()).to.be(0);
        expect(d.getMilliseconds()).to.be(0);
    });

    it('%b', function() {
        var d = strptime('Nov', '%b');

        expect(d.getDate()).to.be(1);
        expect(d.getMonth()).to.be(10);
        expect(d.getFullYear()).to.be(1900);
        expect(d.getHours()).to.be(0);
        expect(d.getMinutes()).to.be(0);
        expect(d.getSeconds()).to.be(0);
        expect(d.getMilliseconds()).to.be(0);
    });

    it('%h', function() {
        var d = strptime('Nov', '%h');

        expect(d.getDate()).to.be(1);
        expect(d.getMonth()).to.be(10);
        expect(d.getFullYear()).to.be(1900);
        expect(d.getHours()).to.be(0);
        expect(d.getMinutes()).to.be(0);
        expect(d.getSeconds()).to.be(0);
        expect(d.getMilliseconds()).to.be(0);
    });

    it('%B', function() {
        var d = strptime('November', '%B');

        expect(d.getDate()).to.be(1);
        expect(d.getMonth()).to.be(10);
        expect(d.getFullYear()).to.be(1900);
        expect(d.getHours()).to.be(0);
        expect(d.getMinutes()).to.be(0);
        expect(d.getSeconds()).to.be(0);
        expect(d.getMilliseconds()).to.be(0);
    });

    it('%f', function() {
        var d = strptime('Nov.', '%f');

        expect(d.getDate()).to.be(1);
        expect(d.getMonth()).to.be(10);
        expect(d.getFullYear()).to.be(1900);
        expect(d.getHours()).to.be(0);
        expect(d.getMinutes()).to.be(0);
        expect(d.getSeconds()).to.be(0);
        expect(d.getMilliseconds()).to.be(0);
    });

    it('%g', function() {
        var d = strptime('13', '%g');

        expect(d.getDate()).to.be(1);
        expect(d.getMonth()).to.be(0);
        expect(d.getFullYear()).to.be(2013);
        expect(d.getHours()).to.be(0);
        expect(d.getMinutes()).to.be(0);
        expect(d.getSeconds()).to.be(0);
        expect(d.getMilliseconds()).to.be(0);
    });

    it('%G', function() {
        var d = strptime('2013', '%G');

        expect(d.getDate()).to.be(1);
        expect(d.getMonth()).to.be(0);
        expect(d.getFullYear()).to.be(2013);
        expect(d.getHours()).to.be(0);
        expect(d.getMinutes()).to.be(0);
        expect(d.getSeconds()).to.be(0);
        expect(d.getMilliseconds()).to.be(0);
    });

    it('%d', function() {
        var d = strptime('02', '%d');

        expect(d.getDate()).to.be(2);
        expect(d.getMonth()).to.be(0);
        expect(d.getFullYear()).to.be(1900);
        expect(d.getHours()).to.be(0);
        expect(d.getMinutes()).to.be(0);
        expect(d.getSeconds()).to.be(0);
        expect(d.getMilliseconds()).to.be(0);
    });

    it('%d', function() {
        var d = strptime('02', '%d');

        expect(d.getDate()).to.be(2);
        expect(d.getMonth()).to.be(0);
        expect(d.getFullYear()).to.be(1900);
        expect(d.getHours()).to.be(0);
        expect(d.getMinutes()).to.be(0);
        expect(d.getSeconds()).to.be(0);
        expect(d.getMilliseconds()).to.be(0);
    });

    it('%e', function() {
        var d = strptime(' 2', '%e');

        expect(d.getDate()).to.be(2);
        expect(d.getMonth()).to.be(0);
        expect(d.getFullYear()).to.be(1900);
        expect(d.getHours()).to.be(0);
        expect(d.getMinutes()).to.be(0);
        expect(d.getSeconds()).to.be(0);
        expect(d.getMilliseconds()).to.be(0);
    });

    it('%H', function() {
        var d = strptime('22', '%H');

        expect(d.getDate()).to.be(1);
        expect(d.getMonth()).to.be(0);
        expect(d.getFullYear()).to.be(1900);
        expect(d.getHours()).to.be(22);
        expect(d.getMinutes()).to.be(0);
        expect(d.getSeconds()).to.be(0);
        expect(d.getMilliseconds()).to.be(0);
    });

    it('%I', function() {
        var d = strptime('5 PM', '%I %p');

        expect(d.getDate()).to.be(1);
        expect(d.getMonth()).to.be(0);
        expect(d.getFullYear()).to.be(1900);
        expect(d.getHours()).to.be(17);
        expect(d.getMinutes()).to.be(0);
        expect(d.getSeconds()).to.be(0);
        expect(d.getMilliseconds()).to.be(0);

        d = strptime('5 AM', '%I %p');

        expect(d.getDate()).to.be(1);
        expect(d.getMonth()).to.be(0);
        expect(d.getFullYear()).to.be(1900);
        expect(d.getHours()).to.be(5);
        expect(d.getMinutes()).to.be(0);
        expect(d.getSeconds()).to.be(0);
        expect(d.getMilliseconds()).to.be(0);
    });

    it('%m', function() {
        var d = strptime('11', '%m');

        expect(d.getDate()).to.be(1);
        expect(d.getMonth()).to.be(10);
        expect(d.getFullYear()).to.be(1900);
        expect(d.getHours()).to.be(0);
        expect(d.getMinutes()).to.be(0);
        expect(d.getSeconds()).to.be(0);
        expect(d.getMilliseconds()).to.be(0);
    });

    it('%M', function() {
        var d = strptime('01', '%M');

        expect(d.getDate()).to.be(1);
        expect(d.getMonth()).to.be(0);
        expect(d.getFullYear()).to.be(1900);
        expect(d.getHours()).to.be(0);
        expect(d.getMinutes()).to.be(1);
        expect(d.getSeconds()).to.be(0);
        expect(d.getMilliseconds()).to.be(0);
    });

    it('%S', function() {
        var d = strptime('01', '%S');

        expect(d.getDate()).to.be(1);
        expect(d.getMonth()).to.be(0);
        expect(d.getFullYear()).to.be(1900);
        expect(d.getHours()).to.be(0);
        expect(d.getMinutes()).to.be(0);
        expect(d.getSeconds()).to.be(1);
        expect(d.getMilliseconds()).to.be(0);
    });

    it('%y', function() {
        var d = strptime('13', '%y');

        expect(d.getDate()).to.be(1);
        expect(d.getMonth()).to.be(0);
        expect(d.getFullYear()).to.be(2013);
        expect(d.getHours()).to.be(0);
        expect(d.getMinutes()).to.be(0);
        expect(d.getSeconds()).to.be(0);
        expect(d.getMilliseconds()).to.be(0);
    });

    it('%Y', function() {
        var d = strptime('2013', '%Y');

        expect(d.getDate()).to.be(1);
        expect(d.getMonth()).to.be(0);
        expect(d.getFullYear()).to.be(2013);
        expect(d.getHours()).to.be(0);
        expect(d.getMinutes()).to.be(0);
        expect(d.getSeconds()).to.be(0);
        expect(d.getMilliseconds()).to.be(0);
    });

    it('%Y', function() {
        var d = strptime('2013', '%Y');

        expect(d.getDate()).to.be(1);
        expect(d.getMonth()).to.be(0);
        expect(d.getFullYear()).to.be(2013);
        expect(d.getHours()).to.be(0);
        expect(d.getMinutes()).to.be(0);
        expect(d.getSeconds()).to.be(0);
        expect(d.getMilliseconds()).to.be(0);
    });

    it('%z', function() {
        var d = strptime('-0100', '%z');

        expect(d.getDate()).to.be(1);
        expect(d.getMonth()).to.be(0);
        expect(d.getFullYear()).to.be(1900);
        expect(d.getHours()).to.be(1);
        expect(d.getMinutes()).to.be(0);
        expect(d.getSeconds()).to.be(0);
        expect(d.getMilliseconds()).to.be(0);
    });

    it('%l', function() {
        var d = strptime('5 PM', '%l %p');

        expect(d.getDate()).to.be(1);
        expect(d.getMonth()).to.be(0);
        expect(d.getFullYear()).to.be(1900);
        expect(d.getHours()).to.be(17);
        expect(d.getMinutes()).to.be(0);
        expect(d.getSeconds()).to.be(0);
        expect(d.getMilliseconds()).to.be(0);

        d = strptime('5 AM', '%l %p');

        expect(d.getDate()).to.be(1);
        expect(d.getMonth()).to.be(0);
        expect(d.getFullYear()).to.be(1900);
        expect(d.getHours()).to.be(5);
        expect(d.getMinutes()).to.be(0);
        expect(d.getSeconds()).to.be(0);
        expect(d.getMilliseconds()).to.be(0);
    });

    it('%s', function() {
        var d = strptime('1383419140', '%s');

        expect(d.getDate()).to.be(2);
        expect(d.getMonth()).to.be(10);
        expect(d.getFullYear()).to.be(2013);
        expect(d.getHours()).to.be(19);
        expect(d.getMinutes()).to.be(5);
        expect(d.getSeconds()).to.be(40);
        expect(d.getMilliseconds()).to.be(0);
    });
});
