import Button from "@features/homepage/components/Common/Button"
import Content from "@features/homepage/components/Common/ContentParagraph"
import Image from "@features/homepage/components/Common/Image"
import { Slide } from "react-awesome-reveal"

import CenteredSection from "../Common/CenteredSection"
import TwoColumnRow from "../Layout/TwoColumnContainer"
import { StyledImageContainer } from "./styles"
import { DonationBlockProps } from "./types"

const DonationBlock = (props: DonationBlockProps) => {
    const { title, subTitle, subTitle2, src } = props
    return (
        <CenteredSection centerContent={true}>
            <Slide direction="right" triggerOnce>
                <h6>{title}</h6>
                <TwoColumnRow
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
