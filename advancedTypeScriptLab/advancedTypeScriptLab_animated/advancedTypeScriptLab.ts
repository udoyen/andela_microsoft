class genericClass<T> {
    private val : T;
    // Note that we are using T as a call signature on the function. 
    //Doing this means that you can only pass values to the setter 
    //function that match the type given to the class on instantiation.
    setVal(val : T) {
        this.val = val;
    }
    // This time we are adding the T type to the return type of the call, 
    //to ensure that the value returned matches up with the value given 
    //to the class on instantiation.
    getVal() : T {
        return this.val;
    }
}

let element1 = new genericClass<Element>();
let element2 = new genericClass<HTMLElement>();
let element3 = new genericClass<Element>();

element1.setVal(document.createElement('div'));
element2.setVal(document.createElement('div'));
element3.setVal(document.createElement('div'));

let elementArray = [
    element1.getVal(),
    element2.getVal(),
    element3.getVal(),
]

// For our final action in this exercise, we are going to add a Type Guard function to our 
//application to check to see if an 
//element passed to the function is an HTMLElement

function isHTMLElement(x: any): x is HTMLElement {
    return x.style !== undefined;
}

/**
 * Note that we are accepting a Union Type for our parameter call signature 
 * for this function. This means that either an Element or an HTMLElement typed variable 
 * (and only those types) can be passed to this function. 
 * It is only returning the HTMLElement type.
 * @param elem 
 */
function convertElement(elem : Element | HTMLElement): HTMLElement {
    if (!isHTMLElement(elem)) {
        return <HTMLElement>elem;
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
function standardizeElements(elemArray: Array<any>) : Array<HTMLElement> {
    for (let elem of elemArray) {
        convertElement(elem)
    }
    return elemArray;
 }
 
 // Finally, let's call standardizeElements with 
 // our non-standard array full of mixed types.
 let standardElements = standardizeElements(elementArray);

 // 
 //Now, let's add some methods into that class to rotate the object and 
 //then rotate it back to normal using the CSS transform property.

 // Note that we have a call signature of HTMLElement on these methods 
 //to ensure that only an element that can be modified in this way is passed to the method.
 class Rotater {
    rotate (elem: HTMLElement) {
        elem.style.transform = "rotate(-315deg)"
    }
    rotateBack (elem: HTMLElement) {
        elem.style.transform = ""
    }
}

// 
// Next we are going to do the same thing with a Mover class, 
// which will make an element able to be moved using the transform:translateX property.
class Mover {
    move (elem: HTMLElement) {
        elem.style.transform = "translateX(50px)"
    }
    moveBack (elem: HTMLElement) {
        elem.style.transform = ""
    }
}

/**
 * First we need to create a decorator function.
 * @param constructor 
 */
function animated(constructor: Function) {
    constructor.prototype.animated = true;
    return constructor;
 }

// Note that we are using implements here, essentially treating the classes as Interfaces. 
//This allows us to write code for the values within the reusable classes even 
// before we bind them to the main class, and 
//Visual Studio Code will keep up on the types and autocomplete.
@animated
class movingElement implements Rotater, Mover {
    // Since we have Rotater and Mover implemented, 
    // we now need to define types within our movingElement class 
    // to satisfy the implmementation requirements.
    rotate: (elem: HTMLElement) => any
    move: (elem: HTMLElement) => any
    moveBack: (elem: HTMLElement) => any
    rotateBack: (elem: HTMLElement) => any
    animated : false;
    // We have also created an element variable for later use.
    element: HTMLElement
    constructor(elem: HTMLElement) {
        elem.onmousedown = () => {
            this.move(elem);
        }
        elem.onmouseup = () => {
            this.moveBack(elem);
        }
        elem.onmouseover = () => {
            this.rotate(elem);
        }
        elem.onmouseout = () => {
            this.rotateBack(elem);
        }
        // Note that what is being passed into this function is 
        //the constructor function of the class. 
        //We are then modifying the prototype of the constructor function to 
        //include an animated variable value, then returning the constructor.
        if (this.animated) {
            elem.style.transition = "transform .5s ease"
       }
       this.element = elem;
    }
}

// Despite the compiler having access to the types defined in the reusable classes, 
// the actual values of the methods needs to be brought in by a Mixin Helper Function. 
// This is a simple function that iterates through the properties of the reusable 
// classes and associates them to the main or 'derived' class. 
// Add this function to your exercise.ts file outside of any class.

function applyMixins(derivedClass: any, baseClasses: any[]) {
    baseClasses.forEach(baseClass => {
        Object.getOwnPropertyNames(baseClass.prototype).forEach(name => {
            derivedClass.prototype[name] = baseClass.prototype[name];
        });
    });
}

 
//Next, we will run the applyMixins function on our classes.
applyMixins(movingElement, [Mover, Rotater])

 
//Finally, we are going to iterate through our standardizedElements array 
// and append those to the body, after applying the class to them.

for (let elem of standardElements) {
    elem.style.width = "60px"
    elem.style.height = "60px"
    elem.style.backgroundColor = "green";
    elem.style.margin = "5px";
    let elemClass = new movingElement(elem);
    document.body.appendChild(elemClass.element);
}
