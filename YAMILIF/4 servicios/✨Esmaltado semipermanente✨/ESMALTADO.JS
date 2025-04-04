document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
});

document.addEventListener("DOMContentLoaded", function () {
        const menuToggle = document.getElementById("menu-toggle");
        const navMenu = document.getElementById("nav-menu");

        menuToggle.addEventListener("click", function () {
            navMenu.classList.toggle("active");

            // Cambia el ícono entre ☰ y ✖
            if (navMenu.classList.contains("active")) {
                menuToggle.innerHTML = "✖";
            } else {
                menuToggle.innerHTML = "☰";
            }
        });
    });

    document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");

    menuToggle.addEventListener("click", function () {
        if (navMenu.style.height === "0px" || navMenu.style.height === "") {
            navMenu.style.height = navMenu.scrollHeight + "px";
        } else {
            navMenu.style.height = "0px";
        }
    });

    // Cierra el menú al hacer clic en un enlace
    document.querySelectorAll(".nav-menu li").forEach(item => {
        item.addEventListener("click", () => {
            navMenu.style.height = "0px";
        });
    });
});


        const images = document.querySelectorAll('.slideshow-container img');
        let currentImageIndex = 0;

        function changeImage() {
            images[currentImageIndex].style.opacity = '0';
            currentImageIndex = (currentImageIndex + 1) % images.length;
            images[currentImageIndex].style.opacity = '1';
        }

        setInterval(changeImage, 10000); // Change image every 10 seconds

function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function handleScroll() {
        var sections = document.querySelectorAll('.content-section');
        sections.forEach(function(section) {
            if (isElementInViewport(section)) {
                section.classList.add('visible');
                section.classList.add('animated');
            }
        });
    }

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('load', handleScroll);