import styled from "styled-components"

export const StyledSection = styled("section")<{
    centerContentOnDesktop: boolean
    centerContentOnMobile: boolean
}>`
    position: relative;
    padding: 10rem 0 6rem;
    text-align: ${p => (p.centerContentOnDesktop ? "center" : "start")};
    justify-content: ${p => (p.centerContentOnDesktop ? "center" : "flex-start")};

    @media only screen and (max-width: ${p => p.theme.breakpoints.large}) {
        padding: 4rem 0 2rem;
        text-align: ${p => (p.centerContentOnMobile ? "center" : "start")};
    }
`
