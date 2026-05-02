import { createI18n } from "vue-i18n";
import en from "./locales/en.json";
import th from "./locales/th.json";

const LOCALE_STORAGE_KEY = "app-locale";
const savedLocale =
  typeof window !== "undefined" ? localStorage.getItem(LOCALE_STORAGE_KEY) : null;
const initialLocale = savedLocale === "th" || savedLocale === "en" ? savedLocale : "en";

const i18n = createI18n({
  legacy: false,
  locale: initialLocale,
  fallbackLocale: "en",
  messages: {
    en,
    th,
  },
});

export default i18n;
