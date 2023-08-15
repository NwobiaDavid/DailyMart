import axios from 'axios'

// 5001
const apiClient = axios.create({
    baseURL: process.env.NODE_ENV === 'development' ? 'http://localhost:3000/' : '/',
    headers:{
        'Content-Type' : 'application/json'
    }
})

export default apiClient;