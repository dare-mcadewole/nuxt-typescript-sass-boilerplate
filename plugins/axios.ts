import Vue from 'vue'
import $api from '~/utils/api'
import { AxiosInstance } from 'axios'

declare module 'vue/types/vue' {
    interface Vue {
        $http: AxiosInstance
    }
}

Vue.prototype.$http = $api
