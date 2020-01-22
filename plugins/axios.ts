import Vue from 'vue'
import Axios, { AxiosInstance } from 'axios'

var axios: AxiosInstance = Axios.create({
    baseURL: process.env.BASE_URL,
    timeout: 10000
})

Vue.prototype.$http = axios
