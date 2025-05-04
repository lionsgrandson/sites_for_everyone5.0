import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Import your translation files if you're not using a backend
import translationEN from "./locales/en.json";
import translationHE from "./locales/he.json";

// Initialize i18next
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
    lng: localStorage.getItem("i18nextLng") || "en", // Set the default language from localStorage or English
    fallbackLng: "en", // Set the fallback language to Hebrew
    supportedLngs: ["en", "he"],
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    detection: {
      order: ["localStorage", "navigator", "htmlTag", "path", "subdomain"],
      caches: ["localStorage"], // Store the language in localStorage
    },
    react: {
      useSuspense: false, // Disable suspense for React
    },
  });

// Function to print out all settings
// const printSettings = () => {
//   console.log("i18next Settings:");
//   console.log("Current Language:", i18n.language);
//   console.log("Fallback Language:", i18n.options.fallbackLng);
//   console.log("Supported Languages:", i18n.options.supportedLngs);
//   console.log("Detection Order:", i18n.options.detection.order);
//   console.log("Caches:", i18n.options.detection.caches);
//   console.log("Resources:", i18n.options.resources);
// };

// Call the printSettings function to log the settings
// printSettings();

export default i18n;
