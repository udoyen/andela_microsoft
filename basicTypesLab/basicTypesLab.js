var color = "green";
var squareSizeNum = 100;
var squareSize = squareSizeNum + "px";
var button = document.createElement('button');
var div = document.createElement('div');
button.textContent = "Change Color";
// Create a variable of type function
var colorChange = function (elem, color) {
    elem.style.backgroundColor = color;
    return true;
};
//or 
// let colorChange: Function = (elem: Element, color: string) : boolean => {
//     (elem as HTMLElement).style.backgroundColor = color;
//     return true;
// }
div.style.width = squareSize;
div.style.height = squareSize;
button.onclick = function (event) {
    colorChange(div, color);
};
document.body.appendChild(button);
document.body.appendChild(div);
