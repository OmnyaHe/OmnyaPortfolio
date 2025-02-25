/* Toggle Icon Navbar */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark'); // Fix typo
    navbar.classList.toggle('active');
};

/* Scroll Section Active Link */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150; // Fix typo
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => { // Fix incorrect apply() usage
                link.classList.remove('active');
            });

            let activeLink = document.querySelector('header nav a[href*="' + id + '"]');
            if (activeLink) {
                activeLink.classList.add('active'); // Fix querySelector syntax
            }
        }
    });

    /* Sticky Navbar */
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /* Remove Toggle Icon & Navbar When Clicking a Link */
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

ScrollReveal({ 
    distance: '80px',
    duration: 2000,
    delay: 200,
});

document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll("section, .skill, .courses-box, .project-box, .volunteer-card, .contact form");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            } else {
                entry.target.classList.remove("visible");
            }
        });
    }, { threshold: 0.2 }); // 

    elements.forEach(element => {
        element.classList.add("hidden"); 
        observer.observe(element);
    });
});

// download
document.addEventListener("DOMContentLoaded", function () {
    const downloadBtn = document.querySelector('.btn'); // Select the download button

    if (downloadBtn) {
        downloadBtn.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default link behavior
            const link = document.createElement("a");
            link.href = "OmnyaCV.pdf"; // Ensure the correct file path
            link.download = "OmnyaHesham_CV.pdf";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    }
});



