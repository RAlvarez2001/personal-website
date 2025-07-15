
document.addEventListener('DOMContentLoaded', function() {
    // Get the image and the lightbox elements
    var img = document.getElementById('myProjectImage');
    var lightbox = document.getElementById('lightbox');
    var lightboxImg = document.getElementById('img-fullscreen');
    var captionText = document.getElementById('caption');
    var closeButton = document.getElementsByClassName('close-button')[0];

    // When the user clicks the image, open the lightbox
    img.onclick = function(){
        lightbox.style.display = "block";
        lightboxImg.src = this.src; // Set the source of the full-screen image
        captionText.innerHTML = this.alt; // Set the caption to the alt text
    }

    // When the user clicks on <span> (x), close the lightbox
    closeButton.onclick = function() {
        lightbox.style.display = "none";
    }

    // When the user clicks anywhere outside of the image, close the lightbox
    lightbox.onclick = function(event) {
        if (event.target == lightbox) { // Check if the click was directly on the overlay
            lightbox.style.display = "none";
        }
    }

    // Optional: Close with Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === "Escape") {
            lightbox.style.display = "none";
        }
    });
});