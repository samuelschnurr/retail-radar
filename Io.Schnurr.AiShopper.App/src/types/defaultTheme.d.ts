import "styled-components"

declare module "styled-components" {
    export interface DefaultTheme {
        colors: {
            primary: string
            primaryDark: string
            secondary: string
            background: string
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
        }
    }
}
