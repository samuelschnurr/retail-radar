import { hookstate, useHookstate } from "@hookstate/core"
import { localstored } from "@hookstate/localstored"
import { getCurrentLanguageCountryPart, getCurrentLanguageRegionPart } from "@lib/i18n/i18nUtils"

import { Marketplace } from "../types/marketplace"
import { MarketplaceRegion } from "../types/marketplaceRegion"

const LOCAL_STORAGE_KEY = "retailradar-marketplace"
const defaultState = { region: getCurrentRegion() } as Marketplace

const state = hookstate<Marketplace>(defaultState, localstored({ key: LOCAL_STORAGE_KEY }))

export const useMarketplace = () => useHookstate(state).value

export const resetMarketplace = () => {
    state.set({ ...defaultState })
}

export const setRegion = (region: MarketplaceRegion) => {
    state.region.set(region)
}

function getCurrentRegion(): MarketplaceRegion {
    try {
        const currentLanguageCountry = getCurrentLanguageCountryPart()
        const currentLanguageRegion = getCurrentLanguageRegionPart()

        switch (currentLanguageCountry) {
            case "en":
                if (currentLanguageRegion === "gb" || currentLanguageRegion === "ie") {
                    return ".co.uk"
                } else if (currentLanguageRegion === "au") {
                    return ".com.au"
                } else {
                    return ".com"
                }
            case "de":
                return ".de"
            case "fr":
                if (currentLanguageRegion === "ch") {
                    return ".de"
                }
                return ".fr"
            case "it":
                if (currentLanguageRegion === "ch") {
                    return ".de"
                }
                return ".it"
            case "es":
                return ".es"
            default:
                return ".com"
        }
    } catch (error) {
        return ".com"
    }
}

;(function initializeState() {
    if (!localStorage.getItem(LOCAL_STORAGE_KEY)) {
        state.set({ ...defaultState })
    }
})()
