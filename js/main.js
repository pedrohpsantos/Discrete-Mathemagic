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
      mainContent.scrollTop = 0; // Rolagem para o topo do conteúdo principal
    }
    document.documentElement.scrollTop = 0; // Rolagem para o topo da página
    // Atualiza o hash na URL sem causar um salto na página se já estiver correto
    if (targetId && window.location.hash !== "#" + targetId) {
      window.location.hash = targetId;
    }
  }

  sidebarLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = e.currentTarget.dataset.target;
      setActiveSection(targetId);
      // Esconde a sidebar em modo mobile após clicar em um link
      if (
        window.innerWidth < 768 && // md breakpoint de Tailwind
        sidebar &&
        !sidebar.classList.contains("-translate-x-full")
      ) {
        sidebar.classList.add("-translate-x-full");
      }
    });
  });

  // Define a seção ativa inicial baseada no hash da URL ou padrão 'intro'
  let initialTarget = "intro"; // Seção padrão
  if (window.location.hash) {
    const hashTarget = window.location.hash.substring(1); // Remove o '#'
    if (document.getElementById(hashTarget)) {
      initialTarget = hashTarget;
    }
  }
  setActiveSection(initialTarget);

  // Lógica para botões "collapsible" e "solution"
  document
    .querySelectorAll(".solution-trigger, .collapsible-trigger")
    .forEach((button) => {
      button.addEventListener("click", function () {
        const contentDiv = this.nextElementSibling; // O conteúdo a ser mostrado/ocultado
        if (contentDiv) {
          contentDiv.classList.toggle("active");
          const isActive = contentDiv.classList.contains("active");
          let buttonText = "";

          if (this.classList.contains("solution-trigger")) {
            buttonText = isActive ? "Ocultar Solução" : "Mostrar Solução";
          } else if (this.classList.contains("collapsible-trigger")) {
            // Tenta obter o texto original do atributo data, ou do texto atual do botão
            const originalText =
              this.dataset.originalText ||
              this.textContent.replace(/Mostrar |Ocultar /g, ""); // Remove prefixos
            this.dataset.originalText = originalText; // Armazena para uso futuro

            buttonText = isActive
              ? `Ocultar ${originalText}`
              : `Mostrar ${originalText}`;
          }
          this.textContent = buttonText;
        }
      });
    });
});