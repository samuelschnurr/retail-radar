import Button from "@features/landingpage/components/Common/Button"
import Image from "@features/landingpage/components/Common/Image"
import CenteredContainer from "@features/landingpage/components/Layout/CenteredContainer"
import { useNavigate } from "react-router-dom"

import { HeaderSection, StyledRow } from "./styles"
import { HeaderProps } from "./types"

const Header = (props: HeaderProps) => {
    const { logoSource, buttonLink, buttonText } = props
    const navigate = useNavigate()

    return (
        <HeaderSection id="header">
            <CenteredContainer>
                <StyledRow justify="space-between">
                    <Image src={logoSource} width="160px" height="128px" href="/" />
                    <Button onClick={() => navigate(buttonLink)}>{buttonText}</Button>
                </StyledRow>
            </CenteredContainer>
        </HeaderSection>
    )
}

export default Header
