import Content from "@features/homepage/components/Common/Content"
import ContentListing from "@features/homepage/components/Common/ContentListing"
import Image from "@features/homepage/components/Common/Image"
import { Slide } from "react-awesome-reveal"

import CenteredSection from "../Common/CenteredSection"
import { StyledTwoColumnRow } from "./styles"
import { MiddleBlockProps } from "./types"

const MiddleBlock = (props: MiddleBlockProps) => {
    const { title, subTitle, listings, src } = props

    return (
        <CenteredSection centerContent={true}>
            <Slide direction="left" triggerOnce>
                <h6>{title}</h6>
                <StyledTwoColumnRow
                    firstColContent={
                        <>
                            <Content content={subTitle} />
                            <ContentListing listings={listings} />
                        </>
                    }
                    secondColContent={
                        <Image src={src} width="100%" height="100%" shrinkOnMobile={true} />
                    }
                />
            </Slide>
        </CenteredSection>
    )
}

export default MiddleBlock
