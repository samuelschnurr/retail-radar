import { StyledContentParagraph } from "./styles"
import { ContentParagraphProps } from "./types"

const ContentParagraph = (props: ContentParagraphProps) => {
    const { content } = props

    return <StyledContentParagraph>{content}</StyledContentParagraph>
}

export default ContentParagraph
