// Get the values of the input fields
var a, b, c;
var xMinus, xPlus;
var root = [];
var vDelta = 0.0;

// Set the values of the equation texts
function setEquationValues () {

    a = document.querySelector("#aValue").value;
    b = document.querySelector("#bValue").value;
    c = document.querySelector("#cValue").value;
    var aV = document.querySelector("#a").innerHTML = a;
    var bV = document.querySelector("#b").innerHTML = b;
    var cV = document.querySelector("#c").innerHTML = c;
}

// Calculate the equation


function calculateEquation() {
    var delta = Math.pow(b, 2) - ((4 * a) * c);

    return delta;

}

var almighty = function() {
    xMinus = ((-6) - Math.sqrt((Math.pow(6, 2) - ( 4 * a * c )))) / ( 2 * a);

    xPlus = ((-6) + Math.sqrt((Math.pow(6, 2) - ( 4 * a * c )))) / ( 2 * a);

};






function getRoot() {

    vDelta = calculateEquation();

    if (vDelta === 0) {
        // call the almighty formalar function
        almighty();
        let p = document.querySelector("#minusX").innerHTML = xMinus;
        let m = document.querySelector("#plusX").innerHTML = xPlus;

    } else {
         // do something else
        let d = document.querySelector("#deltaVal").innerHTML = "The Value of delta was not zero";
    }

}



