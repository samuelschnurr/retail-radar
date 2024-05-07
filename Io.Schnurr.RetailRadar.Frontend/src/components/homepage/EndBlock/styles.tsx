import styled from "styled-components"

export const EndBlockSection = styled("section")`
    position: relative;
    padding: 8rem 0 8rem;
    text-align: center;
    justify-content: center;

    @media only screen and (max-width: ${p => p.theme.breakpoints.large}) {
        padding: 2rem 0 2rem;
    }
`

export const StyledImageContainer = styled("span")`
    display: flex;
    justify-content: space-evenly;

    a {
        cursor: pointer;
    }
`
