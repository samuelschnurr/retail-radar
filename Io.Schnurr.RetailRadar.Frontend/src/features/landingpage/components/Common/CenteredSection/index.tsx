import { StyledSection } from "./styles"
import { CenteredSectionProps } from "./types"

const CenteredSection = (props: CenteredSectionProps) => {
    const { id, children, centerContent = false } = props

    return (
        <StyledSection id={id || undefined} centerContent={centerContent}>
            {children}
        </StyledSection>
    )
}

export default CenteredSection
