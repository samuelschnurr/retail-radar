import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css"
import "antd/dist/antd.css"

import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import { Styles } from "./index.ts"
import { Home } from "./pages/home"
import { Messenger } from "./pages/messenger"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

root.render(
    <BrowserRouter>
        <Styles />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="messenger" element={<Messenger />} />
        </Routes>
    </BrowserRouter>
)
