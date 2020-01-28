import { Middleware } from '@nuxt/types'
import Cookie from '~/utils/cookie'

const protectedRoutes = [
    '/',
    '/login',
    '/register'
]
const REDIRECT_ROUTE = '/'

const AuthMiddleware: Middleware = ({ redirect, route, req }) => {
    var token = Cookie.extractTokenFromCookies(req.headers.cookie)
    if (!protectedRoutes.includes(route.path)) {
        if (!token) {
            redirect(REDIRECT_ROUTE)
        }
    }
}

export default AuthMiddleware
