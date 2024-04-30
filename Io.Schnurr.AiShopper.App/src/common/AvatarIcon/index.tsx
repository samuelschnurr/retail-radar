import { Avatar } from "@chatscope/chat-ui-kit-react"

import { AvatarIconProps } from "./types"

export const AvatarIcon = ({ src, info, status }: AvatarIconProps) => (
    <Avatar name={info} src={`/images/avatar/${src}`} status={status} />
)
