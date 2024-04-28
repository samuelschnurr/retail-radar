import { BrowserRouter, Route, Routes } from "react-router-dom"

import { Home } from "../pages/home"
import { Messenger } from "../pages/messenger"

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="messenger" element={<Messenger />} />
        </Routes>
    </BrowserRouter>
)

export default Router
