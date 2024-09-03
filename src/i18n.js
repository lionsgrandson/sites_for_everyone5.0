import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Import your translation files if you're not using a backend
import translationEN from "./locales/en.json";
import translationHE from "./locales/he.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: translationEN,
      },
      he: {
        translation: translationHE,
      },
    },
    lng: "he", // Set the default language to Hebrew
    fallbackLng: "he", // Also set the fallback language to Hebrew
    supportedLngs: ["en", "he"],
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["navigator", "htmlTag", "path", "subdomain"],
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
