import { ChatContainer } from "@chatscope/chat-ui-kit-react"
import styled from "styled-components"

export const StyledChatContainer = styled(ChatContainer)`
    height: 100vh;

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
                content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill-rule='evenodd' viewBox='64 64 896 896' focusable='false' data-icon='export' width='0.75em' height='0.75em' fill='%2318216d' aria-hidden='true'%3E%3Cpath d='M880 912H144c-17.7 0-32-14.3-32-32V144c0-17.7 14.3-32 32-32h360c4.4 0 8 3.6 8 8v56c0 4.4-3.6 8-8 8H184v656h656V520c0-4.4 3.6-8 8-8h56c4.4 0 8 3.6 8 8v360c0 17.7-14.3 32-32 32zM770.87 199.13l-52.2-52.2a8.01 8.01 0 014.7-13.6l179.4-21c5.1-.6 9.5 3.7 8.9 8.9l-21 179.4c-.8 6.6-8.9 9.4-13.6 4.7l-52.4-52.4-256.2 256.2a8.03 8.03 0 01-11.3 0l-42.4-42.4a8.03 8.03 0 010-11.3l256.1-256.3z'%3E%3C/path%3E%3C/svg%3E");
            }
        }

        ::after {
            vertical-align: middle;
            margin-left: 0.25rem;
            content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill-rule='evenodd' viewBox='64 64 896 896' focusable='false' data-icon='export' width='0.75em' height='0.75em' fill='%231890ff' aria-hidden='true'%3E%3Cpath d='M880 912H144c-17.7 0-32-14.3-32-32V144c0-17.7 14.3-32 32-32h360c4.4 0 8 3.6 8 8v56c0 4.4-3.6 8-8 8H184v656h656V520c0-4.4 3.6-8 8-8h56c4.4 0 8 3.6 8 8v360c0 17.7-14.3 32-32 32zM770.87 199.13l-52.2-52.2a8.01 8.01 0 014.7-13.6l179.4-21c5.1-.6 9.5 3.7 8.9 8.9l-21 179.4c-.8 6.6-8.9 9.4-13.6 4.7l-52.4-52.4-256.2 256.2a8.03 8.03 0 01-11.3 0l-42.4-42.4a8.03 8.03 0 010-11.3l256.1-256.3z'%3E%3C/path%3E%3C/svg%3E");
        }
    }
`
