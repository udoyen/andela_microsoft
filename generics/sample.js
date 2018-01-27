function identity(arg) {
    return arg;
}
// Calling generics function 
// Two ways
var output1 = identity("myString"); // type of output will be 'string'
var output2 = identity("myString"); // type of output will be 'string'
function loggingIdentity1(arg) {
    console.log(arg.length); // Array has a .length, so no more error
    return arg;
}
// or
function loggingIdentity2(arg) {
    console.log(arg.length); // Array has a .length, so no more error
    return arg;
}
// 
function identity1(arg) {
    return arg;
}
var myIdentity = identity1;
// 
function identity2(arg) {
    return arg;
}
var myIdentity2 = identity2;
//..
function identity3(arg) {
    return arg;
}
var myIdentity3 = identity3;
function identity4(arg) {
    return arg;
}
var myIndentity = identity4;
///.. n addition to generic interfaces, we can also create generic classes. Note that it is not possible to create generic enums and namespaces.
//
// Generic Classes
// A generic class has a similar shape to a generic interface. 
//Generic classes have a generic type parameter list in angle brackets (<>) 
//following the name of the class.
var GenericNumber = (function () {
    function GenericNumber() {
    }
    return GenericNumber;
}());
var myGenericNumber = new GenericNumber();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) { return x + y; };
// Using string in the class
var stringNumeric = new GenericNumber();
stringNumeric.zeroValue = "";
stringNumeric.add = function (x, y) { return x + y; };
alert(stringNumeric.add(stringNumeric.zeroValue, "test"));

// Generic classes are only generic over their instance side rather than their static side, 
//so when working with classes, static members can not use the class's type parameter.

//
