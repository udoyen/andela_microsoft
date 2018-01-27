"use strict";
var SomeClass = (function () {
    function SomeClass(message) {
        this.interval = 1000;
        this.title = "this title";
        this.method1 = function () {
        };
        this.method2 = function () {
        };
        console.log(message);
    }
    return SomeClass;
}());
exports.SomeClass = SomeClass;
