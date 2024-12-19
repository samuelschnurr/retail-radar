import styled from "styled-components"

export const StyledTextButton = styled("button")<{ color?: string }>`
    border: none;
    background: none;
    color: ${p => p.theme.colors.primaryDark};
    cursor: pointer;

    &:hover,
    &:active,
    &:focus {
        color: ${p => p.theme.colors.background};
        background-color: ${p => p.theme.colors.secondary};
    }
`
