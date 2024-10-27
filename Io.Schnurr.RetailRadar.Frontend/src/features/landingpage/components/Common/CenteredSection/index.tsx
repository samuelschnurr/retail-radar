import { StyledSection } from "./styles"
import { CenteredSectionProps } from "./types"

const CenteredSection = (props: CenteredSectionProps) => {
    const { id, children, centerContentOnDesktop = false, centerContentOnMobile = false } = props

    return (
        <StyledSection
            id={id || undefined}
            centerContentOnDesktop={centerContentOnDesktop}
            centerContentOnMobile={centerContentOnMobile}>
            {children}
        </StyledSection>
    )
}

export default CenteredSection
