import { Row } from "antd"
import { useNavigate } from "react-router-dom"

import Button from "../../common/Button"
import Container from "../../common/Container"
import Image from "../../common/Image"
import { HeaderSection } from "./styles"
import { HeaderContentProps } from "./types"

const Header = (props: HeaderContentProps) => {
    const { src, button } = props
    const navigate = useNavigate()

    return (
        <HeaderSection>
            <Container>
                <Row justify="space-between">
                    <Image src={src} width="128px" height="64px" href="/" />
                    {button && <Button onClick={() => navigate(button.link)}>{button.text}</Button>}
                </Row>
            </Container>
        </HeaderSection>
    )
}

export default Header
