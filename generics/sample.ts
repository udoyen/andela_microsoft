function identity<T>(arg: T): T {
    return arg;
}

// Calling generics function 
// Two ways
let output1 = identity<string>("myString");  // type of output will be 'string'

let output2 = identity("myString");  // type of output will be 'string'

function loggingIdentity1<T>(arg: T[]): T[] {
    console.log(arg.length);  // Array has a .length, so no more error
    return arg;
}

// or

function loggingIdentity2<T>(arg: Array<T>): Array<T> {
    console.log(arg.length);  // Array has a .length, so no more error
    return arg;
}

// 

function identity1<T>(arg: T): T {
    return arg;
}

let myIdentity: <T>(arg: T) => T = identity1;

// 

function identity2<T>(arg: T): T {
    return arg;
}

let myIdentity2: <U>(arg: U) => U = identity2;

//..

function identity3<T>(arg: T): T {
    return arg;
}

let myIdentity3: {<T>(arg: T): T} = identity3;

// Generic interface
interface GenericIdentityFn<T> {
    <T>(arg: T): T;
}

function identity4<T>(arg: T): T {
    return arg;
}

let myIndentity: GenericIdentityFn<number> = identity4;

///.. n addition to generic interfaces, we can also create generic classes. Note that it is not possible to create generic enums and namespaces.

//
// Generic Classes

// A generic class has a similar shape to a generic interface. 
//Generic classes have a generic type parameter list in angle brackets (<>) 
//following the name of the class.
class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) { return x + y; };

// Using string in the class
let stringNumeric = new GenericNumber<string>();
stringNumeric.zeroValue = "";
stringNumeric.add = function(x, y) {return x + y; };

alert(stringNumeric.add(stringNumeric.zeroValue, "test"));

//

