import { BrowserRouter, Route, Routes } from "react-router-dom"

import Homepage from "../pages/Homepage"
import Imprint from "../pages/Imprint"
import Messenger from "../pages/Messenger"
import NotFound from "../pages/NotFound"
import Privacy from "../pages/Privacy"

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/messenger" element={<Messenger />} />
            <Route path="/impressum" element={<Imprint />} />
            <Route path="/datenschutz" element={<Privacy />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
)

export default Router
