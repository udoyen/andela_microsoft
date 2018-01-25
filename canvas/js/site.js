var canvas, ctx;

window.onload = init;

function init() {
    canvas = document.querySelector("#myCanvas");
    ctx = canvas.getContext('2d');
    
    drawThreeRectangle();
    drawCircle();
    addEventListener('click', function(evt) {
    document.body.innerHTML += 'Clicked!';
});
}

function drawThreeRectangle() {
    // draw
    ctx.fillStyle = 'red';
    ctx.fillRect(10, 10, 100, 100);
    ctx.fillStyle = "green";
    ctx.fillRect(120, 10, 50, 50);
    ctx.fillStyle = 'brown';
    ctx.fillRect(10, 120, 100, 100);
}

function drawCircle() {
    ctx.beginPath();
    ctx.arc(145, 170, 30, 0, 2*Math.PI);
    ctx.fill();
}