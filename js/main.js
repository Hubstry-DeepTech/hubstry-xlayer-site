const languageToggle = document.getElementById("languageToggle");

if (languageToggle) {
  languageToggle.addEventListener("click", () => {
    const current = document.documentElement.lang;

    if (current === "pt-BR") {
      document.documentElement.lang = "en";
      alert("English version will be available through the /en section.");
    } else {
      document.documentElement.lang = "pt-BR";
    }
  });
}
