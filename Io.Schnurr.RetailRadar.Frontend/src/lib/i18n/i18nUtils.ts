import i18n from "i18next"

/**
 * Retrieves the localized resource file for a given namespace. Depending on the currently selected language.
 *
 * @param namespace - The namespace (filename) of the resource file to retrieve.
 * @returns The by the current language localized resource file for the specified namespace.
 */
export function getLocalizedResourceFile(namespace: string): any {
    const supportedLanguage = getCurrentLanguageCountryPart() === "de" ? "de" : "en"
    const file = i18n.getResourceBundle(supportedLanguage, namespace)
    return file
}

export function getCurrentLanguageCountryPart() {
    return i18n.language.split("-")[0].toLocaleLowerCase()
}

export function getCurrentLanguageRegionPart() {
    return i18n.language.split("-")[1]?.toLocaleLowerCase() ?? getCurrentLanguageCountryPart()
}
