import { StyledChatContainer } from "./styles"

interface MainLayoutProps {
    children: React.ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return <StyledChatContainer>{children}</StyledChatContainer>
}

export default MainLayout
