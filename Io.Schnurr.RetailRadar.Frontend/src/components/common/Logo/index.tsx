import { LogoContainer } from "./styles"
import { LogoProps } from "./types"

const Logo = (props: LogoProps) => {
    const { src, width, height, href } = props

    return (
        <LogoContainer to={href ?? ""}>
            <img src={src} alt={src} width={width} height={height} />
        </LogoContainer>
    )
}

export default Logo
