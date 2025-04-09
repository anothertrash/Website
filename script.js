document.addEventListener('DOMContentLoaded', function() {
    // Навигационное меню
    const nav = document.querySelector('nav');
    let lastScrollTop = 0;
    let isMenuVisible = true;
    let hoverTimeout;

    // Функция для скрытия меню
    function hideMenu() {
        nav.classList.add('hidden');
        isMenuVisible = false;
    }

    // Функция для показа меню
    function showMenu() {
        nav.classList.remove('hidden');
        isMenuVisible = true;
    }

    // Обработчик скролла
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Если скроллим вниз и меню видимо
        if (scrollTop > lastScrollTop && isMenuVisible) {
            hideMenu();
        }
        
        lastScrollTop = scrollTop;
    });

    // Обработчик наведения на верхнюю часть экрана
    document.addEventListener('mousemove', function(e) {
        if (e.clientY < 50) { // Если курсор в верхних 50px экрана
            clearTimeout(hoverTimeout);
            showMenu();
            
            // Скрываем меню через 2 секунды после ухода курсора
            hoverTimeout = setTimeout(function() {
                if (!document.querySelector('nav:hover')) {
                    hideMenu();
                }
            }, 2000);
        }
    });

    // Обработчик клика по меню
    nav.addEventListener('click', function() {
        showMenu();
    });
}); 