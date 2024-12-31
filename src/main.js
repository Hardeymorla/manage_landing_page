const toggleBtn = document.querySelector(".toggle-btn");
const primaryNav = document.querySelector(".primary-navigation");
const primaryHeader = document.querySelector(".primary-header");
const buttons = document.querySelectorAll(".btn");

toggleBtn.addEventListener("click", () => {
    primaryNav.hasAttribute("data-visible")
        ? toggleBtn.setAttribute("aria-expanded", false)
        : toggleBtn.setAttribute("aria-expanded", true);
    primaryNav.toggleAttribute("data-visible")
    primaryHeader.toggleAttribute("data-overlay")
    // buttons.forEach(button => {
    //     button.disabled = true;
    // })
    
})

new Swiper('.card-wrapper', {
    // pagination bullets
    loop: true,
    spaceBetween: 30,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // responsive breakpoints
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        },
    }
  });