import styled from "styled-components"

export const StyledTextButton = styled("button")<{ active: boolean }>`
    border: none;
    background: none;
    color: ${p => p.theme.colors.primaryDark};
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    border-radius: ${p => p.theme.border.radius};

    &:hover,
    &:active,
    &:focus {
        color: ${p => p.theme.colors.background};
        background-color: ${p => p.theme.colors.secondary};
    }

    ${p =>
        p.active &&
        `
        color: ${p.theme.colors.background};
        background-color: ${p.theme.colors.secondary};
    `}
`
