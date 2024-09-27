import styled from "styled-components"

export const CommonSection = styled("section")`
    position: relative;
    padding: 10rem 0 8rem;
    height: 100%;

    @media only screen and (max-width: ${p => p.theme.breakpoints.large}) {
        padding: 4rem 0 2rem;
        text-align: center;
    }
`
