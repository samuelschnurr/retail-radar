import "./index.css"
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css"

import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import { Home } from "./pages/home"
import { Messenger } from "./pages/messenger"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="messenger" element={<Messenger />} />
            </Routes>
        </BrowserRouter>{" "}
    </React.StrictMode>
)
