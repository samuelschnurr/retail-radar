import "antd/dist/antd.css"
// Import this way to not be treeshaked
import "@lib/i18n/i18nConfig"

import { resetConversation } from "@features/messenger/states/conversation"
import { resetThread } from "@features/messenger/states/thread"
import i18next from "i18next"
import ReactDOM from "react-dom/client"
import { ThemeProvider } from "styled-components"

import Router from "./router"
import GlobalStyles from "./styles/globalStyles"
import LightTheme from "./styles/lightTheme"

const App = () => {
    return (
        <ThemeProvider theme={LightTheme}>
            <GlobalStyles />
            <Router />
        </ThemeProvider>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

const renderRoot = () => {
    root.render(<App />)
}

const handleLanguageChanged = () => {
    resetThread()
    resetConversation()
    renderRoot()
}

i18next.on("languageChanged", handleLanguageChanged)

renderRoot()
