<script>
    let currentSlide = 0;
    const slides = document.querySelectorAll('.carousel-image');

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = (i === index) ? 'block' : 'none';
            slide.style.opacity = (i === index) ? '1' : '0';
        });
    }

    function changeSlide(direction) {
        currentSlide += direction;
        if (currentSlide < 0) {
            currentSlide = slides.length - 1;
        } else if (currentSlide >= slides.length) {
            currentSlide = 0;
        }
        showSlide(currentSlide);
    }

    // Mostrar la primera imagen al cargar
    showSlide(currentSlide);
</script>