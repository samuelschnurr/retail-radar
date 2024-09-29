import Content from "@features/homepage/components/Common/Content"
import Image from "@features/homepage/components/Common/Image"
import { Fade } from "react-awesome-reveal"

import CenteredSection from "../Common/CenteredSection"
import TwoColumnRow from "../Layout/TwoColumnRow"
import { IntroBlockProps } from "./types"

const IntroBlock = (props: IntroBlockProps) => {
    const { src, title, subTitle } = props

    return (
        <CenteredSection id="intro">
            <Fade direction="right" triggerOnce>
                <TwoColumnRow
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

export default IntroBlock
