import Button from "@features/landingpage/components/Common/Button"
import CenteredSection from "@features/landingpage/components/Common/CenteredSection"
import Content from "@features/landingpage/components/Common/ContentParagraph"
import Image from "@features/landingpage/components/Common/Image"
import TwoColumnContainer from "@features/landingpage/components/Layout/TwoColumnContainer"
import { Slide } from "react-awesome-reveal"

import { StyledImageContainer } from "./styles"
import { DonationBlockProps } from "./types"

const DonationBlock = (props: DonationBlockProps) => {
    const { title, subTitle, subTitle2, src } = props
    return (
        <CenteredSection centerContentOnDesktop={true} centerContentOnMobile={true}>
            <Slide direction="right" triggerOnce>
                <h6>{title}</h6>
                <TwoColumnContainer
                    firstColContent={
                        <>
                            <Content content={subTitle} />
                            <Content content={subTitle2} />
                            <Content
                                content={
                                    <Button
                                        onClick={() => {
                                            window.open("https://ko-fi.com/sampa", "_blank")
                                        }}>
                                        <StyledImageContainer>
                                            <Image
                                                height="40px"
                                                width="60px"
                                                src="/button/kofi.png"
                                            />
                                            Mit einem Kaffee unterstützen
                                        </StyledImageContainer>
                                    </Button>
                                }
                            />
                        </>
                    }
                    secondColContent={
                        <Content
                            content={
                                <Image src={src} width="100%" height="100%" shrinkOnMobile={true} />
                            }
                        />
                    }
                />
            </Slide>
        </CenteredSection>
    )
}

export default DonationBlock
