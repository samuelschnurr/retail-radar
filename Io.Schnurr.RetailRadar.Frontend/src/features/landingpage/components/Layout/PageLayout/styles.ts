import styled from "styled-components"

export const Section = styled("section")`
    position: relative;
    min-height: calc(100vh - 250px);

    @media only screen and (max-width: ${p => p.theme.breakpoints.large}) {
        text-align: center;
    }
`
