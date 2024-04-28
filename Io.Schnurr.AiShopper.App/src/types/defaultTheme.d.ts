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
            fontFamily: string
        }
    }
}
