const nav = document.querySelector("nav");

export default () => {
  console.log("hello");
  document.querySelector(".fa-hamburger").addEventListener(
    "click",
    // Callback fxn.
    () => {
      // Short-circuit OR operator
      nav.classList.replace("is-collapsed", "is-expanded") ||
        nav.classList.replace("is-expanded", "is-collapsed");
    }
  );
};
