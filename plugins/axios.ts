import Vue from 'vue'
import $axios from '~/utils/api'
import { AxiosInstance } from 'axios'

declare module 'vue/types/vue' {
    interface Vue {
        $http: AxiosInstance
    }
}

Vue.prototype.$http = $axios
