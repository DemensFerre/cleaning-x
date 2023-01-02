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

scrollHeader();
scrollSection();
