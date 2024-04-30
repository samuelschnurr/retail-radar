import { Avatar, AvatarProps } from "@chatscope/chat-ui-kit-react"

export interface AvatarIconProps extends AvatarProps {
    info: string
    as?: string | typeof Avatar
}
