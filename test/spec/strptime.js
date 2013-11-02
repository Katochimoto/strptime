if (typeof require == 'function') {
    /*jshint -W020 */
    strptime = require('../../strptime');
    /*jshint -W020 */
    expect = require('expect.js');
}

describe('strftime', function() {
    it('Полное название месяца с большой буквы в РП', function() {
        var d = strptime('Today 9 July 2013 year', '%d %B %Y');

        expect(d.getTime()).to.be(new Date(Date.UTC(2013, 6, 9, 0, 0, 0, 0)).getTime());
    });

    it('%Date_dBY_year_in_HM', function() {
        var d = strptime('november 2, 2013 at 22:25', '%Date_dBY_year_in_HM');

        expect(d.getTime()).to.be(new Date(Date.UTC(2013, 10, 2, 22, 25, 0, 0)).getTime());
    });

    it('%Date_dBY_year', function() {
        var d = strptime('november 2, 2013', '%Date_dBY_year');

        expect(d.getTime()).to.be(new Date(Date.UTC(2013, 10, 2, 0, 0, 0, 0)).getTime());
    });

    it('%Date_dBY', function() {
        var d = strptime('november 2, 2013', '%Date_dBY');

        expect(d.getTime()).to.be(new Date(Date.UTC(2013, 10, 2, 0, 0, 0, 0)).getTime());
    });

    it('%Date_AdBY', function() {
        var d = strptime('Saturday, november 2, 2013', '%Date_AdBY');

        expect(d.getTime()).to.be(new Date(Date.UTC(2013, 10, 2, 0, 0, 0, 0)).getTime());
    });

    it('%Date_dBA', function() {
        var d = strptime('november 2, Saturday', '%Date_dBA');

        expect(d.getTime()).to.be(new Date(Date.UTC(1900, 10, 2, 0, 0, 0, 0)).getTime());
    });

    it('%Date_df_in_HM', function() {
        var d = strptime('nov., 2 at 22:30', '%Date_df_in_HM');

        expect(d.getTime()).to.be(new Date(Date.UTC(1900, 10, 2, 22, 30, 0, 0)).getTime());
    });

    it('%Date_dfY', function() {
        var d = strptime('2 nov. 2013', '%Date_dfY');

        expect(d.getTime()).to.be(new Date(Date.UTC(2013, 10, 2, 0, 0, 0, 0)).getTime());
    });

    it('%Date_dB_in_HM', function() {
        var d = strptime('november 2 at 22:32', '%Date_dB_in_HM');

        expect(d.getTime()).to.be(new Date(Date.UTC(1900, 10, 2, 22, 32, 0, 0)).getTime());
    });

    it('%Date_df', function() {
        var d = strptime('2 nov.', '%Date_df');

        expect(d.getTime()).to.be(new Date(Date.UTC(1900, 10, 2, 0, 0, 0, 0)).getTime());
    });

    it('%Date_iso', function() {
        var d = strptime('2013-11-02T22:34:21', '%Date_iso');

        expect(d.getTime()).to.be(new Date(Date.UTC(2013, 10, 2, 22, 34, 21, 0)).getTime());
    });

    it('%Date_dmY__dot', function() {
        var d = strptime('02.11.2013', '%Date_dmY__dot');

        expect(d.getTime()).to.be(new Date(Date.UTC(2013, 10, 2, 0, 0, 0, 0)).getTime());
    });

    it('%Date_FT', function() {
        var d = strptime('2013-11-02 22:36:05', '%Date_FT');

        expect(d.getTime()).to.be(new Date(Date.UTC(2013, 10, 2, 22, 36, 5, 0)).getTime());
    });

    it('%Date_dmY__minus', function() {
        var d = strptime('02-11-2013', '%Date_dmY__minus');

        expect(d.getTime()).to.be(new Date(Date.UTC(2013, 10, 2, 0, 0, 0, 0)).getTime());
    });

    it('%b', function() {
        var d = strptime('Nov', '%b');

        expect(d.getTime()).to.be(new Date(Date.UTC(1900, 10, 1, 0, 0, 0, 0)).getTime());
    });

    it('%h', function() {
        var d = strptime('Nov', '%h');

        expect(d.getTime()).to.be(new Date(Date.UTC(1900, 10, 1, 0, 0, 0, 0)).getTime());
    });

    it('%B', function() {
        var d = strptime('November', '%B');

        expect(d.getTime()).to.be(new Date(Date.UTC(1900, 10, 1, 0, 0, 0, 0)).getTime());
    });

    it('%f', function() {
        var d = strptime('Nov.', '%f');

        expect(d.getTime()).to.be(new Date(Date.UTC(1900, 10, 1, 0, 0, 0, 0)).getTime());
    });

    it('%g', function() {
        var d = strptime('13', '%g');

        expect(d.getTime()).to.be(new Date(Date.UTC(2013, 0, 1, 0, 0, 0, 0)).getTime());
    });

    it('%G', function() {
        var d = strptime('2013', '%G');

        expect(d.getTime()).to.be(new Date(Date.UTC(2013, 0, 1, 0, 0, 0, 0)).getTime());
    });

    it('%d', function() {
        var d = strptime('02', '%d');

        expect(d.getTime()).to.be(new Date(Date.UTC(1900, 0, 2, 0, 0, 0, 0)).getTime());
    });

    it('%d', function() {
        var d = strptime('02', '%d');

        expect(d.getTime()).to.be(new Date(Date.UTC(1900, 0, 2, 0, 0, 0, 0)).getTime());
    });

    it('%e', function() {
        var d = strptime(' 2', '%e');

        expect(d.getTime()).to.be(new Date(Date.UTC(1900, 0, 2, 0, 0, 0, 0)).getTime());
    });

    it('%H', function() {
        var d = strptime('22', '%H');

        expect(d.getTime()).to.be(new Date(Date.UTC(1900, 0, 1, 22, 0, 0, 0)).getTime());
    });

    it('%I', function() {
        var d = strptime('5 PM', '%I %p');

        expect(d.getTime()).to.be(new Date(Date.UTC(1900, 0, 1, 17, 0, 0, 0)).getTime());

        d = strptime('5 AM', '%I %p');

        expect(d.getTime()).to.be(new Date(Date.UTC(1900, 0, 1, 5, 0, 0, 0)).getTime());
    });

    it('%m', function() {
        var d = strptime('11', '%m');

        expect(d.getTime()).to.be(new Date(Date.UTC(1900, 10, 1, 0, 0, 0, 0)).getTime());
    });

    it('%M', function() {
        var d = strptime('01', '%M');

        expect(d.getTime()).to.be(new Date(Date.UTC(1900, 0, 1, 0, 1, 0, 0)).getTime());
    });

    it('%S', function() {
        var d = strptime('01', '%S');

        expect(d.getTime()).to.be(new Date(Date.UTC(1900, 0, 1, 0, 0, 1, 0)).getTime());
    });

    it('%y', function() {
        var d = strptime('13', '%y');

        expect(d.getTime()).to.be(new Date(Date.UTC(2013, 0, 1, 0, 0, 0, 0)).getTime());
    });

    it('%Y', function() {
        var d = strptime('2013', '%Y');

        expect(d.getTime()).to.be(new Date(Date.UTC(2013, 0, 1, 0, 0, 0, 0)).getTime());
    });

    it('%z', function() {
        var d = strptime('-0100', '%z');

        expect(d.getTime()).to.be(new Date(Date.UTC(1900, 0, 1, 1, 0, 0, 0)).getTime());
    });

    it('%l', function() {
        var d = strptime('5 PM', '%l %p');

        expect(d.getTime()).to.be(new Date(Date.UTC(1900, 0, 1, 17, 0, 0, 0)).getTime());

        d = strptime('5 AM', '%l %p');

        expect(d.getTime()).to.be(new Date(Date.UTC(1900, 0, 1, 5, 0, 0, 0)).getTime());
    });

    it('%s', function() {
        var d = strptime('1383419140', '%s');

        expect(d.getTime()).to.be(1383419140 * 1000);
    });
});
