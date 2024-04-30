import { DefaultTheme } from "styled-components"

const LightTheme: DefaultTheme = {
    colors: {
        primary: "#18216d",
        primaryDark: "#2e186a",
        secondary: "#ff825c",
        background: "#ffffff",
        backgroundDark: "#f1f2f3",
        backgroundExtraDark: "#e0e0e0"
    },
    font: {
        family: "Verdana, Geneva, Tahoma, sans-serif",
        size: {
            extraSmall: "16px",
            small: "21px",
            medium: "32px",
            large: "47px",
            extraLarge: "56px"
        },
        weight: {
            light: 200,
            normal: 500,
            bold: 700
        }
    }
}

export default LightTheme
