import styled from "styled-components"

export const StyledButton = styled("button")<{ color?: string }>`
    background: ${p => p.color || p.theme.colors.primaryDark};
    color: ${p => (p.color ? p.theme.colors.primaryDark : p.theme.colors.background)};
    font-size: 1rem;
    font-weight: ${p => p.theme.font.weight.bold};
    width: 180px;
    border: 1px solid ${p => p.theme.colors.backgroundDark};
    border-radius: 4px;
    padding: 13px 0;
    cursor: pointer;
    margin-top: 0.625rem;
    max-width: 180px;
    transition: all 0.3s ease-in-out;
    box-shadow: 0 16px 30px rgb(23 31 114 / 20%);

    &:hover,
    &:active,
    &:focus {
        color: ${props => props.theme.colors.background};
        border: 1px solid ${props => props.theme.colors.secondary};
        background-color: ${props => props.theme.colors.secondary};
    }
`
