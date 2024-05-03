import { createGlobalStyle } from "styled-components"

const styled = { createGlobalStyle }

const GlobalStyles = styled.createGlobalStyle`
    body,
    html,
    a {
        font-family: ${p => p.theme.font.family};
    }

    body {
        margin: 0;
        padding: 0;
        border: 0;
        outline: 0;
        background: ${p => p.theme.colors.background};
        overflow-x: hidden;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: ${p => p.theme.font.family};
        color: ${p => p.theme.colors.primary};
        font-size: ${p => p.theme.font.size.extraLarge};
        line-height: 1.18;

        @media only screen and (max-width: 890px) {
            font-size: ${p => p.theme.font.size.large};
        }

        @media only screen and (max-width: ${p => p.theme.breakpoints.small}) {
            font-size: ${p => p.theme.font.size.medium};
        }
    }

    p {
        color: ${p => p.theme.colors.primary};
        font-size: ${p => p.theme.font.size.small};
        line-height: 1.41;
    }

    a {
        text-decoration: none;
        outline: none;
        color: ${p => p.theme.colors.primaryDark};

        :hover {
            color: ${p => p.theme.colors.primaryDark};
        }
    }
`

export default GlobalStyles
