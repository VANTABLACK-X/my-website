document.addEventListener("DOMContentLoaded", function () {
    // Hide preloader and show content when the page is fully loaded
    var preloader = document.getElementById("loader");

    window.addEventListener("load", function () {
        preloader.style.display = "none";
    });
});
