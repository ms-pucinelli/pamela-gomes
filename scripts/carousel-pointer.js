const carouselContainers = document.querySelectorAll(".tech-container");

carouselContainers.forEach((container) => {
  let pointerX = 0;
  let pointerY = 0;
  let pointerTarget = null;
  let animationFrame = null;

  function clearPointerTarget() {
    pointerTarget?.classList.remove("is-pointer-target");
    pointerTarget = null;
  }

  function updatePointerTarget() {
    const hitElement = document.elementFromPoint(pointerX, pointerY);
    const nextTarget = hitElement?.closest(".tech-item");
    const isContainerTarget = nextTarget && container.contains(nextTarget);
    const resolvedTarget = isContainerTarget ? nextTarget : null;

    if (resolvedTarget !== pointerTarget) {
      clearPointerTarget();
      pointerTarget = resolvedTarget;
      pointerTarget?.classList.add("is-pointer-target");
    }

    animationFrame = requestAnimationFrame(updatePointerTarget);
  }

  function trackPointer(event) {
    pointerX = event.clientX;
    pointerY = event.clientY;
  }

  container.addEventListener("pointerenter", (event) => {
    trackPointer(event);

    if (animationFrame === null) {
      animationFrame = requestAnimationFrame(updatePointerTarget);
    }
  });

  container.addEventListener("pointermove", trackPointer);

  container.addEventListener("pointerleave", () => {
    if (animationFrame !== null) {
      cancelAnimationFrame(animationFrame);
      animationFrame = null;
    }

    clearPointerTarget();
  });
});
