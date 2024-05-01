import { Row } from "antd"

import { Button } from "../../../common/Button"
import Container from "../../../common/Container"
import { Logo } from "../../../common/Logo"
import { HeaderSection, LogoContainer, Span } from "./styles"

const Header = () => {
    const MenuItem = () => {
        return (
            <Span>
                <Button>Jetzt starten</Button>
            </Span>
        )
    }

    return (
        <HeaderSection>
            <Container>
                <Row justify="space-between">
                    <LogoContainer to="/" aria-label="homepage">
                        <Logo src="logo.png" width="101px" height="64px" />
                    </LogoContainer>
                    <MenuItem />
                </Row>
            </Container>
        </HeaderSection>
    )
}

export default Header
