document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    const burgerMenu = document.getElementById('burgerMenu');
    const navList = document.getElementById('navList');
    const scrollToTop = document.getElementById('scrollToTop');

    function updateMenuVisibility() {
        if (window.innerWidth <= 768) {
            burgerMenu.style.display = 'block';
            navList.style.display = 'none';
        } else {
            burgerMenu.style.display = 'none';
            navList.style.display = 'flex';
        }
    }

    updateMenuVisibility();

    window.addEventListener('resize', updateMenuVisibility);

    burgerMenu.addEventListener('click', function() {
        if (navList.style.display === 'none') {
            navList.style.display = 'flex';
        } else {
            navList.style.display = 'none';
        }
    });

    scrollToTop.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollToTop.style.display = 'block';
        } else {
            scrollToTop.style.display = 'none';
        }
    });

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});

// gallery
document.addEventListener('DOMContentLoaded', function () {
    const imgURLArr = [
        'https://upload.wikimedia.org/wikipedia/ru/thumb/9/94/%D0%93%D0%B8%D0%B3%D0%B0%D1%87%D0%B0%D0%B4.jpg/640px-%D0%93%D0%B8%D0%B3%D0%B0%D1%87%D0%B0%D0%B4.jpg',
        'https://upload.wikimedia.org/wikipedia/ru/thumb/9/94/%D0%93%D0%B8%D0%B3%D0%B0%D1%87%D0%B0%D0%B4.jpg/640px-%D0%93%D0%B8%D0%B3%D0%B0%D1%87%D0%B0%D0%B4.jpg',
        'https://upload.wikimedia.org/wikipedia/ru/thumb/9/94/%D0%93%D0%B8%D0%B3%D0%B0%D1%87%D0%B0%D0%B4.jpg/640px-%D0%93%D0%B8%D0%B3%D0%B0%D1%87%D0%B0%D0%B4.jpg',
        'https://upload.wikimedia.org/wikipedia/ru/thumb/9/94/%D0%93%D0%B8%D0%B3%D0%B0%D1%87%D0%B0%D0%B4.jpg/640px-%D0%93%D0%B8%D0%B3%D0%B0%D1%87%D0%B0%D0%B4.jpg',
        'https://upload.wikimedia.org/wikipedia/ru/thumb/9/94/%D0%93%D0%B8%D0%B3%D0%B0%D1%87%D0%B0%D0%B4.jpg/640px-%D0%93%D0%B8%D0%B3%D0%B0%D1%87%D0%B0%D0%B4.jpg'
    ];

    const gallery = document.getElementById('gallery');
    const spinner = document.getElementById('spinner');

    let loadedCount = 0;
    const totalImages = imgURLArr.length;

    spinner.classList.add('active');
    gallery.classList.add('hidden');

    imgURLArr.forEach(url => {
        const img = document.createElement('img');
        img.src = url;
        img.classList.add('hidden');

        img.addEventListener('load', function () {
            loadedCount++;
            img.classList.remove('hidden');
            gallery.appendChild(img);

            if (loadedCount === totalImages) {
                console.log('Всі зображення оброблені');
                spinner.style.display = 'none';
                gallery.style.display = 'flex';
            }
        });

        img.addEventListener('error', function () {
            loadedCount++;
            console.error(`Помилка завантаження зображення: ${url}`);

            if (loadedCount === totalImages) {
                spinner.style.display = 'none';
                gallery.style.display = 'flex';
            }
        });
    });
});

// slider
let slideIndex = 1;

function nextSlide() {
    showSlides(slideIndex += 1);
}

function previousSlide() {
    showSlides(slideIndex -= 1);
}

function showSlides(n) {
    const slides = document.getElementsByClassName("item");

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    for (let slide of slides) {
        slide.classList.remove("active");
    }

    slides[slideIndex - 1].classList.add("active");
}


document.addEventListener('DOMContentLoaded', function () {
    showSlides(slideIndex);
});

// anime.js
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            anime({
                targets: button,
                scale: [1, 1.05],
                boxShadow: '0 8px 15px rgba(0, 0, 0, 0.3)',
                duration: 300,
                easing: 'easeOutQuad'
            });
        });

        button.addEventListener('mouseleave', () => {
            anime({
                targets: button,
                scale: [1.1, 1.05],
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
                duration: 300,
                easing: 'easeOutQuad'
            });
        });

        button.addEventListener('mousedown', () => {
            anime({
                targets: button,
                scale: 0.9,
                rotate: '2deg',
                duration: 100,
                easing: 'easeInQuad'
            });
        });

        button.addEventListener('mouseup', () => {
            anime.timeline()
                .add({
                    targets: button,
                    scale: 1.1,
                    duration: 150,
                    easing: 'easeOutQuad'
                })
                .add({
                    targets: button,
                    scale: 1,
                    rotate: '0deg',
                    duration: 150,
                    easing: 'easeOutQuad'
                });
        });
    });
});

// delegation
document.getElementById('gallery').addEventListener('click', function (event) {
    if (event.target.tagName === 'IMG') {
        const popupContainer = document.getElementById('popup-container');
        const popupImage = document.getElementById('popup-image');
        popupImage.src = event.target.src;
        popupContainer.classList.remove('hidden');
    }
});

document.getElementById('popup-close').addEventListener('click', function () {
    const popupContainer = document.getElementById('popup-container');
    popupContainer.classList.add('hidden');
});

