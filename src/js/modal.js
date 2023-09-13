(() => {
  const refs = {
    openMenuBtn: document.querySelector("[data-menu-open]"),
    closeMenuBtn: document.querySelector("[data-menu-close]"),
    menu: document.querySelector("[data-menu]"),
    link: document.querySelectorAll(".mobile-nav__link"),
    mobContact: document.querySelector(".mobile-nav__contact-link"),
  };

  refs.openMenuBtn.addEventListener("click", toggleModal);
  refs.closeMenuBtn.addEventListener("click", toggleModal);

  refs.link.forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      toggleModal();
    });
  });

  refs.mobContact.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.menu.classList.toggle("is-open");
  }
})();
