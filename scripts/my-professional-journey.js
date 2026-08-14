const collapsibles = document.querySelectorAll(".collapsible");

function toggleCollapsible(element) {
  const content = element.nextElementSibling;
  const isOpen = element.classList.toggle("active");

  element.setAttribute("aria-expanded", String(isOpen));
  content.classList.toggle("open", isOpen);
}

collapsibles.forEach((element) => {
  element.addEventListener("click", () => toggleCollapsible(element));

  element.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleCollapsible(element);
    }
  });
});
