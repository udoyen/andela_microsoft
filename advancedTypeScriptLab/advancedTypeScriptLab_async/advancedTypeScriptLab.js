var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var genericClass = (function () {
    function genericClass() {
    }
    // Note that we are using T as a call signature on the function. 
    //Doing this means that you can only pass values to the setter 
    //function that match the type given to the class on instantiation.
    genericClass.prototype.setVal = function (val) {
        this.val = val;
    };
    // This time we are adding the T type to the return type of the call, 
    //to ensure that the value returned matches up with the value given 
    //to the class on instantiation.
    genericClass.prototype.getVal = function () {
        return this.val;
    };
    return genericClass;
}());
var element1 = new genericClass();
var element2 = new genericClass();
var element3 = new genericClass();
element1.setVal(document.createElement('div'));
element2.setVal(document.createElement('div'));
element3.setVal(document.createElement('div'));
var elementArray = [
    element1.getVal(),
    element2.getVal(),
    element3.getVal(),
];
// For our final action in this exercise, we are going to add a Type Guard function to our 
//application to check to see if an 
//element passed to the function is an HTMLElement
function isHTMLElement(x) {
    return x.style !== undefined;
}
/**
 * Note that we are accepting a Union Type for our parameter call signature
 * for this function. This means that either an Element or an HTMLElement typed variable
 * (and only those types) can be passed to this function.
 * It is only returning the HTMLElement type.
 * @param elem
 */
function convertElement(elem) {
    if (!isHTMLElement(elem)) {
        return elem;
    }
    else {
        return elem;
    }
}
/**
 * This function is accepting an array with any contents and
 * returning an array with only HTMLElement typed elements.
 * @param elemArray
 */
function standardizeElements(elemArray) {
    for (var _i = 0, elemArray_1 = elemArray; _i < elemArray_1.length; _i++) {
        var elem = elemArray_1[_i];
        convertElement(elem);
    }
    return elemArray;
}
// Finally, let's call standardizeElements with 
// our non-standard array full of mixed types.
var standardElements = standardizeElements(elementArray);
// 
//Now, let's add some methods into that class to rotate the object and 
//then rotate it back to normal using the CSS transform property.
// Note that we have a call signature of HTMLElement on these methods 
//to ensure that only an element that can be modified in this way is passed to the method.
var Rotater = (function () {
    function Rotater() {
    }
    Rotater.prototype.rotate = function (elem) {
        elem.style.transform = "rotate(-315deg)";
    };
    Rotater.prototype.rotateBack = function (elem) {
        elem.style.transform = "";
    };
    return Rotater;
}());
// 
// Next we are going to do the same thing with a Mover class, 
// which will make an element able to be moved using the transform:translateX property.
var Mover = (function () {
    function Mover() {
    }
    Mover.prototype.move = function (elem) {
        elem.style.transform = "translateX(50px)";
    };
    Mover.prototype.moveBack = function (elem) {
        elem.style.transform = "";
    };
    return Mover;
}());
/**
 * First we need to create a decorator function.
 * @param constructor
 */
function animated(constructor) {
    constructor.prototype.animated = true;
    return constructor;
}
// Note that we are using implements here, essentially treating the classes as Interfaces. 
//This allows us to write code for the values within the reusable classes even 
// before we bind them to the main class, and 
//Visual Studio Code will keep up on the types and autocomplete.
var movingElement = (function () {
    function movingElement(elem) {
        var _this = this;
        this.animated = false;
        elem.onmousedown = function () {
            _this.move(elem);
        };
        elem.onmouseup = function () {
            _this.moveBack(elem);
        };
        elem.onmouseover = function () {
            _this.rotate(elem);
        };
        elem.onmouseout = function () {
            _this.rotateBack(elem);
        };
        // Note that what is being passed into this function is 
        //the constructor function of the class. 
        //We are then modifying the prototype of the constructor function to 
        //include an animated variable value, then returning the constructor.
        if (this.animated) {
            elem.style.transition = "transform .5s ease";
        }
        this.element = elem;
    }
    movingElement = __decorate([
        animated
    ], movingElement);
    return movingElement;
}());
// Despite the compiler having access to the types defined in the reusable classes, 
// the actual values of the methods needs to be brought in by a Mixin Helper Function. 
// This is a simple function that iterates through the properties of the reusable 
// classes and associates them to the main or 'derived' class. 
// Add this function to your exercise.ts file outside of any class.
function applyMixins(derivedClass, baseClasses) {
    baseClasses.forEach(function (baseClass) {
        Object.getOwnPropertyNames(baseClass.prototype).forEach(function (name) {
            derivedClass.prototype[name] = baseClass.prototype[name];
        });
    });
}
//Next, we will run the applyMixins function on our classes.
applyMixins(movingElement, [Mover, Rotater]);
// Now, in order to make our little robots, we are going to be using the RoboHash API. 
// We are going to set our element's backgroundImage to the URL of our RoboHash, 
// then append it to the document.body.
// let's name our robots using an API that returns random user information - UINames. 
// First - we will call UINames using fetch.
// The fetch command returns what is called a Promise. If you were to assign 
// this value to a variable and attempt to use it, it wouldn't work because 
// the value hasn't returned by the server by the time the next line is called. 
// In order to use a value from a Promise, we need to use the .then() property of the promise, 
// which will contain the response from the server.
// Even though we are returning response.json() from our .then(), this return is still a Promise. 
// In order to use the JSON object returned from the fetch properly, we need to chain another .then() 
// to use that value. Then we can get access to the actual data from the server - in 
// this case we are after the name property. Let's go ahead and make the robots introduce 
// themselves when they are about to show up on the screen
// let's move the rest of the code into the .then() block, and concatenate 
// the response.name property into our avatar URL.
function getAvatar_Promise(elem) {
    fetch('https://uinames.com/api/').then(function (response) {
        return response.json();
    }).then(function (response) {
        alert('Hi! My name is ' + response.name);
        var avatar = 'https://robohash.org/set_set3/' + response.name + '?size=60x60';
        elem.style.backgroundImage = 'url("' + avatar + '")';
        document.body.appendChild(elem);
    });
}
//Finally, we are going to iterate through our standardizedElements array 
// and append those to the body, after applying the class to them.
for (var _i = 0, standardElements_1 = standardElements; _i < standardElements_1.length; _i++) {
    var elem = standardElements_1[_i];
    elem.style.width = "60px";
    elem.style.height = "60px";
    elem.style.margin = "5px";
    var elemClass = new movingElement(elem);
    getAvatar_Promise(elemClass.element);
}
