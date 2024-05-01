import { Row } from "antd"
import { useNavigate } from "react-router-dom"

import Button from "../../../common/Button"
import Container from "../../../common/Container"
import Logo from "../../../common/Logo"
import { HeaderSection, LogoContainer } from "./styles"
import { HeaderContentProps } from "./types"

const Header = (props: HeaderContentProps) => {
    const { button } = props
    const navigate = useNavigate()

    return (
        <HeaderSection>
            <Container>
                <Row justify="space-between">
                    <LogoContainer to="/" aria-label="homepage">
                        <Logo src="logo.png" width="101px" height="64px" />
                    </LogoContainer>
                    {button && <Button onClick={() => navigate("/messenger")}>{button}</Button>}
                </Row>
            </Container>
        </HeaderSection>
    )
}

export default Header
