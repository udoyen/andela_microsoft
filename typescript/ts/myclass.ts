// class Greeter {
//     greeting : string;
//     constructor(message: string) {
//         this.greeting = message;
//     }
//     greet() {
//         return "Hello, " + this.greeting;
//     }
// }

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

class someClass {
    someNumber: number;
    someElement: Element;
    constructor (param1 : Element) {
        this.someElement = param1;
    }
    someMethod = () => {
        this.someNumber = 5;
    }

    get GetMethod() {
        return this.someNumber;
    }

    set SetMethod(param) {
        this.someNumber = param;
    }

}

class ExtendedClass extends someClass {
    constructor (param1: Element) {
        super(param1);
    }

    someOtherMethos = () => {
        this.someNumber;
    }
}


let thisElement = document.createElement('div');

let instanceOfSomeClass = new ExtendedClass(thisElement);

instanceOfSomeClass.someNumber;

let valueOfMethod = instanceOfSomeClass.someMethod();

