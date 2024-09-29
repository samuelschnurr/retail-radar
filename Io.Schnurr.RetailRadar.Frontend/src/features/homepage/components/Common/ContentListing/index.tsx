import { StyledContentListing } from "./styles"
import { ContentListingProps } from "./types"

const ContentListing = (props: ContentListingProps) => {
    const { listings } = props

    return (
        <>
            {listings.map((listing, listingIndex) => {
                return (
                    <StyledContentListing key={listingIndex}>
                        <b>✓ {listing.title}</b>
                        {listing.items.map((item, itemIndex) => {
                            return <li key={itemIndex}>{item}</li>
                        })}
                    </StyledContentListing>
                )
            })}
        </>
    )
}

export default ContentListing
