const collapsibles = document.querySelectorAll(".collapsible");

function updateAccordionLabels() {
  const viewDetailsLabel = window.portfolioI18n.translate("journey.viewDetails");
  const hideDetailsLabel = window.portfolioI18n.translate("journey.hideDetails");

  document.querySelectorAll(".view-details").forEach((label) => {
    label.textContent = viewDetailsLabel;
  });

  document.querySelectorAll(".hide-details").forEach((button) => {
    button.textContent = hideDetailsLabel;
  });
}

function toggleCollapsible(element, returnFocus = false) {
  const content = element.nextElementSibling;
  const isOpen = element.classList.toggle("active");

  element.setAttribute("aria-expanded", String(isOpen));
  content.classList.toggle("open", isOpen);

  if (!isOpen && returnFocus) {
    element.focus();
  }
}

collapsibles.forEach((element, index) => {
  const content = element.nextElementSibling;
  const contentId = `timeline-details-${index + 1}`;

  content.id = contentId;
  element.setAttribute("aria-controls", contentId);

  const viewDetails = document.createElement("span");
  viewDetails.className = "view-details";
  element.append(viewDetails);

  const hideButton = document.createElement("button");
  hideButton.type = "button";
  hideButton.className = "hide-details";
  hideButton.addEventListener("click", () => toggleCollapsible(element, true));
  content.append(hideButton);

  element.addEventListener("click", () => toggleCollapsible(element));

  element.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleCollapsible(element);
    }
  });
});

updateAccordionLabels();
window.addEventListener("portfolio-language-change", updateAccordionLabels);
