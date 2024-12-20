import { ChatContainer } from "@chatscope/chat-ui-kit-react"
import styled from "styled-components"

export const StyledChatContainer = styled(ChatContainer)`
    height: 100svh;

    .cs-message__content {
        font-family: ${p => p.theme.font.family};
    }
    a {
        color: #1890ff;
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
    }
`
