document.addEventListener("scroll", function() {
    var scrollPosition = window.pageYOffset;
    var windowHeight = window.innerHeight;
    var dots = document.querySelectorAll('.dot');

    dots.forEach((dot, index) => {
        if (scrollPosition >= windowHeight * index && scrollPosition < windowHeight * (index + 1)) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
});