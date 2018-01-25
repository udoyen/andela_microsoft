class Hero {
    constructor(name, side) {
        this.name = name;
        this.side = side;
    }
    speak() {
        return "<p>My name is " + this.name + ", I'm with the " + this.side + ".</p>";
    }
}
var darkVador = new Hero("Dark Vador", "empire");
var luke = new Hero("Luke Skywalker", "rebels");
var ianSolo = new Hero("Ian Solo", "rebels");

function makeHeroesSpeak() {
    document.body.innerHTML += darkVador.speak();
    document.body.innerHTML += luke.speak();
    document.body.innerHTML += ianSolo.speak();
}
// Ways to create objects
//literals
var darkVader = {
    firstName: 'Dark Vader'
    , lastName: 'Vader'
    , speak: function (name, age) {
        return "Hello";
    }
}
var girl = darkVader.firstName;
//contructor
function Ere(name, age) {
    this.name = name;
    this.age = age;
    this.speak = function () {
        return "Hello";
    }
}
var boy = new Ere("koko", 34);
// Class
class More {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    speak() {
        return "Hello";
    }
}
var dave = new More("koko", 34);
// Objects created from return statements in functions
function getMousePos(event, canvas) {
    var rect = canvas.getBoundingClientRect();
    var mxx = event.clientX - rect.left;
    var my = event.clientY - rect.top;
    return { // the getMousePos function returns an object. It’s a factory
        x: mx
        , y: my
    }
}
var mousePos = getMousePos(evt, canvas);
// Static methods
class Point {
    constructor(x, y) {
            this.x = x;
            this.y = y;
            // static property
            Point.nbPointsCreated++;
        }
        // static method
    static distance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        return Math.sqrt(dx * dx + dy * dy);
    }
    static returnHowManyPointsCreated() {
        return Point.nbPointsCreated;
    }
}
// static property definition is necessarily outside of the class with ES6
Point.nbPointsCreated = 0;
// We create 3 points
const p1 = new Point(5, 5);
const p2 = new Point(10, 10);
const p3 = new Point(12, 27);
document.body.innerHTML += "<p>Distance between points (5, 5) and (10, 10) is " + Point.distance(p1, p2) + "</p>";
document.body.innerHTML += "Number of Points created is " + Point.nbPointsCreated;


class Person {
    constructor(givenName, familyName) {
        this.givenName = givenName; // "normal name"
        this._familyName = familyName; // starts with "_"
    }
    get familyName() {
        return this._familyName.toUpperCase();
    }
    set familyName(newName) {
        // validation could be checked here such as
        // only allowing non numerical values
        this._familyName = newName;
    }
    walk() {
        return (this.givenName + ' ' + this._familyName + ' is walking.');
    }
}
let p1 = new Person('Michel', 'Buffa');
console.log(p1.familyName); // will display BUFFA in the devtool console
// this will call implicitly get familyName();
p1.familyName = 'Smith'; // this will call implicitly set familyName('Smith');