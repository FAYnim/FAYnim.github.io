function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  menu.classList.toggle('show');
}

const mobileLinks = document.querySelectorAll('#mobileMenu a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        const menu = document.getElementById('mobileMenu');
        if (menu.classList.contains('show')) {
           menu.classList.remove('show');
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const statsSection = document.querySelector('#statistics');
    const statNumbers = document.querySelectorAll('.stat-number');
    let animationStarted = false;

    const animateCountUp = (element) => {
        const target = parseInt(element.dataset.target, 10);
        const finalDisplayText = element.dataset.text || target;
        const duration = 1500;
        const intervalTime = 10;
        const steps = duration / intervalTime;
        const increment = target / steps;
        let currentCount = 0;

        const counterInterval = setInterval(() => {
            currentCount += increment;

            if (currentCount >= target) {
                clearInterval(counterInterval);
                element.textContent = finalDisplayText;
            } else {
                element.textContent = Math.ceil(currentCount);
            }
        }, intervalTime);
    };

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !animationStarted) {
                animationStarted = true;
                statNumbers.forEach(num => animateCountUp(num));
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    if (statsSection) {
        observer.observe(statsSection);
    } else {
        console.warn('Statistics section (#statistics) not found.');
    }
});
