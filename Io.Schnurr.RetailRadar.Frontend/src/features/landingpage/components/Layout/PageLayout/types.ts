export interface PageLayoutProps {
    children: React.ReactNode
    headerContent: { imageSource: string; buttonLabel: string; buttonUrl: string }
    footerContent: {
        imageSource: string
        instagramLink: string
        tiktokLink: string
        links: [{ label: string; url: string }]
    }
}
