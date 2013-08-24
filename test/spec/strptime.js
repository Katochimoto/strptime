if (typeof require == 'function') {
    /*jshint -W020 */
    strptime = require('../../strptime');
    /*jshint -W020 */
    expect = require('expect.js');
}

describe('strftime', function() {
    it('Полное название месяца с большой буквы в РП', function() {
        var d = strptime('Today 9 July 2013 year', '%d %B %Y');
        expect(d.getUTCDate()).to.be(9);
        expect(d.getUTCMonth()).to.be(6);
        expect(d.getUTCFullYear()).to.be(2013);
    });


});
