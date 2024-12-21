import { hookstate, useHookstate } from "@hookstate/core"
import { devtools } from "@hookstate/devtools"
import { localstored } from "@hookstate/localstored"
import i18n from "i18next"

import { Marketplace } from "../types/marketplace"
import { MarketplaceRegion } from "../types/marketplaceRegion"

const LOCAL_STORAGE_KEY = "retailradar-marketplace"
const defaultState = { region: i18n.language === "de" ? ".de" : ".com" } as Marketplace

const state = hookstate<Marketplace>({ ...defaultState }, devtools({ key: LOCAL_STORAGE_KEY }))

const localStoredState = hookstate<Marketplace>(
    { ...defaultState },
    localstored({ key: LOCAL_STORAGE_KEY })
)

export const useMarketplace = () => useHookstate(state).value

export const useMarketplace2 = () => useHookstate(localStoredState).value

export const resetMarketplace = () => {
    localStoredState.set({ ...defaultState })
}

export const setRegion = (region: MarketplaceRegion) => {
    localStoredState.region.set(region)
}
