import { hookstate, useHookstate } from "@hookstate/core"
import { devtools } from "@hookstate/devtools"
import { localstored } from "@hookstate/localstored"
import i18n from "i18next"

import { Marketplace } from "../types/marketplace"
import { MarketplaceRegion } from "../types/marketplaceRegion"

const LOCAL_STORAGE_KEY = "retailradar-marketplace"
const defaultState = { region: i18n.language === "de" ? ".de" : ".com" } as Marketplace

const state = hookstate<Marketplace>({ ...defaultState }, devtools({ key: LOCAL_STORAGE_KEY }))
export const useMarketplace = () => useHookstate(state).value

export const useMarketplace2 = () =>
    useHookstate({ ...defaultState }, localstored({ key: LOCAL_STORAGE_KEY }))

export const resetMarketplace = () => {
    state.set({ ...defaultState })
}

export const setRegion = (region: MarketplaceRegion) => {
    state.region.set(region)
}
