import { createGlobalStyle } from "styled-components"

const styled = { createGlobalStyle }

const GlobalStyles = styled.createGlobalStyle`
    body,
    html,
    a {
        font-family: ${props => props.theme.font.fontFamily};
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
        font-family: ${props => props.theme.font.fontFamily};
        color: ${props => props.theme.colors.primary};
        font-size: 56px;
        line-height: 1.18;

        @media only screen and (max-width: 890px) {
            font-size: 47px;
        }

        @media only screen and (max-width: 414px) {
            font-size: 32px;
        }
    }

    p {
        color: ${props => props.theme.colors.primary};
        font-size: 21px;
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
