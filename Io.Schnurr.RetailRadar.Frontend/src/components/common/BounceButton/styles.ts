import { Button } from "@chatscope/chat-ui-kit-react"
import styled, { css } from "styled-components"

export const StyledBounceButton = styled(Button)<{
    $startDelay: number
    $isBouncing: boolean
}>`
    animation-delay: ${p => `${p.$startDelay}ms`};
    font-size: ${p => `${p.theme.font.size.extraSmall}`};

    ${({ $isBouncing }) =>
        $isBouncing &&
        css`
            transform-origin: 50% 50%;
            animation: bounce 0.5s linear normal infinite;
        `}

    @keyframes bounce {
        0% {
            transform: translate3d(0, 0, 0) scale3d(1, 1, 1);
        }
        30% {
            transform: translate3d(0, -30%, 0) scale3d(0.8, 1.1, 1);
        }
        50% {
            transform: translate3d(0, -50%, 0) scale3d(1.1, 0.8, 1);
        }
    }
`
