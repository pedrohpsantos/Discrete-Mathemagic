document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuButton = document.getElementById("mobileMenuButton");
  const sidebar = document.getElementById("sidebar");
  const mainContent = document.getElementById("mainContent");
  const contentSections = document.querySelectorAll(".content-section");
  const sidebarLinks = document.querySelectorAll(".sidebar-link");

  if (mobileMenuButton && sidebar) {
    mobileMenuButton.addEventListener("click", () => {
      sidebar.classList.toggle("-translate-x-full");
    });
  }

  function setActiveSection(targetId) {
    contentSections.forEach((section) => {
      section.classList.remove("active");
    });
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.classList.add("active");
    }

    sidebarLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.dataset.target === targetId) {
        link.classList.add("active");
      }
    });

    if (mainContent) {
      mainContent.scrollTop = 0;
    }
    document.documentElement.scrollTop = 0;
    if (targetId && window.location.hash !== "#" + targetId) {
      window.location.hash = targetId;
    }
  }

  sidebarLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = e.currentTarget.dataset.target;
      setActiveSection(targetId);
      if (
        window.innerWidth < 768 &&
        sidebar &&
        !sidebar.classList.contains("-translate-x-full")
      ) {
        sidebar.classList.add("-translate-x-full");
      }
    });
  });

  let initialTarget = "intro";
  if (window.location.hash) {
    const hashTarget = window.location.hash.substring(1);
    if (document.getElementById(hashTarget)) {
      initialTarget = hashTarget;
    }
  }
  setActiveSection(initialTarget);

  document
    .querySelectorAll(".solution-trigger, .collapsible-trigger")
    .forEach((button) => {
      button.addEventListener("click", function () {
        const contentDiv = this.nextElementSibling;
        if (contentDiv) {
          contentDiv.classList.toggle("active");
          const isActive = contentDiv.classList.contains("active");
          let buttonText = "";

          if (this.classList.contains("solution-trigger")) {
            buttonText = isActive ? "Ocultar Solução" : "Mostrar Solução";
          } else if (this.classList.contains("collapsible-trigger")) {
            const originalText =
              this.dataset.originalText ||
              this.textContent.replace(/Mostrar |Ocultar /g, "");
            this.dataset.originalText = originalText;

            buttonText = isActive
              ? `Ocultar ${originalText}`
              : `Mostrar ${originalText}`;
          }
          this.textContent = buttonText;
        }
      });
    });
});