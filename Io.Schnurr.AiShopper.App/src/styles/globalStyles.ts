import { createGlobalStyle } from "styled-components"

const styled = { createGlobalStyle }

const GlobalStyles = styled.createGlobalStyle`
    body,
    html,
    a {
        font-family: ${props => props.theme.font.family};
    }

    body {
        margin: 0;
        padding: 0;
        border: 0;
        outline: 0;
        background: ${props => props.theme.colors.background};
        overflow-x: hidden;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: ${props => props.theme.font.family};
        color: ${props => props.theme.colors.primary};
        font-size: ${props => props.theme.font.size.extraLarge};
        line-height: 1.18;

        @media only screen and (max-width: 890px) {
            font-size: ${props => props.theme.font.size.large};
        }

        @media only screen and (max-width: 414px) {
            font-size: ${props => props.theme.font.size.medium};
        }
    }

    p {
        color: ${props => props.theme.colors.primary};
        font-size: ${props => props.theme.font.size.small};
        line-height: 1.41;
    }

    a {
        text-decoration: none;
        outline: none;
        color: ${props => props.theme.colors.primaryDark};

        :hover {
            color: ${props => props.theme.colors.primaryDark};
        }
    }
`

export default GlobalStyles
