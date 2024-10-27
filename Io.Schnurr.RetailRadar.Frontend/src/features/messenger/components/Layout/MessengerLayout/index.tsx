import { StyledChatContainer } from "./styles"
import { MessengerLayoutProps } from "./types"

const MessengerLayout = (props: MessengerLayoutProps) => {
    const { children } = props

    return <StyledChatContainer>{children}</StyledChatContainer>
}

export default MessengerLayout
