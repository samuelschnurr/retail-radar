import styled from "styled-components"

export const Section = styled.section`
    position: relative;
    padding: 0 0 32rem;

    @media only screen and (max-width: ${p => p.theme.breakpoints.large}) {
        padding: 4rem 0 16rem;
        text-align: center;
    }
`
