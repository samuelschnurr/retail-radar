import { BrowserRouter, Route, Routes } from "react-router-dom"

import Homepage from "../pages/homepage"
import Imprint from "../pages/imprint"
import Messenger from "../pages/messenger"
import NotFound from "../pages/notFound"
import Privacy from "../pages/privacy"

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
