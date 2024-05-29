import { useNavigate } from "react-router-dom"

import Button from "../../common/Button"
import Container from "../../common/Container"
import Image from "../../common/Image"
import { HeaderSection, StyledRow } from "./styles"
import { HeaderContentProps } from "./types"

const Header = (props: HeaderContentProps) => {
    const { src, button } = props
    const navigate = useNavigate()

    return (
        <HeaderSection>
            <Container>
                <StyledRow justify="space-between">
                    <Image src={src} width="160px" height="128px" href="/" />
                    {button && <Button onClick={() => navigate(button.link)}>{button.text}</Button>}
                </StyledRow>
            </Container>
        </HeaderSection>
    )
}

export default Header
