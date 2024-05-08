import styled from "styled-components"

export const NotFoundSection = styled("section")`
    position: relative;
    padding: 0rem 0 32rem;

    @media only screen and (max-width: ${p => p.theme.breakpoints.large}) {
        padding: 4rem 0 16rem;
        text-align: center;
    }
`
