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

scrollHeader();
