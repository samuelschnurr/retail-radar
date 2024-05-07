import { ImageContainer } from "./styles"
import { ImageProps } from "./types"

const Image = (props: ImageProps) => {
    const { src, width, height, href } = props

    return (
        <ImageContainer to={href ?? ""}>
            <img src={src} alt={src} width={width} height={height} />
        </ImageContainer>
    )
}

export default Image
