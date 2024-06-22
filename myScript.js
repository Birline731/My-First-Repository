<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Change Image Example</title>
</head>
<body>
    <h2>Change Image Example</h2>
    <img id="myImage" src="mykingcurry.jpg" alt="Original Image">
    <br>
    <button onclick="changeImage()">Change Image</button>

    <script src="myScript.js"></script>
</body>
</html>
function myFunction() {
    document.getElementById("demo").innerHTML="kidus sucks at basketball.";
}


// script.js

function changeImage() {
    var image = document.getElementById('myImage');
    if (image.src.match('mykingcurry.jpg')) {
        image.src = 'https://m.media-amazon.com/images/I/51d23FXg2PL._AC_UF894,1000_QL80_.jpg';  // Replace with the path to your new image
    } else {
        image.src = 'mykingcurry.jpg';  // Restore original image
    }
}
