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
    box: {
        shadow: "0 8px 16px rgb(23 31 114 / 20%)"
    },
    border: {
        radius: "4px"
    },
    padding: {
        small: "8px",
        medium: "16px",
        large: "32px"
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
    },
    breakpoints: {
        small: "414px",
        medium: "768px",
        large: "1024px"
    }
}

export default LightTheme
