// function printLabel(labelledObj: { label: string }) {
//   console.log(labelledObj.label);
// }
var Clock = (function () {
    function Clock(h, m) {
    }
    Clock.prototype.setTime = function (d) {
        this.currentTime = d;
    };
    return Clock;
}());
