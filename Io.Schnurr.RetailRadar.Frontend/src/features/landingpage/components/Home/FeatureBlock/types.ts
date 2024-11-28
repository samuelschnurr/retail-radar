export interface FeatureBlockProps {
    title: string
    subTitle: string
    listings: Listing[]
    imageSource: string
}

interface Listing {
    title: string
    items: string[]
}
