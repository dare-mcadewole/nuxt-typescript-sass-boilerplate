import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import Cookies from 'js-cookie'

@Module({
    name: 'BaseStore',
    namespaced: false,
    stateFactory: true
})
export default class BaseStore extends VuexModule {
    _app: string = 'NTS-Boilerplate'
    _locales: Array<string> = [
        'en', 'fr'
    ]
    _locale: string = 'en'
    _fallback_locale: string = 'en'

    get app (): string {
        return this._app
    }

    get locale (): string {
        return this._locale
    }

    get fallbackLocale (): string {
        return this._fallback_locale
    }

    @Mutation
    SET_LOCALE (locale: string) {
        this._locale = locale
    }

    @Action({
        commit: 'SET_LOCALE'
    })
    setLocale (locale: string) {
        Cookies.set('lang', locale)
        return locale
    }
}
