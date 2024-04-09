import axios, { AxiosInstance } from "axios"

import { addErrorConversationMessage } from "../states/chatConversation"

const apiClient: AxiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL
})

apiClient.interceptors.response.use(
    response => response,
    () => addErrorConversationMessage()
)

export default apiClient
