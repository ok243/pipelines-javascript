var assert = require('assert');

describe('String', function () {
    describe('#indexOf', function () {
        it('should return -1 when the substring is not present', function () {
            var myString = 'test';

            assert.equal(-1, myString.indexOf('x'));
            assert.equal(-1, myString.indexOf('y'));
        });
    });
});


describe('custom test', function () {
    it('cool test', function () {
        assert.equal(-1, -1);
    });
});

describe('custom test 2', function () {
    it('cool failed test', function () {
        assert.equal(-1, 0);
    });
});