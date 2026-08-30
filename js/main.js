const languageToggle = document.getElementById("languageToggle");

if (languageToggle) {
  languageToggle.addEventListener("click", () => {
    const current = document.documentElement.lang;

    if (current === "pt-BR") {
      window.location.href = "en/index.html";
    } else {
      window.location.href = "../index.html";
    }
  });
}
