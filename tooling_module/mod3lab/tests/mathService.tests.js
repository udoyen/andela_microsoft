'use strict';

describe('mathService', function () {
    it('mathService is defined', function () {
        expect(mathService).toBeDefined();
    });
    it('add is defined', function() {
        expect(mathService.add).toBeDefined();
    });
    it('should add', function () {
        var first = 3;
        var second = 5;

        var expected = first + second;
        var actual = mathService.add(first, second);

        expect(expected).toBe(actual);
    });
    it('subtract is defined', function () {
        expect(mathService.subtract).toBeDefined();
    });
    it('should subtract', function () {
        var first = 3;
        var second = 5;

        var expected = first - second;
        var actual = mathService.subtract(first, second);
        expect(expected).toBe(actual);
    });
    it('multiply is defined', function () {
        expect(mathService.multiply).toBeDefined();
    });
    it('should multiply', function () {
        var first = 3;
        var second = 5;

        var expected = first * second;
        var actual = mathService.multiply(first, second);
        expect(expected).toBe(actual);
    });
    it('divide is defined', function () {
        expect(mathService.divide).toBeDefined();
    });
    it('should divide', function () {
            var first = 3;
            var second = 5;

            var expected = first / second;
            var actual = mathService.divide(first, second);
            expect(expected).toBe(actual);
    });

    it('power is defined', function () {
        expect(mathService.power).toBeDefined();
    });
    it('should raise the first parameter to the power of the second parameter',
        function() {
          var first = 3;
          var second = 5;

          var expected = Math.pow(first, second);
          var actual = mathService.power(first, second);
          expect(expected).toBe(actual);
    });

    it('squareRoot is defined', function () {
        expect(mathService.squareRoot).toBeDefined();
    });
    it('should take one parameter and will return the square root of that number',

      function () {
        var value = 3;

        var expected = Math.sqrt(value);
        var actual = mathService.squareRoot(value);
        expect(expected).toBe(actual);
      });

});
