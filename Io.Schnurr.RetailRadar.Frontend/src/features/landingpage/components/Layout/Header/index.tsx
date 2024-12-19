import Button from "@features/landingpage/components/Common/Button"
import Image from "@features/landingpage/components/Common/Image"
import CenteredContainer from "@features/landingpage/components/Layout/CenteredContainer"
import { useHookstate } from "@hookstate/core"
import i18n from "i18next"
import { useNavigate } from "react-router-dom"

import TextButton from "../../Common/TextButton"
import { HeaderSection, StyledRow, StyledTextButtonContainer } from "./styles"
import { HeaderProps } from "./types"

const Header = ({ imageSource, buttonUrl, buttonLabel }: HeaderProps) => {
    const navigate = useNavigate()
    const i18nLanguage = useHookstate(i18n.language)

    const changeLanguage = (language: string) => {
        i18n.changeLanguage(language)
        i18nLanguage.set(language)
    }

    const isLanguageActive = (language: string) => {
        return i18nLanguage.get() === language
    }

    return (
        <HeaderSection id="header">
            <CenteredContainer>
                <StyledRow justify="space-between">
                    <Image src={imageSource} width="160px" height="128px" href="/" />
                    <StyledTextButtonContainer>
                        <TextButton
                            isActive={isLanguageActive("de")}
                            onClick={() => changeLanguage("de")}>
                            DE
                        </TextButton>
                        <div>|</div>
                        <TextButton
                            isActive={isLanguageActive("en")}
                            onClick={() => changeLanguage("en")}>
                            EN
                        </TextButton>
                    </StyledTextButtonContainer>
                    <Button onClick={() => navigate(buttonUrl)}>{buttonLabel}</Button>
                </StyledRow>
            </CenteredContainer>
        </HeaderSection>
    )
}

export default Header
