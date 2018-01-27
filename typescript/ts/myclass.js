// class Greeter {
//     greeting : string;
//     constructor(message: string) {
//         this.greeting = message;
//     }
//     greet() {
//         return "Hello, " + this.greeting;
//     }
// }
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// class Animal {
//     public name: string;
//     public constructor(theName: string) { this.name = theName; }
//     public move(distanceInMeters: number) {
//         console.log(`${this.name} moved ${distanceInMeters}m.`);
//     }
// }
// class Animal2 {
//     private name: string;
//     constructor(theName: string) { this.name = theName; }
// }
var someClass = (function () {
    function someClass(param1) {
        var _this = this;
        this.someMethod = function () {
            _this.someNumber = 5;
        };
        this.someElement = param1;
    }
    Object.defineProperty(someClass.prototype, "GetMethod", {
        get: function () {
            return this.someNumber;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(someClass.prototype, "SetMethod", {
        set: function (param) {
            this.someNumber = param;
        },
        enumerable: true,
        configurable: true
    });
    return someClass;
}());
var ExtendedClass = (function (_super) {
    __extends(ExtendedClass, _super);
    function ExtendedClass(param1) {
        var _this = this;
        _super.call(this, param1);
        this.someOtherMethos = function () {
            _this.someNumber;
        };
    }
    return ExtendedClass;
}(someClass));
var thisElement = document.createElement('div');
var instanceOfSomeClass = new ExtendedClass(thisElement);
instanceOfSomeClass.someNumber;
var valueOfMethod = instanceOfSomeClass.someMethod();
