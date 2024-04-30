import { LogoProps } from "./types"

export const Logo = ({ src, width, height }: LogoProps) => (
    <img src={`/images/logo/${src}`} alt={src} width={width} height={height} />
)
