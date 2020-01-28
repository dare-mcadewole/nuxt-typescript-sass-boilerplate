import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'

// Import all modules
import BaseStore from '~/store/base'
import UserStore from '~/store/user'
import Cookie from './cookie'

let baseStore: BaseStore
let userStore: UserStore

const initStoreData = (): void => {
    // Initialize store data with language, user name and token
    if (Cookie.lang === undefined) {
        Cookie.lang = baseStore.locale
    }
    console.log('Initializing site language in store ...', Cookie.lang)
    // @ts-ignore
    baseStore.setLocale(Cookie.lang || baseStore.fallbackLocale)
    console.log('Initializing username and token in store ...', Cookie.user, Cookie.token)
    userStore.setUsernameAndToken({
        user: Cookie.user,
        token: Cookie.token
    })
}

let initializeStores = (store: Store<any>): void => {
    baseStore = getModule(BaseStore, store)
    userStore = getModule(UserStore, store)
    // initStoreData()
}

export {
    initializeStores,
    initStoreData,
    baseStore,
    userStore
}
