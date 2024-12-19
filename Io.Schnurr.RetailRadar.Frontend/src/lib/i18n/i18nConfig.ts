import i18n from "i18next"
import LanguageDetector from "i18next-browser-languagedetector"

import { landingpageResources, messengerResources, routeResources } from "./i18nResources"

const i18nConfig = i18n.use(LanguageDetector).init({
    load: "languageOnly",
    fallbackLng: "en",
    resources: {
        en: { ...routeResources.en, ...landingpageResources.en, ...messengerResources.en },
        de: { ...routeResources.de, ...landingpageResources.de, ...messengerResources.de }
    },
    defaultNS: undefined,
    interpolation: {
        escapeValue: false
    },
    detection: {
        order: ["localStorage", "navigator"],
        caches: ["localStorage"]
    }
})

export default i18nConfig
