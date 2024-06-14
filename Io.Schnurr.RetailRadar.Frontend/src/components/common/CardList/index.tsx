import { StyledCard, StyledCardList } from "./styles"
import { CardListProps } from "./types"

const CardList = (props: CardListProps) => {
    const { cardContents, onClick } = props

    return (
        <StyledCardList>
            {cardContents.map((c, index) => (
                <StyledCard key={index} onClick={() => onClick(c)}>
                    {c}
                </StyledCard>
            ))}
        </StyledCardList>
    )
}

export default CardList
