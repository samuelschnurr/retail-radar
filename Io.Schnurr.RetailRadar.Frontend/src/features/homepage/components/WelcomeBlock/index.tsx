import Content from "@features/homepage/components/Common/ContentParagraph"
import Image from "@features/homepage/components/Common/Image"
import { Fade } from "react-awesome-reveal"

import CenteredSection from "../Common/CenteredSection"
import TwoColumnContainer from "../Layout/TwoColumnContainer"
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
