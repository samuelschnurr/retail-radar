import axios, { AxiosInstance } from "axios"

const apiClient: AxiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL
})

export default apiClient
