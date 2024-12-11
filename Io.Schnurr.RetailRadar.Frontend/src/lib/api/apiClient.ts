import { addErrorConversationMessage } from "@features/messenger/states/conversation"
import axios, { AxiosInstance } from "axios"
import i18n from "i18next"

const apiClient: AxiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL
})

apiClient.interceptors.response.use(
    response => response,
    () => addErrorConversationMessage(i18n.t("messages:errorMessage"))
)

export default apiClient
