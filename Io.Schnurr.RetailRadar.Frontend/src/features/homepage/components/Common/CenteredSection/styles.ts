import styled from "styled-components"

export const StyledSection = styled("section")<{ centerContent: boolean }>`
    position: relative;
    padding: 8rem 0 8rem;
    text-align: ${p => (p.centerContent ? "center" : "start")};
    justify-content: ${p => (p.centerContent ? "center" : "flex-start")};

    @media only screen and (max-width: ${p => p.theme.breakpoints.large}) {
        padding: 2rem 0 2rem;
    }
`
