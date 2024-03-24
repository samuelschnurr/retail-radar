import "./index.css"
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css"

import React from "react"
import ReactDOM from "react-dom/client"

import Chat from "./chat"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
    <React.StrictMode>
        <Chat />
    </React.StrictMode>
)
