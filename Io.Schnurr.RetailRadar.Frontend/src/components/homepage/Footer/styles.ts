import styled from "styled-components"

export const FooterSection = styled("section")`
    background: ${p => p.theme.colors.backgroundDark};
    position: relative;
    width: 100%;
    margin: auto;
    padding-bottom: 1rem;
    padding-top: 1rem;
`

export const FooterLinks = styled("div")`
    width: 40%;
    display: flex;
    justify-content: end;
    transition: all 0.1s ease-in-out;
    gap: 10%;

    a {
        &:hover,
        &:active,
        &:focus {
            -webkit-transform: scale(1.1);
            -ms-transform: scale(1.1);
            transform: scale(1.1);
        }
    }

    @media screen and (max-width: ${p => p.theme.breakpoints.medium}) {
        flex-direction: column;
    }
`
