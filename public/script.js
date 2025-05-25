document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menu-btn");
  const navLinks = document.getElementById("nav-links");

  // Only proceed if menuBtn and navLinks exist
  if (menuBtn && navLinks) {
    const menuBtnIcon = menuBtn.querySelector("i");

    menuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("open");

      const isOpen = navLinks.classList.contains("open");
      menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
    });

    navLinks.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuBtnIcon.setAttribute("class", "ri-menu-line");
    });
  }

  const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
  };

  ScrollReveal().reveal(".header_container h1", { ...scrollRevealOption });
  ScrollReveal().reveal(".header_container .section_description", {
    ...scrollRevealOption,
    delay: 500,
  });
  ScrollReveal().reveal(".header_link", { ...scrollRevealOption, delay: 1000 });
  ScrollReveal().reveal(".shop_card", { ...scrollRevealOption, interval: 500 });
  ScrollReveal().reveal(".about_content .section_header", { ...scrollRevealOption });
  ScrollReveal().reveal(".about_content .section_description", {
    ...scrollRevealOption,
    delay: 500,
    interval: 500,
  });
  ScrollReveal().reveal(".about_stats", { ...scrollRevealOption, delay: 1500 });

  const swiper = new Swiper(".swiper", {
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
});
