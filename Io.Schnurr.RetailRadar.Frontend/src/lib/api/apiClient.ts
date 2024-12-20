import { addErrorConversationMessage } from "@features/messenger/states/conversation"
import axios, { AxiosInstance } from "axios"
import i18next from "i18next"
import i18n from "i18next"

const apiClient: AxiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL
})

apiClient.interceptors.request.use(
    config => {
        const currentLanguage = i18next.language
        config.headers["Accept-Language"] = currentLanguage
        return config
    },
    error => {
        console.log(error)
        return Promise.reject(error)
    }
)

apiClient.interceptors.response.use(
    response => response,
    () => addErrorConversationMessage(i18n.t("messages:errorMessage"))
)

export default apiClient
