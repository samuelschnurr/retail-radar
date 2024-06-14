import styled from "styled-components"

import { noSelect } from "../../../styles/sharedStyles"

export const StyledButton = styled("button")<{ color?: string }>`
    background: ${p => p.color || p.theme.colors.primaryDark};
    color: ${p => (p.color ? p.theme.colors.primaryDark : p.theme.colors.background)};
    font-size: 1rem;
    font-weight: ${p => p.theme.font.weight.bold};
    width: auto;
    max-width: 384px;
    border: 1px solid ${p => p.theme.colors.backgroundDark};
    border-radius: ${p => p.theme.border.radius};
    padding: ${p => p.theme.padding.medium} ${p => p.theme.padding.large}
        ${p => p.theme.padding.medium} ${p => p.theme.padding.large};
    cursor: pointer;

    transition: all 0.3s ease-in-out;
    box-shadow: ${p => p.theme.box.shadow};

    &:hover,
    &:active,
    &:focus {
        color: ${p => p.theme.colors.background};
        border: 1px solid ${p => p.theme.colors.secondary};
        background-color: ${p => p.theme.colors.secondary};
    }

    ${noSelect}
`
