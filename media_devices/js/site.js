navigator.mediaDevices.getUserMedia({
    audio: false,
    video: true
}).then(function (stream) {
    var video = document.createElement('video');
    document.body.appendChild(video);
    video.src = URL.createObjectURL(stream);
    video.play();
});


// switch statment

var value = "caller";

var name = "";

switch (value) {
    case value1:
        name += "udosen";
        break;
    case value2:
        name += "udosen";
        break;
    default:
        console.log("Hello World!");
        break;
}
