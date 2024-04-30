import { UpOutlined } from "@ant-design/icons"
import { useCallback, useEffect, useState } from "react"
import { useTheme } from "styled-components"

import { ScrollUpContainer } from "./styles"

const ScrollToTop = () => {
    const theme = useTheme()
    const [showScroll, setShowScroll] = useState(false)

    const checkScrollTop = useCallback(() => {
        const offsetFromTop = window.scrollY

        if (!showScroll && offsetFromTop > 350) {
            setShowScroll(true)
        } else if (offsetFromTop <= 350) {
            setShowScroll(false)
        }
    }, [showScroll])

    useEffect(() => {
        window.addEventListener("scroll", checkScrollTop)
        return () => {
            window.removeEventListener("scroll", checkScrollTop)
        }
    }, [checkScrollTop])

    const scrollUp = () => {
        const element = document.getElementById("intro") as HTMLDivElement
        element.scrollIntoView({
            behavior: "smooth",
            block: "end",
            inline: "nearest"
        })
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
