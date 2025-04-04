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
