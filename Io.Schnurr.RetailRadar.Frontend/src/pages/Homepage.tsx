import ScrollToTop from "@features/homepage/components/Common/ScrollToTop"
import EndBlock from "@features/homepage/components/EndBlock"
import IntroBlock from "@features/homepage/components/IntroBlock"
import PageLayout from "@features/homepage/components/Layout/PageLayout"
import MiddleBlock from "@features/homepage/components/MiddleBlock"
import EndBlockContent from "@features/homepage/locales/EndBlockContent.json"
import IntroBlockContent from "@features/homepage/locales/IntroBlockContent.json"
import MiddleBlockContent from "@features/homepage/locales/MiddleBlockContent.json"

const Homepage = () => {
    return (
        <PageLayout>
            <ScrollToTop />
            <IntroBlock
                title={IntroBlockContent.title}
                subTitle={IntroBlockContent.subTitle}
                src={IntroBlockContent.src}
            />
            <MiddleBlock
                title={MiddleBlockContent.title}
                subTitle={MiddleBlockContent.subTitle}
                listings={MiddleBlockContent.listings}
                src={MiddleBlockContent.src}
            />
            <EndBlock
                title={EndBlockContent.title}
                subTitle={EndBlockContent.subTitle}
                subTitle2={EndBlockContent.subTitle2}
                button={EndBlockContent.button}
                src={EndBlockContent.src}
            />
        </PageLayout>
    )
}

export default Homepage
