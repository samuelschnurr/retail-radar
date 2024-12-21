import { hookstate, useHookstate } from "@hookstate/core"
import { devtools } from "@hookstate/devtools"
import i18n from "i18next"

import { Marketplace } from "../types/marketplace"
import { MarketplaceRegion } from "../types/marketplaceRegion"

const defaultState = { region: i18n.language === "de" ? ".de" : ".com" } as Marketplace

const state = hookstate<Marketplace>(
    { ...defaultState },
    devtools({ key: "retailradar-marketplace" })
)

export const useMarketplace = () => useHookstate(state).value

export const resetMarketplace = () => {
    state.set({ ...defaultState })
}

export const setRegion = (region: MarketplaceRegion) => {
    state.region.set(region)
}
