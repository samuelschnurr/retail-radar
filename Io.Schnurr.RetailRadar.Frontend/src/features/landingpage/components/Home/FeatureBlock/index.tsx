import CenteredSection from "@features/landingpage/components/Common/CenteredSection"
import ContentListing from "@features/landingpage/components/Common/ContentListing"
import Content from "@features/landingpage/components/Common/ContentParagraph"
import Image from "@features/landingpage/components/Common/Image"
import { Slide } from "react-awesome-reveal"

import { StyledTwoColumnContainer } from "./styles"
import { FeatureBlockProps } from "./types"

const FeatureBlock = (props: FeatureBlockProps) => {
    const { content } = props

    return (
        <CenteredSection centerContentOnDesktop={true} centerContentOnMobile={true}>
            <Slide direction="left" triggerOnce>
                <h6>{content.title}</h6>
                <StyledTwoColumnContainer
                    flexDirection="row-reverse"
                    firstColContent={
                        <>
                            <Content content={content.subtitle} />
                            <ContentListing listings={content.listings} />
                        </>
                    }
                    secondColContent={
                        <Image
                            src={content.imageSource}
                            width="100%"
                            height="100%"
                            shrinkOnMobile={true}
                        />
                    }
                />
            </Slide>
        </CenteredSection>
    )
}

export default FeatureBlock
