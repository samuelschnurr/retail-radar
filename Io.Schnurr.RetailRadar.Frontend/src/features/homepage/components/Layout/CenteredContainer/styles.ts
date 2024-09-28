import styled from "styled-components"

export const StyledCenteredContainer = styled("div")<{
    border?: boolean
}>`
    position: relative;
    width: 100%;
    max-width: 1200px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 60px;
    border-top: ${p => (p.border ? "1px solid " + p.theme.colors.backgroundExtraDark : "")};

    @media only screen and (max-width: ${p => p.theme.breakpoints.large}) {
        max-width: calc(100% - 68px);
        padding: 0 30px;
    }

    @media only screen and (max-width: ${p => p.theme.breakpoints.medium}) {
        max-width: calc(100% - 38px);
        padding: 0 18px;
    }

    @media only screen and (max-width: ${p => p.theme.breakpoints.small}) {
        max-width: 100%;
        padding: 0 18px;
    }
`
