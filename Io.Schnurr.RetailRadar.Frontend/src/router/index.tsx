import { useTranslation } from "react-i18next"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import Home from "../pages/Home"
import Imprint from "../pages/Imprint"
import Messenger from "../pages/Messenger"
import NotFound from "../pages/NotFound"
import Privacy from "../pages/Privacy"

const Router = () => {
    const { t } = useTranslation("routes")

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path={`/${t("messenger")}`} element={<Messenger />} />
                <Route path={`/${t("imprint")}`} element={<Imprint />} />
                <Route path={`/${t("privacy")}`} element={<Privacy />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}
export default Router
