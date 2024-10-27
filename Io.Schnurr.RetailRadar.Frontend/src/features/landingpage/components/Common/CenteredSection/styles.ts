import styled from "styled-components"

export const StyledSection = styled("section")<{
    centerContentOnDesktop: boolean
    centerContentOnMobile: boolean
}>`
    position: relative;
    padding: 8rem 0 8rem;
    text-align: ${p => (p.centerContentOnDesktop ? "center" : "start")};
    justify-content: ${p => (p.centerContentOnDesktop ? "center" : "flex-start")};

    @media only screen and (max-width: ${p => p.theme.breakpoints.large}) {
        padding: 2rem 0 2rem;
        text-align: ${p => (p.centerContentOnMobile ? "center" : "start")};
    }
`
