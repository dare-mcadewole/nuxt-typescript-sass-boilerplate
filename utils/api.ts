import Axios, { AxiosInstance } from 'axios'

let $api: AxiosInstance = Axios.create({
    baseURL: process.env.BASE_URL,
    timeout: 10000
})

export default $api
