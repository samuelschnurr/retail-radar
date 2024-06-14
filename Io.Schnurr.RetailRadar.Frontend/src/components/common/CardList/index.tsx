import { Fade } from "react-awesome-reveal"

import { StyledCard, StyledCardList } from "./styles"
import { CardListProps } from "./types"

const CardList = (props: CardListProps) => {
    const { cardContents, onClick } = props

    return (
        <StyledCardList>
            <Fade cascade damping={0.75}>
                {cardContents.map((c, index) => (
                    <StyledCard key={index} onClick={() => onClick(c)}>
                        {c}
                    </StyledCard>
                ))}
            </Fade>
        </StyledCardList>
    )
}

export default CardList
