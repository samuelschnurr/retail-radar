import { StyledChatContainer } from "./styles"

interface MessengerLayoutProps {
    children: React.ReactNode
}

const MessengerLayout: React.FC<MessengerLayoutProps> = ({ children }) => {
    return <StyledChatContainer>{children}</StyledChatContainer>
}

export default MessengerLayout
