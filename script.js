document.addEventListener('DOMContentLoaded', function() {
    // Preloader
    window.onload = function() {
        setTimeout(() => {
            document.getElementById('preloader').style.display = 'none';
            document.querySelector('.scroll-arrows').classList.remove('hide-arrows');
        }, 1200);
        document.querySelector('.scroll-arrows').classList.add('hide-arrows');
    };

    // Hero Slider
    let slideIndex = 0;
    const slides = document.querySelectorAll('.slide');
    const nextBtn = document.querySelector('.next');
    const prevBtn = document.querySelector('.prev');

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
        console.log('Showing slide', index);
    }

    function nextSlide() {
        slideIndex = (slideIndex + 1) % slides.length;
        showSlide(slideIndex);
    }

    function prevSlide() {
        slideIndex = (slideIndex - 1 + slides.length) % slides.length;
        showSlide(slideIndex);
    }
    nextBtn.onclick = nextSlide;
    prevBtn.onclick = prevSlide;
    setInterval(nextSlide, 5000);

    // Animate on scroll
    function animateOnScroll(selector, className) {
        const elements = document.querySelectorAll(selector);

        function check() {
            elements.forEach(el => {
                const rect = el.getBoundingClientRect();
                if (rect.top < window.innerHeight - 100) {
                    el.classList.add(className);
                }
            });
        }
        window.addEventListener('scroll', check);
        check();
    }
    animateOnScroll('.doctor-card', 'visible');
    animateOnScroll('.service-card', 'visible');
    animateOnScroll('.contact-info div', 'visible');

    // Appointment Form
    document.getElementById('appointmentForm').onsubmit = function(e) {
        e.preventDefault();
        alert('Appointment booked successfully!');
        this.reset();
    };

    // Scroll Up/Down Arrows
    document.getElementById('scrollUp').onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
    document.getElementById('scrollDown').onclick = () => {
        const nextSection = document.querySelector('#doctors');
        if (nextSection) nextSection.scrollIntoView({ behavior: 'smooth' });
    };

    // Animated Counters in Hero Section
    function animateCounters() {
        const counters = document.querySelectorAll('.counter');
        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;
                const increment = Math.ceil(target / 100);

                if (count < target) {
                    counter.innerText = count + increment;
                    setTimeout(updateCount, 20);
                } else {
                    counter.innerText = target;
                }
            };
            updateCount();
        });
    }
    window.addEventListener('DOMContentLoaded', animateCounters);
});