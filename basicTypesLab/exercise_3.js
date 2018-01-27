var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var colorChange = (function () {
    function colorChange(div) {
        this.div = div;
    }
    colorChange.prototype.changeColor = function (dColor, color) {
        if (typeof (color) === "number") {
            return true;
        }
        this.div.style.backgroundColor = color;
        return true;
    };
    return colorChange;
}());
var Colors;
(function (Colors) {
    Colors[Colors["Green"] = 0] = "Green";
    Colors[Colors["Red"] = 1] = "Red";
    Colors[Colors["Blue"] = 2] = "Blue";
    Colors[Colors["Orange"] = 3] = "Orange";
})(Colors || (Colors = {}));
var numericColor = (function (_super) {
    __extends(numericColor, _super);
    function numericColor(div) {
        _super.call(this, div);
        this.div.style.width = squareSize;
        this.div.style.height = squareSize;
    }
    numericColor.prototype.changeColor = function (color) {
        this.div.style.backgroundColor = Colors[color];
        return true;
    };
    numericColor.Colors = Colors;
    return numericColor;
}(colorChange));
//Create array of typr ElementSet
var elementSets = [];
var color;
var squareSize = "100px";
// let Elements = {
//     'div': document.createElement('div'),
//     'button': document.createElement('button')
// }
for (var index = 0; index < 4; index++) {
    elementSets.push({
        'div': document.createElement('div'),
        'button': document.createElement('button')
    });
}
var getRandomIntInclusive = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
elementSets.map(function (elem, index) {
    var colorChangeClass = new numericColor(elem.div);
    elem.button.textContent = "Change Color";
    elem.button.onclick = function (event) {
        colorChangeClass.changeColor(getRandomIntInclusive(0, 3));
    };
    document.body.appendChild(elem.button);
    document.body.appendChild(elem.div);
});
