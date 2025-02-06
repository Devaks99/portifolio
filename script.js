function scrollToElement(selector) {
    const element = document.querySelector(selector);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

document.addEventListener("DOMContentLoaded", () => {
    // Links de navegação
    document.getElementById("link1")?.addEventListener("click", (e) => {
        e.preventDefault();
        scrollToElement("header");
    });

    document.getElementById("link2")?.addEventListener("click", (e) => {
        e.preventDefault();
        scrollToElement("section");
    });

    document.getElementById("link3")?.addEventListener("click", (e) => {
        e.preventDefault();
        scrollToElement(".column");
    });

    // Menu Hamburguer (apenas para mobile)
    const menuToggle = document.createElement('button');
    menuToggle.className = 'menu-toggle';
    menuToggle.innerHTML = '☰';
    const nav = document.querySelector('nav');
    
    // Só adiciona o botão se for mobile
    const checkMobile = () => {
        if (window.innerWidth <= 900) {
            if (!nav.contains(menuToggle)) {
                nav.appendChild(menuToggle);
            }
        } else {
            if (nav.contains(menuToggle)) {
                nav.removeChild(menuToggle);
            }
        }
    };

    // Verifica na inicialização
    checkMobile();
    
    const navLinks = document.querySelector('.nav-links');
    const header = document.querySelector('header');

    // Função para toggle do menu
    const toggleMenu = (e) => {
        e?.stopPropagation();
        navLinks.classList.toggle('active');
        
        if (navLinks.classList.contains('active')) {
            header.style.marginTop = `${navLinks.offsetHeight + 20}px`;
        } else {
            header.style.marginTop = '0';
        }
    };

    // Event listeners
    menuToggle.addEventListener('click', toggleMenu);

    // Fechar menu
    document.addEventListener('click', (e) => {
        if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
            navLinks.classList.remove('active');
            header.style.marginTop = '0';
        }
    });

    // Controle de redimensionamento
    window.addEventListener('resize', () => {
        checkMobile();
        
        if (window.innerWidth > 900) {
            navLinks.classList.remove('active');
            header.style.marginTop = '0';
        } else {
            if (navLinks.classList.contains('active')) {
                header.style.marginTop = `${navLinks.offsetHeight + 20}px`;
            }
        }
    });
});

// Scroll-top
window.addEventListener('scroll', function() {
    const scrollTopButton = document.querySelector('.scroll-top');
    scrollTopButton.style.display = window.pageYOffset > 200 ? 'block' : 'none';
});