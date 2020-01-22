import { Module, VuexModule } from 'vuex-module-decorators'

@Module({
    name: 'base',
    namespaced: false,
    stateFactory: true
})
export default class Base extends VuexModule {
    _app: string = 'Snippets'

    get app (): string {
        return this._app
    }
}
