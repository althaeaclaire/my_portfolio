// script.js - Portfolio JavaScript Functionality

document.addEventListener('DOMContentLoaded', function() {
    'use strict';

    // ============================================
    // SMOOTH SCROLLING
    // ============================================
    function initSmoothScrolling() {
        const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
        
        navLinks.forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    const offsetTop = targetElement.offsetTop - 90;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // ============================================
    // ACTIVE LINK HIGHLIGHTING
    // ============================================
    function initActiveLinkHighlighting() {
        const sections = document.querySelectorAll('section, #skills, #experience, #education, #connect, #personal');
        const navLinks = document.querySelectorAll('.nav-links a');

        function updateActiveLink() {
            let current = '';
            const scrollPosition = window.scrollY + 150;

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionBottom = sectionTop + section.offsetHeight;
                
                if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                const href = link.getAttribute('href').substring(1);
                if (href === current) {
                    link.classList.add('active');
                }
            });
        }

        window.addEventListener('scroll', updateActiveLink);
        window.addEventListener('load', updateActiveLink);
        updateActiveLink(); // Initial call
    }

    // ============================================
    // SOCIAL LINKS TRACKING (Optional)
    // ============================================
    function initSocialLinkTracking() {
        const socialLinks = document.querySelectorAll('.social-btn');
        
        socialLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                // Optional: Add analytics tracking here
                console.log(`Social link clicked: ${this.href}`);
                
                // Optional: You can add Google Analytics or other tracking
                // if (typeof gtag !== 'undefined') {
                //     gtag('event', 'social_click', {
                //         'event_category': 'engagement',
                //         'event_label': this.href
                //     });
                // }
            });
        });
    }

    // ============================================
    // SCROLL ANIMATIONS (Optional)
    // ============================================
    function initScrollAnimations() {
        const cards = document.querySelectorAll('.real-card');
        
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        cards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(card);
        });
    }

    // ============================================
    // MOBILE MENU TOGGLE (Optional - if you add hamburger menu later)
    // ============================================
    function initMobileMenu() {
        // Uncomment and modify if you add a mobile hamburger menu
        /*
        const menuToggle = document.querySelector('.menu-toggle');
        const navLinks = document.querySelector('.nav-links');
        
        if (menuToggle) {
            menuToggle.addEventListener('click', function() {
                navLinks.classList.toggle('active');
                this.classList.toggle('active');
            });
        }
        */
    }

    // ============================================
    // FORM HANDLING (Optional - if you add contact form)
    // ============================================
    function initContactForm() {
        // Uncomment and modify if you add a contact form
        /*
        const contactForm = document.querySelector('#contact-form');
        
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Add form submission logic here
                const formData = new FormData(this);
                
                // Example: Send to API
                // fetch('/api/contact', {
                //     method: 'POST',
                //     body: formData
                // })
                // .then(response => response.json())
                // .then(data => {
                //     alert('Message sent successfully!');
                //     this.reset();
                // })
                // .catch(error => {
                //     alert('Error sending message. Please try again.');
                // });
            });
        }
        */
    }

    // ============================================
    // LAZY LOADING IMAGES (Optional)
    // ============================================
    function initLazyLoading() {
        const images = document.querySelectorAll('img[data-src]');
        
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }

    // ============================================
    // BACK TO TOP BUTTON (Optional)
    // ============================================
    function initBackToTop() {
        // Uncomment and add HTML for back to top button
        /*
        const backToTopBtn = document.createElement('button');
        backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
        backToTopBtn.className = 'back-to-top';
        backToTopBtn.style.cssText = `
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: linear-gradient(135deg, #6b2fa0, #4a1a6e);
            color: white;
            border: 1px solid #8b4fc9;
            cursor: pointer;
            display: none;
            align-items: center;
            justify-content: center;
            font-size: 1.2rem;
            box-shadow: 0 5px 15px rgba(183, 110, 255, 0.3);
            transition: all 0.3s ease;
            z-index: 999;
        `;
        document.body.appendChild(backToTopBtn);

        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopBtn.style.display = 'flex';
            } else {
                backToTopBtn.style.display = 'none';
            }
        });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        backToTopBtn.addEventListener('mouseenter', () => {
            backToTopBtn.style.transform = 'translateY(-5px)';
            backToTopBtn.style.boxShadow = '0 8px 20px rgba(183, 110, 255, 0.5)';
        });

        backToTopBtn.addEventListener('mouseleave', () => {
            backToTopBtn.style.transform = 'translateY(0)';
            backToTopBtn.style.boxShadow = '0 5px 15px rgba(183, 110, 255, 0.3)';
        });
        */
    }

    // ============================================
    // INITIALIZE ALL FUNCTIONS
    // ============================================
    function init() {
        initSmoothScrolling();
        initActiveLinkHighlighting();
        initSocialLinkTracking();
        initScrollAnimations();
        initMobileMenu();
        initContactForm();
        initLazyLoading();
        initBackToTop();
        
        console.log('Portfolio scripts initialized successfully!');
    }

    // Start everything
    init();
});