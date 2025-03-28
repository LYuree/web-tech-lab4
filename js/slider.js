$(document).ready(function () {
    // Initialize the Slick slider
    $('.skills-slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    });

    // Destroy Slick slider before printing and remove duplicated slides
    window.addEventListener('beforeprint', function () {
        $('.skills-slider').slick('unslick'); // Destroy the slider

        // Remove duplicated slides
        $('.skills-slider .skill.slick-cloned').remove();
    });

    // Reinitialize Slick slider after printing (optional)
    window.addEventListener('afterprint', function () {
        $('.skills-slider').slick({
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                    },
                },
            ],
        });
    });
});