< script src = "index.js" >
    let slideIndex = 0;
const newsSlides = document.querySelectorAll('#latest-news .slides');
const teamSlides = document.querySelectorAll('#team-highlights .slides');

function showSlides(slides) {
    slides.forEach((slide, index) => {
        slide.classList.remove('active');
        if (index === slideIndex) {
            slide.classList.add('active');
        }
    });
}

setInterval(() => {
    showSlides(newsSlides);
    showSlides(teamSlides);
    slideIndex = (slideIndex + 1) % newsSlides.length;
}, 3000); <
/script>