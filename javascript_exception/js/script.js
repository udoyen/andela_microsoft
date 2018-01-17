// function correctMethodName() {
//     return "Output Message";
// }

// try {
//     var result = wrongMethodName(3);
//     document.writeln(result);
// }
// catch (error) {
//     document.writeln('<h3>Error:&nbsp;</h3><p>' + error + "</p>");
// }

function getPositionResult(position) {
    console.log(position.coords.latitude + ' ' position.coords.longitude);
}
navigator.geolocation.getCurrentPosition(getPositionResult);

function refreshPosition(position) {
    var list = document.getElementById('positionList');
    list.innerHtml += ('<li>' + position.coords.latitude + ' ' position.coords.longitude + '</li>');
}
navigator.geolocation.watchPosition(refreshPosition);