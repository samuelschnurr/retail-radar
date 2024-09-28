import Content from "@features/homepage/components/Common/Content"
import ContentListing from "@features/homepage/components/Common/ContentListing"
import Image from "@features/homepage/components/Common/Image"
import { Col } from "antd"
import { Slide } from "react-awesome-reveal"

import { MiddleBlockSection, StyledRow } from "./styles"
import { MiddleBlockProps } from "./types"

const MiddleBlock = (props: MiddleBlockProps) => {
    const { title, subTitle, listings, src } = props

    return (
        <MiddleBlockSection>
            <Slide direction="left" triggerOnce>
                <h6>{title}</h6>
                <StyledRow justify="center" align="middle">
                    <Col lg={14} md={16} xs={24}>
                        <Content content={subTitle} />
                        <ContentListing listings={listings} />
                    </Col>
                    <Col lg={10} md={8} xs={24}>
                        <Image src={src} width="100%" height="100%" shrinkOnMobile={true} />
                    </Col>
                </StyledRow>
            </Slide>
        </MiddleBlockSection>
    )
}

export default MiddleBlock
