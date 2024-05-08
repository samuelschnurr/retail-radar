import { BrowserRouter, Route, Routes } from "react-router-dom"

import Homepage from "../pages/homepage"
import Imprint from "../pages/imprint"
import Messenger from "../pages/messenger"
import Privacy from "../pages/privacy"

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="messenger" element={<Messenger />} />
            <Route path="impressum" element={<Imprint />} />
            <Route path="datenschutz" element={<Privacy />} />
        </Routes>
    </BrowserRouter>
)

export default Router
