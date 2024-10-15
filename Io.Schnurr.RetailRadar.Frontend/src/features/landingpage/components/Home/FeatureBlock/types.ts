export interface FeatureBlockProps {
    title: string
    subTitle: string
    listings: Listing[]
    src: string
}

interface Listing {
    title: string
    items: string[]
}
