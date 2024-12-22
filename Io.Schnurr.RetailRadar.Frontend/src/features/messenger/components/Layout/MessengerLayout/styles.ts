import { ChatContainer } from "@chatscope/chat-ui-kit-react"
import styled from "styled-components"

export const StyledChatContainer = styled(ChatContainer)`
    height: 100svh;

    .cs-message__content {
        font-family: ${p => p.theme.font.family};
    }

    a {
        color: ${p => p.theme.colors.primaryLight};
        text-decoration: none;
        outline: none;

        :hover {
            color: ${p => p.theme.colors.primaryDark};
            text-decoration: underline !important;

            ::after {
                content: url("/images/icon/linkHover.svg");
            }
        }

        ::after {
            vertical-align: middle;
            margin-left: 0.25rem;
            content: url("/images/icon/link.svg");
        }

        &.amazonImageLink {
            background-color: ${p => p.theme.colors.background};
            display: flex;
            border-radius: ${p => p.theme.border.radius};
            box-shadow: ${p => p.theme.box.shadow};
            padding: ${p => p.theme.padding.small};
            height: 96px;
            white-space: nowrap;
            gap: ${p => p.theme.gap.small};
            width: 400px;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;

            :hover {
                text-decoration: none !important;
            }

            img {
                width: 96px;
                object-fit: contain;
            }
            div {
                align-content: center;
                overflow: hidden;
                text-overflow: ellipsis;
                flex-grow: 1;
            }

            @media only screen and (max-width: ${p => p.theme.breakpoints.medium}) {
                width: 250px;
            }
        }
    }
`
