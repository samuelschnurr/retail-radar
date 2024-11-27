import i18n from "i18next"
import { initReactI18next } from "react-i18next"

import { i18nResourceDE, i18nResourceEN } from "./i18nResources"

const i18nConfig = i18n.use(initReactI18next).init({
    lng: "en",
    fallbackLng: "en",
    resources: { en: i18nResourceEN, de: i18nResourceDE },
    defaultNS: undefined,
    interpolation: {
        escapeValue: false
    }
})

export default i18nConfig
