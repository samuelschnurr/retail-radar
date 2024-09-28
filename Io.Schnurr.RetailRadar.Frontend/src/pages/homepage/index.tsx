import EndBlock from "@features/homepage/components/Common/EndBlock"
import IntroBlock from "@features/homepage/components/Common/IntroBlock"
import MiddleBlock from "@features/homepage/components/Common/MiddleBlock"
import ScrollToTop from "@features/homepage/components/Common/ScrollToTop"
import MainLayout from "@features/homepage/components/Layout/MainLayout"
import EndBlockContent from "@features/homepage/locales/EndBlockContent.json"
import IntroBlockContent from "@features/homepage/locales/IntroBlockContent.json"
import MiddleBlockContent from "@features/homepage/locales/MiddleBlockContent.json"

const Homepage = () => {
    return (
        <MainLayout>
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
        </MainLayout>
    )
}

export default Homepage
