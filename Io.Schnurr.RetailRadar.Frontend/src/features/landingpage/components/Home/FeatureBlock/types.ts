export interface FeatureBlockProps {
    title: string
    subtitle: string
    listings: Listing[]
    imageSource: string
}

interface Listing {
    title: string
    items: string[]
}
