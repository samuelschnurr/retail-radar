import CenteredSection from "@features/landingpage/components/Common/CenteredSection"
import Content from "@features/landingpage/components/Common/ContentParagraph"
import Image from "@features/landingpage/components/Common/Image"
import TwoColumnContainer from "@features/landingpage/components/Layout/TwoColumnContainer"
import { Fade } from "react-awesome-reveal"

import { WelcomeBlockProps } from "./types"

const WelcomeBlock = (props: WelcomeBlockProps) => {
    const { src, title, subTitle } = props

    return (
        <CenteredSection id="welcome">
            <Fade direction="right" triggerOnce>
                <TwoColumnContainer
                    firstColContent={
                        <>
                            <h6>{title}</h6>
                            <Content content={subTitle} />
                        </>
                    }
                    secondColContent={
                        <Image src={src} width="100%" height="100%" shrinkOnMobile={true} />
                    }
                />
            </Fade>
        </CenteredSection>
    )
}

export default WelcomeBlock
