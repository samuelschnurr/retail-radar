import { StyledContent } from "./styles"
import { ContentProps } from "./types"

const Content = (props: ContentProps) => {
    const { content } = props
    return <StyledContent>{content}</StyledContent>
}

export default Content
