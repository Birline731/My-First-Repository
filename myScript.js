function myFunction() {
    document.getElementById("demo").innerHTML="kidus sucks at basketball.";
}

// Function to hide the image
function hideImage() {
  var image = document.getElementById('myImage');
  // Set the display style property to 'none' to hide the image
  image.style.display = 'none';
}

// Function to change the image
function changeImage() {
  var image = document.getElementById('myImage');
    image.src = 'https://i.etsystatic.com/33206174/r/il/2f797c/3581278854/il_fullxfull.3581278854_nv7b.jpg';  // Replace with your second image path

}
