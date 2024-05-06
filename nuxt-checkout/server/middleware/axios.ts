import axios from "axios";

export default defineEventHandler(() => {
    axios.defaults.baseURL = process.env.VITE_API_URL
})