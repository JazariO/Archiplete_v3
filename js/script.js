var images = ["images/image1.png", "images/image2.png", "images/image3.png"];
var x = 0;

function changeBackground() {
    var splashBox = document.getElementById('splashBox');
    splashBox.style.background = "url(" + images[x] + ") local center no-repeat";
    if (x + 1 < images.length) {
        x += 1;
    } else {
        x = 0;
    }
}

setInterval(changeBackground, 3500);