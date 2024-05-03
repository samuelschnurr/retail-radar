import { Row } from "antd"
import { useNavigate } from "react-router-dom"

import Button from "../../common/Button"
import Container from "../../common/Container"
import Logo from "../../common/Logo"
import { HeaderSection } from "./styles"
import { HeaderContentProps } from "./types"

const Header = (props: HeaderContentProps) => {
    const { button } = props
    const navigate = useNavigate()

    return (
        <HeaderSection>
            <Container>
                <Row justify="space-between">
                    <Logo src="logo.png" width="101px" height="64px" href="/" />
                    {button && <Button onClick={() => navigate("/messenger")}>{button}</Button>}
                </Row>
            </Container>
        </HeaderSection>
    )
}

export default Header
