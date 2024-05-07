import { ImageContainer } from "./styles"
import { ImageProps } from "./types"

const Image = (props: ImageProps) => {
    const { src, width, height, href, shrinkOnMobile, applyStyling } = props

    return (
        <ImageContainer
            to={href ?? ""}
            $shrinkOnMobile={shrinkOnMobile}
            $applyStyling={applyStyling}>
            <img src={`/images${src}`} alt={src} width={width} height={height} />
        </ImageContainer>
    )
}

export default Image
