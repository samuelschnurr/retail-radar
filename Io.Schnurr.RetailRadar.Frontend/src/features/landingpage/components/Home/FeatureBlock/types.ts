export interface FeatureBlockProps {
    content: {
        title: string
        subtitle: string
        listings: Listing[]
        imageSource: string
    }
}

interface Listing {
    title: string
    items: string[]
}
