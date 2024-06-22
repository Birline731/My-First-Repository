function myFunction() {
    document.getElementById("demo").innerHTML="kidus sucks at basketball.";
}


// script.js

function changeImage() {
    var image = document.getElementById('myImage');
    if (image.src.match('original-image.jpg')) {
        image.src = 'https://m.media-amazon.com/images/I/51d23FXg2PL._AC_UF894,1000_QL80_.jpg';  // Replace with the path to your new image
    } else {
        image.src = 'mykingcurry.jpg';  // Restore original image
    }
}
