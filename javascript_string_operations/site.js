var student = {
    fullName: 'George Udosen',
    age: 43,
    city: 'Aba',
    ssn: "11-22-33-44",
    likes: {
        food: [
            "gonger cakes",
            "bread fruit",
            "garri and soup"
        ],
        desires: [
            "love",
            "hope",
            "patience"
        ]
    },
    getName: function() {
        return fullName;
    }
}

console.log(student.age);


function newSum() {
    var i, res = 0;
    var numberOfParameters = arguments.length;
    for (let i = 0; i < numberOfParameters; i++) {
        res += arguments[i];
    }
}

newSum(1,1,1);
newSum(1,2,3,4);


/** HTML Table Javascript API */

function buildTable() {
    addLineToHTMLTable("Michel", "Buffa");
    addLineToHTMLTable("Marie-Claire", "Forgue");
    addLineToHTMLTable("Tim", "Berners-Lee");
}

// Add a line to the HTML table
function addLineToHTMLTable(firstName, lastName) {
// Get the body of the table using the selector API
var tableBody = document.querySelector("#tableContactBody");

// Add a new row at the end of the table
var newRow   = tableBody.insertRow();

// add  new cells to the row
var firstNameCell  = newRow.insertCell();
firstNameCell.innerHTML = firstName;

var lastNameCell   = newRow.insertCell();
lastNameCell.innerHTML = lastName;
}



var divElem;

function init() {
  console.log("page loaded and DOM is ready");

  // use the selection API to select the div
  divElem = document.querySelector("#theDiv");
}

function changeStyle() {
    console.log("add border");
    divElem.style.border = "5px dashed purple";
    divElem.style.padding = "10px";
    divElem.style.backgroundColor = "lightGreen";
    divElem.style.backgroundColor = 'blue';
}

//var divElem;

function init() {
  console.log("page loaded and DOM is ready");

  // use the selection API to select the div
  divElem = document.querySelector("#theDiv");
}

function addImageIntoBackground() {
  divElem.innerHTML = "";
  divElem.style.width= "100%";
  divElem.style.height = "300px";
  divElem.style.backgroundImage = "url(https://mainline.i3s.unice.fr/mooc/marioSprite.png)";
}

//var divElem;

function init() {
  console.log("page loaded and DOM is ready");

  // use the selection API to select the div
  divElem = document.querySelector("#theDiv");
}

var currentImage = 0;
var leftPos = 0;

function animateMario() {
  drawMario(currentImage);
  // next time, show next sprite/subimage
  currentImage = (currentImage +1) % 3;
  // next time, move mario 5 pixels to the right
  leftPos += 5;
  // And if he moved 100 pixels, start back from the left
  if(leftPos >= 100)
    leftPos = 0;
}

function drawMario(indexImage) {
  // set the left pos of the div using the left margin
  divElem.style.marginLeft = leftPos + "px";
  // change the width and height of the div
  divElem.style.width = "22px";
  divElem.style.height = "32px";
  // remove the text inside the div
  divElem.innerHTML = "";
  // set the background image
  divElem.style.backgroundImage = "url(https://mainline.i3s.unice.fr/mooc/marioSprite.png)";
  // remove the background color
  divElem.style.backgroundColor = "transparent";
  // select the starting pos in the background image
  var offset = indexImage * 24;
  divElem.style.backgroundPosition  = offset + "px";
}
