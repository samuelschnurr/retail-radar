import styled from "styled-components"

export const MiddleBlockSection = styled("section")`
    position: relative;
    padding: 7.5rem 0 3rem;
    text-align: center;
    display: flex;
    justify-content: center;

    @media screen and (max-width: ${p => p.theme.breakpoints.large}) {
        padding: 5.5rem 0 3rem;
    }
`

export const Content = styled("p")`
    padding: 0.75rem 0 0.75rem;
`

export const ContentWrapper = styled("div")`
    max-width: 570px;

    @media only screen and (max-width: ${p => p.theme.breakpoints.medium}) {
        max-width: 100%;
    }
`
