import i18n from "i18next"
import { initReactI18next } from "react-i18next"

import { resources } from "./i18nResources"

const i18nConfig = i18n.use(initReactI18next).init({
    lng: "en",
    fallbackLng: "en",
    resources,
    interpolation: {
        escapeValue: false
    }
})

export default i18nConfig
