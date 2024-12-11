import DonationDE from "@features/landingpage/locales/de/Donation.json"
import FeatureDE from "@features/landingpage/locales/de/Feature.json"
import FooterDE from "@features/landingpage/locales/de/Footer.json"
import HeaderDE from "@features/landingpage/locales/de/Header.json"
import ImprintDE from "@features/landingpage/locales/de/Imprint.json"
import NotFoundDE from "@features/landingpage/locales/de/NotFound.json"
import PrivacyDE from "@features/landingpage/locales/de/Privacy.json"
import WelcomeDE from "@features/landingpage/locales/de/Welcome.json"
import DonationEN from "@features/landingpage/locales/en/Donation.json"
import FeatureEN from "@features/landingpage/locales/en/Feature.json"
import FooterEN from "@features/landingpage/locales/en/Footer.json"
import HeaderEN from "@features/landingpage/locales/en/Header.json"
import ImprintEN from "@features/landingpage/locales/en/Imprint.json"
import NotFoundEN from "@features/landingpage/locales/en/NotFound.json"
import PrivacyEN from "@features/landingpage/locales/en/Privacy.json"
import WelcomeEN from "@features/landingpage/locales/en/Welcome.json"
import AvatarDE from "@features/messenger/locales/de/Avatar.json"
import messagesDE from "@features/messenger/locales/de/Messages.json"
import ToolbarDE from "@features/messenger/locales/de/Toolbar.json"
import AvatarEN from "@features/messenger/locales/en/Avatar.json"
import messagesEN from "@features/messenger/locales/en/Messages.json"
import ToolbarEN from "@features/messenger/locales/en/Toolbar.json"

export const landingpageResources = {
    en: {
        imprint: ImprintEN,
        privacy: PrivacyEN,
        header: HeaderEN,
        notfound: NotFoundEN,
        welcome: WelcomeEN,
        feature: FeatureEN,
        donation: DonationEN,
        footer: FooterEN
    },
    de: {
        imprint: ImprintDE,
        privacy: PrivacyDE,
        header: HeaderDE,
        notfound: NotFoundDE,
        welcome: WelcomeDE,
        feature: FeatureDE,
        donation: DonationDE,
        footer: FooterDE
    }
}

export const messengerResources = {
    en: {
        avatar: AvatarEN,
        messages: messagesEN,
        toolbar: ToolbarEN
    },
    de: {
        avatar: AvatarDE,
        messages: messagesDE,
        toolbar: ToolbarDE
    }
}
