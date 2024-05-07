import { ImageContainer } from "./styles"
import { ImageProps } from "./types"

const Image = (props: ImageProps) => {
    const { src, width, height, href, centerOnMobile } = props

    return (
        <ImageContainer to={href ?? ""} $centerOnMobile={centerOnMobile}>
            <img src={`/images${src}`} alt={src} width={width} height={height} />
        </ImageContainer>
    )
}

export default Image
