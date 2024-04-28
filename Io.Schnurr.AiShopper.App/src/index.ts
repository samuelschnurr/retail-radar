import { createGlobalStyle } from "styled-components"

const styled = { createGlobalStyle }

const GlobalStyles = styled.createGlobalStyle`
    body,
    html,
    a {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
    }

    body {
        margin: 0;
        padding: 0;
        border: 0;
        outline: 0;
        background: #fff;
        overflow-x: hidden;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        color: #18216d;
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
        color: #18216d;
        font-size: 21px;
        line-height: 1.41;
    }

    a {
        text-decoration: none;
        outline: none;
        color: #2e186a;

        :hover {
            color: #2e186a;
        }
    }
`

export default GlobalStyles
