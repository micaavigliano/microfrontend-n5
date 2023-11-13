import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "sharedResources/translations/en";
import esTranslation from "sharedResources/translations/es";

const resources = {
  en: {
    translation: enTranslation,
  },
  es: {
    translation: esTranslation,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "es",
  fallbackLng: "en",
  debug: true,
});

export default i18n;
