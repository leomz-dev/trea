import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {

    gsap.from('.hero-title', { 
        y: 100, 
        opacity: 0, 
        duration: 1, 
        ease: 'power4.out',
        scrollTrigger: {
            trigger: '.hero-title',
            start: 'top 80%', // Start animation when the element is 80% from the top of the viewport
            toggleActions: 'play none none reverse' // Animation behavior on scroll
        }
    });

    // ... add more GSAP animations here for other elements ... 

});