    const scrollBtn = document.getElementById('scrollTopBtn');
    const footerTopBtn = document.getElementById('footerTopBtn');

    console.log('Кнопка найдена:', scrollBtn);

    function checkScroll() {
        if (window.scrollY > 300) {
            scrollBtn.classList.add('show');
        } else {
            scrollBtn.classList.remove('show');
        }
    }

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    window.addEventListener('scroll', checkScroll);
    
    if (scrollBtn) {
        scrollBtn.addEventListener('click', scrollToTop);
    }
    
    if (footerTopBtn) {
        footerTopBtn.addEventListener('click', function(e) {
            e.preventDefault();
            scrollToTop();
        });
    }