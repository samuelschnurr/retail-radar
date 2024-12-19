import i18n from "i18next"
import LanguageDetector from "i18next-browser-languagedetector"

import { landingpageResources, messengerResources } from "./i18nResources"

const trimmedNavigatorLanguageDetector = {
    name: "trimmedNavigator",
    lookup() {
        const detectedLanguage = navigator.language
        return detectedLanguage.split("-")[0]
    }
}

const languageDetector = new LanguageDetector()
languageDetector.addDetector(trimmedNavigatorLanguageDetector)

const i18nConfig = i18n.use(languageDetector).init({
    load: "languageOnly",
    fallbackLng: "en",
    resources: {
        en: { ...landingpageResources.en, ...messengerResources.en },
        de: { ...landingpageResources.de, ...messengerResources.de }
    },
    defaultNS: undefined,
    interpolation: {
        escapeValue: false
    },
    detection: {
        order: ["localStorage", "trimmedNavigator"],
        caches: ["localStorage"]
    }
})

export default i18nConfig
