import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'

@Module({
    name: 'base',
    namespaced: false,
    stateFactory: true
})
export default class Base extends VuexModule {
    _app: string = 'Snippets'
    _locales: Array<string> = [
        'en', 'cn', 'fr'
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
        return locale
    }
}
