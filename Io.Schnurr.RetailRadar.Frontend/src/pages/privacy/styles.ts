import styled from "styled-components"

export const PrivacySection = styled("section")`
    position: relative;
    padding: 10rem 0 8rem;

    @media only screen and (max-width: ${p => p.theme.breakpoints.large}) {
        padding: 4rem 0 2rem;
        text-align: center;
    }
`
