document.querySelectorAll(".tab-button").forEach((button) => {
  button.addEventListener("click", () => {
    const group = button.dataset.tabGroup;
    const target = button.dataset.tab;

    document
      .querySelectorAll(`.tab-button[data-tab-group="${group}"]`)
      .forEach((tab) => {
        const selected = tab === button;
        tab.classList.toggle("active", selected);
        tab.setAttribute("aria-selected", selected ? "true" : "false");
      });

    document
      .querySelectorAll(`.tab-panel[data-tab-group="${group}"]`)
      .forEach((panel) => {
        panel.classList.toggle("active", panel.dataset.panel === target);
      });
  });
});
