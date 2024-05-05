import axios from "axios";

export default defineEventHandler(() => {
    axios.defaults.baseURL = process.env.API_URL
})