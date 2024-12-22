import styled from "styled-components"

export const StyledImageContainer = styled("span")`
    display: flex;
    justify-content: space-evenly;

    a {
        cursor: pointer;
        padding-left: ${p => p.theme.padding.small};
        padding-right: ${p => p.theme.padding.small};
    }

    div {
        align-content: center;
        padding-left: ${p => p.theme.padding.small};
        padding-right: ${p => p.theme.padding.small};
    }
`
