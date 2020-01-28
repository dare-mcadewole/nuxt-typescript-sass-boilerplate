import Cookies from 'js-cookie'

const _setOrRemoveCookieData = (key: string, value: string | undefined) => {
    if (value !== undefined) {
        Cookies.set(key, value, {
            // secure: true
            sameSite: 'strict'
        })
        return
    }
    Cookies.remove(key)
}

export default class Cookie {

    /**
     * 
     * @param cookies  {(string | undefined)}
     * @returns {(string | null)}
     * 
     * Extract cookies from header cookies
     */
    static extractTokenFromCookies (cookies: string | undefined): string | null {
        cookies = cookies === undefined? '' : cookies
        var token = cookies.match(/user_session_token=([a-z0-9=]+)[;\n]*/i)
        return token && token.length > 1 ? token[1] : null
    }

    /**
     *
     *
     * @static
     * @memberof Cookie
     * 
     * Sets user in browser cookies
     */
    static set user (user: string | undefined) {
        _setOrRemoveCookieData('dotcom_user', user)
    }

    /**
     *
     *
     * @static
     * @type {(string | undefined)}
     * @memberof Cookie
     * 
     * Get user data from cookies
     */
    static get user (): string | undefined  {
        return Cookies.get('dotcom_user')
    }

    /**
     *
     *
     * @static
     * @memberof Cookie
     * 
     * Set user session token
     */
    static set token (token: string | undefined) {
        _setOrRemoveCookieData('user_session_token', token)
    }

    /**
     *
     *
     * @static
     * @type {(string | undefined)}
     * @memberof Cookie
     * 
     * Get user session token
     */
    static get token (): string | undefined {
        return Cookies.get('user_session_token')
    }

    /**
     *
     *
     * @static
     * @memberof Cookie
     * 
     * Set user's preffered language for the site
     */
    static set lang (lang: string | undefined) {
        _setOrRemoveCookieData('site_lang', lang)
    }

    /**
     *
     *
     * @readonly
     * @static
     * @type {(string | undefined)}
     * @memberof Cookie
     * 
     * Get user preferred language
     */
    static get lang (): string | undefined {
        return Cookies.get('site_lang')
    }
}
