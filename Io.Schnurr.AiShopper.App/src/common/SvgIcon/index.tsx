import { SvgIconProps } from "../types"

export const SvgIcon = ({ src, width, height }: SvgIconProps) => (
    <img src={`/images/svg/${src}`} alt={src} width={width} height={height} />
)
