import "styled-components"

declare module "styled-components" {
    export interface DefaultTheme {
        colors: {
            primary: string
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
        padding: {
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
