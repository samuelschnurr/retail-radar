export interface PageLayoutProps {
    children: React.ReactNode
    headerContent: { logoSource: string; buttonText: string; buttonLink: string }
    footerContent: { logoSource: string; links: [{ label: string; url: string }] }
}
