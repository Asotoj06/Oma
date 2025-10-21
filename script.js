// ============================================
// SMOOTH SCROLLING & ANIMATIONS
// Ōmha Restaurant Website - JavaScript
// ============================================

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {

    // ============================================
    // NAVIGATION SCROLL BEHAVIOR
    // ============================================
    const mainNav = document.getElementById('mainNav');
    const scrollIndicator = document.getElementById('scrollIndicator');
    let lastScrollY = window.scrollY;
    let ticking = false;

    function updateNavOnScroll() {
        const scrollY = window.scrollY;

        // Show navigation after scrolling 100px
        if (scrollY > 100) {
            mainNav.classList.add('visible');
        } else {
            mainNav.classList.remove('visible');
        }

        // Hide scroll indicator after first scroll
        if (scrollY > 50 && scrollIndicator) {
            scrollIndicator.style.opacity = '0';
            scrollIndicator.style.pointerEvents = 'none';
        }

        lastScrollY = scrollY;
        ticking = false;
    }

    // Debounced scroll handler using requestAnimationFrame
    function onScroll() {
        if (!ticking) {
            window.requestAnimationFrame(updateNavOnScroll);
            ticking = true;
        }
    }

    window.addEventListener('scroll', onScroll, { passive: true });

    // ============================================
    // SMOOTH SCROLL TO SECTIONS
    // ============================================
    function smoothScrollTo(targetId, offset = 60) {
        const target = document.querySelector(targetId);

        if (target) {
            const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    }

    // Desktop navigation links
    const navLinks = document.querySelectorAll('.nav-links a, .nav-logo');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');

            if (targetId === '#hero') {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            } else {
                smoothScrollTo(targetId);
            }
        });
    });

    // Mobile navigation links
    const mobileLinks = document.querySelectorAll('.mobile-link');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');

            // Close mobile menu first
            closeMobileMenu();

            // Wait for menu animation, then scroll
            setTimeout(() => {
                smoothScrollTo(targetId);
            }, 300);
        });
    });

    // Scroll indicator click
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function() {
            const filosofiaSection = document.getElementById('filosofia');
            if (filosofiaSection) {
                smoothScrollTo('#filosofia', 0);
            }
        });
    }

    // ============================================
    // INTERSECTION OBSERVER FOR SCROLL ANIMATIONS
    // ============================================
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2 // Trigger when 20% of element is visible
    };

    function observerCallback(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add stagger delay for multiple elements
                const delay = entry.target.dataset.delay || 0;

                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, delay);

                // Optional: Unobserve after animation (performance optimization)
                // observer.unobserve(entry.target);
            }
        });
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections with animation class
    const animatedSections = document.querySelectorAll('.section-animate');
    animatedSections.forEach((section, index) => {
        // Add stagger delay data attribute
        section.dataset.delay = index * 100;
        observer.observe(section);
    });

    // Observe individual elements within sections for staggered animations
    const filosofiaImages = document.querySelectorAll('.filosofia-images .image-placeholder');
    filosofiaImages.forEach((img, index) => {
        img.style.opacity = '0';
        img.style.transform = 'translateY(30px)';
        img.style.transition = 'opacity 0.6s ease, transform 0.6s ease';

        const imgObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, index * 200);
                }
            });
        }, observerOptions);

        imgObserver.observe(img);
    });

    // Chef section stagger
    const chefPhoto = document.querySelector('.chef-photo');
    const chefBio = document.querySelector('.chef-bio');
    const chefQuote = document.querySelector('.chef-quote');

    if (chefPhoto && chefBio) {
        [chefPhoto, chefBio, chefQuote].forEach((element, index) => {
            if (element) {
                element.style.opacity = '0';
                element.style.transform = 'translateY(30px)';
                element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';

                const elemObserver = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            setTimeout(() => {
                                entry.target.style.opacity = '1';
                                entry.target.style.transform = 'translateY(0)';
                            }, index * 200);
                        }
                    });
                }, observerOptions);

                elemObserver.observe(element);
            }
        });
    }

    // ============================================
    // MOBILE MENU TOGGLE
    // ============================================
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    const closeMenuBtn = document.getElementById('closeMenu');
    const body = document.body;

    function openMobileMenu() {
        mobileMenu.classList.add('active');
        body.style.overflow = 'hidden';
        hamburger.setAttribute('aria-expanded', 'true');

        // Animate hamburger to X
        const lines = hamburger.querySelectorAll('.hamburger-line');
        if (lines.length === 3) {
            lines[0].style.transform = 'rotate(45deg) translateY(8px)';
            lines[1].style.opacity = '0';
            lines[2].style.transform = 'rotate(-45deg) translateY(-8px)';
        }
    }

    function closeMobileMenu() {
        mobileMenu.classList.remove('active');
        body.style.overflow = '';
        hamburger.setAttribute('aria-expanded', 'false');

        // Reset hamburger lines
        const lines = hamburger.querySelectorAll('.hamburger-line');
        if (lines.length === 3) {
            lines[0].style.transform = '';
            lines[1].style.opacity = '1';
            lines[2].style.transform = '';
        }
    }

    if (hamburger) {
        hamburger.addEventListener('click', function() {
            const isActive = mobileMenu.classList.contains('active');
            if (isActive) {
                closeMobileMenu();
            } else {
                openMobileMenu();
            }
        });
    }

    if (closeMenuBtn) {
        closeMenuBtn.addEventListener('click', closeMobileMenu);
    }

    // Close menu on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
            closeMobileMenu();
        }
    });

    // Close menu when clicking outside
    mobileMenu.addEventListener('click', function(e) {
        if (e.target === mobileMenu) {
            closeMobileMenu();
        }
    });

    // ============================================
    // PERFORMANCE OPTIMIZATIONS
    // ============================================

    // Lazy load images when added
    const images = document.querySelectorAll('img[loading="lazy"]');
    if ('loading' in HTMLImageElement.prototype) {
        // Browser supports lazy loading
        images.forEach(img => {
            img.src = img.dataset.src || img.src;
        });
    } else {
        // Fallback for browsers that don't support lazy loading
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }

    // ============================================
    // REDUCED MOTION PREFERENCE
    // ============================================
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (prefersReducedMotion.matches) {
        // Disable animations for users who prefer reduced motion
        document.querySelectorAll('.section-animate').forEach(section => {
            section.style.opacity = '1';
            section.style.transform = 'none';
        });
    }

    // ============================================
    // BUTTON INTERACTION ENHANCEMENTS
    // ============================================
    const buttons = document.querySelectorAll('.cta-button');

    buttons.forEach(button => {
        // Add ripple effect on click (optional enhancement)
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');

            this.appendChild(ripple);

            setTimeout(() => ripple.remove(), 600);
        });
    });

    // ============================================
    // ACCESSIBILITY ENHANCEMENTS
    // ============================================

    // Trap focus in mobile menu when open
    function trapFocus(element) {
        const focusableElements = element.querySelectorAll(
            'a[href], button:not([disabled]), textarea, input, select'
        );
        const firstFocusable = focusableElements[0];
        const lastFocusable = focusableElements[focusableElements.length - 1];

        element.addEventListener('keydown', function(e) {
            if (e.key === 'Tab') {
                if (e.shiftKey) {
                    if (document.activeElement === firstFocusable) {
                        lastFocusable.focus();
                        e.preventDefault();
                    }
                } else {
                    if (document.activeElement === lastFocusable) {
                        firstFocusable.focus();
                        e.preventDefault();
                    }
                }
            }
        });
    }

    if (mobileMenu) {
        trapFocus(mobileMenu);
    }

    // ============================================
    // CONSOLE WELCOME MESSAGE
    // ============================================
    console.log('%cŌmha Restaurant', 'font-size: 24px; font-weight: bold; color: #C9A961;');
    console.log('%c2x Michelin Award Chef Ángel Soto', 'font-size: 14px; color: #C0C0C0;');
    console.log('%cWebsite built with precision and elegance', 'font-size: 12px; color: #8B7355;');

    // ============================================
    // INITIALIZATION COMPLETE
    // ============================================
    console.log('✓ Smooth scrolling initialized');
    console.log('✓ Scroll animations active');
    console.log('✓ Mobile menu ready');
    console.log('✓ Accessibility features enabled');
});

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Debounce function for performance
function debounce(func, wait = 20, immediate = true) {
    let timeout;
    return function() {
        const context = this;
        const args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}
