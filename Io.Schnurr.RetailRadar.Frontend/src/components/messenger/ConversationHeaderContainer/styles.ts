import { Button, ConversationHeader } from "@chatscope/chat-ui-kit-react"
import styled from "styled-components"

export const StyledButton = styled(Button)`
    font-size: ${p => p.theme.font.size.small};
`

export const StyledConversationHeader = styled(ConversationHeader)`
    .cs-conversation-header__avatar {
        width: 48px;
        height: 48px;
        margin-right: 1.5em;
    }

    .cs-avatar,
    .cs-avatar--md {
        height: 48px !important;
        min-height: 48px !important;
        width: 48px !important;
        min-width: 48px !important;
    }
`
