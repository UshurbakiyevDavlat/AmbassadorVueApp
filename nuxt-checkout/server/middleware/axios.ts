import axios from "axios";

export default defineEventHandler(() => {
    axios.defaults.baseURL = 'http://localhost:8000/api/checkout'
})