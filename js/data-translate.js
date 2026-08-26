let translations = {};

async function loadLanguage(language) {
  const response = await fetch(`assets/locales/${language}.json`);

  translations = await response.json();

  document.querySelectorAll("[data-translate]").forEach((element) => {
    const key = element.dataset.translate;

    element.textContent = translations[key];
  });

  document.documentElement.lang = language;

  localStorage.setItem("language", language);
}

window.loadLanguage = loadLanguage;

const savedLanguage = localStorage.getItem("language") || "ru";

loadLanguage(savedLanguage);
