'use strict';

function power(first, second) {
    return Math.pow(first, second);
}

function squareRoot(value) {
    return Math.sqrt(value);
}

function add(first, second) {
    return first + second;
}

function subtract(first, second) {
    return first - second;
}

function multiply(first, second) {
    return first * second;
}

function divide(first, second) {
    return first / second;
}

var mathService = {
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide,
    power: power,
    squareRoot: squareRoot
};
