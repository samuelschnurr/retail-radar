import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css"
import "antd/dist/antd.css"

import ReactDOM from "react-dom/client"
import { ThemeProvider } from "styled-components"

import Router from "./router"
import GlobalStyles from "./styles/globalStyles"
import LightTheme from "./styles/lightTheme"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

root.render(
    <ThemeProvider theme={LightTheme}>
        <GlobalStyles />
        <Router />
    </ThemeProvider>
)
