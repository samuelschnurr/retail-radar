import { LogoProps } from "./types"

const Logo = (props: LogoProps) => {
    const { src, width, height } = props

    return <img src={`/images/logo/${src}`} alt={src} width={width} height={height} />
}

export default Logo
