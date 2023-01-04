const scrollHeader = () => {
  const header = document.querySelector(".header");

  window.addEventListener("scroll", () => {
    if (window.scrollY >= 100) {
      header.classList.add("header_scroll");
    } else {
      header.classList.remove("header_scroll");
    }
  });
};

const scrollSection = () => {
  const anchors = document.querySelectorAll(".header__nav > a[href*='#']");

  anchors.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();

      let itemId = item.getAttribute("href");

      const section = document.querySelector(`${itemId}`);

      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  });
};

const openBurger = () => {
  const page = document.querySelector(".page");
  const burger = document.querySelector(".header__burger");
  const menuMobile = document.querySelector(".header__menu-mobile");
  const links = document.querySelectorAll(".header__link_mobile");

  burger.addEventListener("click", () => {
    menuMobile.classList.toggle("header__menu-mobile_active");
    page.classList.toggle("page_active");
  });

  links.forEach((item) => {
    item.addEventListener("click", () => {
      menuMobile.classList.remove("header__menu-mobile_active");
      page.classList.remove("page_active");
    });
  });
};

scrollHeader();
scrollSection();
openBurger();
