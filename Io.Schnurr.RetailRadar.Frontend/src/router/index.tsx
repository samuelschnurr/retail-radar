import { BrowserRouter, Route, Routes } from "react-router-dom"

import Home from "../pages/Home"
import Imprint from "../pages/Imprint"
import Messenger from "../pages/Messenger"
import NotFound from "../pages/NotFound"
import Privacy from "../pages/Privacy"

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/messenger" element={<Messenger />} />
            <Route path="/impressum" element={<Imprint />} />
            <Route path="/imprint" element={<Imprint />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
)

export default Router
