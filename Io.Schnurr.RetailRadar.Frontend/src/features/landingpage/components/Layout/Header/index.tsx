import Button from "@features/landingpage/components/Common/Button"
import Image from "@features/landingpage/components/Common/Image"
import CenteredContainer from "@features/landingpage/components/Layout/CenteredContainer"
import { useNavigate } from "react-router-dom"

import { HeaderSection, StyledRow } from "./styles"
import { HeaderContentProps } from "./types"

const Header = (props: HeaderContentProps) => {
    const { src, button } = props
    const navigate = useNavigate()

    return (
        <HeaderSection id="header">
            <CenteredContainer>
                <StyledRow justify="space-between">
                    <Image src={src} width="160px" height="128px" href="/" />
                    {button && <Button onClick={() => navigate(button.link)}>{button.text}</Button>}
                </StyledRow>
            </CenteredContainer>
        </HeaderSection>
    )
}

export default Header
