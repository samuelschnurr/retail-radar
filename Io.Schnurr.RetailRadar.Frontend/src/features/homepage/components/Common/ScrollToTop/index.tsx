import { UpOutlined } from "@ant-design/icons"
import { useCallback, useEffect, useState } from "react"
import { useTheme } from "styled-components"

import { ScrollUpContainer } from "./styles"
import { ScrollToTopProps } from "./types"

const ScrollToTop = (props: ScrollToTopProps) => {
    const { scrollToId } = props

    const theme = useTheme()
    const [showScroll, setShowScroll] = useState(false)

    const checkScrollTop = useCallback(() => {
        setShowScroll(window.scrollY > 350)
    }, [])

    useEffect(() => {
        window.addEventListener("scroll", checkScrollTop)
        return () => {
            window.removeEventListener("scroll", checkScrollTop)
        }
    }, [checkScrollTop])

    const scrollUp = () => {
        const element = document.getElementById(scrollToId)
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "end",
                inline: "nearest"
            })
        }
    }

    return (
        <ScrollUpContainer onClick={scrollUp} show={showScroll}>
            <UpOutlined
                color={theme.colors.primaryDark}
                style={{ fontSize: theme.font.size.medium }}
            />
        </ScrollUpContainer>
    )
}

export default ScrollToTop
