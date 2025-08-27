import axios from "axios"

export const axiosClient = axios.create({
    baseURL: ['http://localhost:4000', 'https://portfolio-backend-gi67.vercel.app'],
    headers: {
        "Content-Type": "application/json"
    },
    withCredentials: true
})