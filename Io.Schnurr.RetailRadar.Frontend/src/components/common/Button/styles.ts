import styled from "styled-components"

export const StyledButton = styled("button")<{ color?: string }>`
    background: ${p => p.color || p.theme.colors.primaryDark};
    color: ${p => (p.color ? p.theme.colors.primaryDark : p.theme.colors.background)};
    font-size: 1rem;
    font-weight: ${p => p.theme.font.weight.bold};
    width: auto;
    max-width: 384px;
    border: 1px solid ${p => p.theme.colors.backgroundDark};
    border-radius: 4px;
    padding: 16px 32px 16px 32px;
    cursor: pointer;

    transition: all 0.3s ease-in-out;
    box-shadow: 0 16px 30px rgb(23 31 114 / 20%);

    &:hover,
    &:active,
    &:focus {
        color: ${p => p.theme.colors.background};
        border: 1px solid ${p => p.theme.colors.secondary};
        background-color: ${p => p.theme.colors.secondary};
    }
`
