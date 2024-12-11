import i18n from "i18next"
import { initReactI18next } from "react-i18next"

import { landingpageResources, messengerResources, routeResources } from "./i18nResources"

const i18nConfig = i18n.use(initReactI18next).init({
    lng: "en",
    fallbackLng: "en",
    resources: {
        en: { ...routeResources.en, ...landingpageResources.en, ...messengerResources.en },
        de: { ...routeResources.de, ...landingpageResources.de, ...messengerResources.de }
    },
    defaultNS: undefined,
    interpolation: {
        escapeValue: false
    }
})

export default i18nConfig
