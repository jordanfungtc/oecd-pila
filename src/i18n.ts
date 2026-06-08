import { createI18n } from "vue-i18n";
import en from "./locales/en.json";
import th from "./locales/th.json";

const LOCALE_STORAGE_KEY = "app-locale";

const getInitialLocale = () => {
  const saved = localStorage.getItem(LOCALE_STORAGE_KEY);
  if (saved === "en" || saved === "th") {
    return saved;
  }
  return "en";
};

const i18n = createI18n({
  legacy: false,
  locale: getInitialLocale(),
  fallbackLocale: "en",
  messages: {
    en,
    th,
  },
});

export default i18n;
