import Axios, { AxiosInstance } from 'axios'

let $axios: AxiosInstance = Axios.create({
    baseURL: process.env.BASE_URL,
    timeout: 10000
})

export default $axios
