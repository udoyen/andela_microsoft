var result = function (x, y, z) {
    if (z === void 0) { z = null; }
    return [3, 56, 80];
};
function getHer(name) {
    console.log(name.friend);
}
var Town = (function () {
    function Town(name) {
        this.name = name;
    }
    Town.prototype.getStreet = function (street) {
        alert(street.streetName);
    };
    return Town;
}());
var streets = (function () {
    function streets(streetName) {
        this.streetName = streetName;
    }
    return streets;
}());
var myTown = new Town("Redmond");
var myStreet = new streets("Microsoft Way");
console.log(myTown.getStreet(myStreet));
