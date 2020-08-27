import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import languages from "../shared/InputLanguage/languages";

i18n.use(Backend)
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		fallbackLng: "en_US",
		supportedLngs: languages.map(l => l.code),
		debug: true,
		backend: {
			loadPath: "http://localhost:3500/static/translations/{{lng}}"
		},
		interpolation: {
			escapeValue: false // not needed for react as it escapes by default
		}
	});

export default i18n;
