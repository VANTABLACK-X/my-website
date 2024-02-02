document.addEventListener("DOMContentLoaded", function () {
    // Hide preloader and show content when the page is fully loaded
    const preloader = document.getElementById('loader');
    const navi = document.getElementById('nav');
    const sr = document.getElementById('screen');
    const cm22 = document.getElementById('center-main22');
    const cm23 = document.getElementById('center-main23');
    const cm32 = document.getElementById('center-main32');
    const cm33 = document.getElementById('center-main33');
    const rdp = document.getElementById('r-dp-container');
    const mem1 = document.getElementById('member1');
    const mem2 = document.getElementById('member2');
    const mem3 = document.getElementById('member3');
    const mem4 = document.getElementById('member4');

    window.addEventListener('load', function () {
        preloader.style.display = "none";
        navi.style.display = "block";
        sr.classList.add('sranimation');
        cm22.classList.add('cm22');
        cm23.classList.add('cm23');
        cm32.classList.add('cm32');
        cm33.classList.add('cm33');
        rdp.classList.add('rdp');
        mem1.classList.add('mem1');
        mem2.classList.add('mem2');
        mem3.classList.add('mem3');
        mem4.classList.add('mem4');
    });
});




