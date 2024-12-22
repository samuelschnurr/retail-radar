import "styled-components"

declare module "styled-components" {
    export interface DefaultTheme {
        colors: {
            primary: string
            primaryLight: string
            primaryDark: string
            secondary: string
            background: string
            backgroundDark: string
            backgroundExtraDark: string
        }
        box: {
            shadow: string
        }
        border: {
            radius: string
        }
        gap: {
            small: string
            medium: string
        }
        margin: {
            medium: string
        }
        padding: {
            small: string
            medium: string
            large: string
        }
        font: {
            family: string
            size: {
                extraSmall: string
                small: string
                medium: string
                large: string
                extraLarge: string
            }
            weight: {
                light: number
                normal: number
                bold: number
            }
        }
        breakpoints: {
            small: string
            medium: string
            large: string
        }
    }
}
