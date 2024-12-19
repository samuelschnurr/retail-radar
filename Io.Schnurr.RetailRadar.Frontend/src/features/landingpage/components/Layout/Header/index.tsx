import Button from "@features/landingpage/components/Common/Button"
import Image from "@features/landingpage/components/Common/Image"
import CenteredContainer from "@features/landingpage/components/Layout/CenteredContainer"
import i18n from "i18next"
import { useNavigate } from "react-router-dom"

import TextButton from "../../Common/TextButton"
import { HeaderSection, StyledRow, StyledTextButtonContainer } from "./styles"
import { HeaderProps } from "./types"

const Header = (props: HeaderProps) => {
    const { imageSource, buttonUrl, buttonLabel } = props
    const navigate = useNavigate()

    const changeLanguage = (language: string) => {
        i18n.changeLanguage(language)
    }

    return (
        <HeaderSection id="header">
            <CenteredContainer>
                <StyledRow justify="space-between">
                    <Image src={imageSource} width="160px" height="128px" href="/" />
                    <StyledTextButtonContainer>
                        <TextButton onClick={() => changeLanguage("de")}>DE</TextButton>
                        <div>|</div>
                        <TextButton onClick={() => changeLanguage("en")}>EN</TextButton>
                    </StyledTextButtonContainer>
                    <Button onClick={() => navigate(buttonUrl)}>{buttonLabel}</Button>
                </StyledRow>
            </CenteredContainer>
        </HeaderSection>
    )
}

export default Header
