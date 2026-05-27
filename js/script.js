document.addEventListener('DOMContentLoaded', () => {

    // =========================
    // NAVBAR SCROLL
    // =========================

    const nav = document.querySelector('nav');

    window.addEventListener('scroll', () => {
        nav.classList.toggle('nav-scrolled', window.scrollY > 80);
    });

    // =========================
    // MENU MOBILE
    // =========================

    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');

    if (hamburger && mobileMenu) {

        hamburger.addEventListener('click', () => {

            mobileMenu.classList.toggle('hidden');

            // Change icon
            const icon = hamburger.querySelector('i');

            if (icon.classList.contains('fa-bars')) {

                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');

            } else {

                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');

            }

        });

    }

    // =========================
    // ANIMATIONS
    // =========================

    const observer = new IntersectionObserver((entries) => {

        entries.forEach((entry, i) => {

            if (entry.isIntersecting) {

                setTimeout(() => {

                    entry.target.style.opacity = 1;
                    entry.target.style.transform = 'translateY(0)';

                }, i * 120);

            }

        });

    });

    document.querySelectorAll('.aos').forEach(el => {

        el.style.opacity = 0;
        el.style.transform = 'translateY(40px)';
        el.style.transition =
            'all 0.9s cubic-bezier(0.25, 0.1, 0.25, 1)';

        observer.observe(el);

    });

    // =========================
    // FORMULAIRES
    // =========================

    document.querySelectorAll('form').forEach(form => {

        form.addEventListener('submit', (e) => {

            e.preventDefault();

            alert(
                '✅ Demande envoyée avec succès ! Je te réponds rapidement.'
            );

            form.reset();

        });

    });

    console.log(
        '%c✅ ForgeBot chargé',
        'color:#c026d3;font-size:14px;font-weight:bold;'
    );

});