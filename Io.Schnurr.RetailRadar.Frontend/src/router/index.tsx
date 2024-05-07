import { BrowserRouter, Route, Routes } from "react-router-dom"

import Homepage from "../pages/homepage"
import Messenger from "../pages/messenger"

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="messenger" element={<Messenger />} />
        </Routes>
    </BrowserRouter>
)

export default Router
