import i18n from "i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import { initReactI18next } from "react-i18next"

import { landingpageResources, messengerResources } from "./i18nResources"

const i18nConfig = i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
        fallbackLng: "en",
        resources: {
            en: { ...landingpageResources.en, ...messengerResources.en },
            de: { ...landingpageResources.de, ...messengerResources.de }
        },
        interpolation: {
            escapeValue: false
        },
        detection: {
            order: ["localStorage", "navigator"],
            caches: ["localStorage"]
        }
    })

export default i18nConfig
