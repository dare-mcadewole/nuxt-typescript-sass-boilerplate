import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'

// Import all modules
import BaseStore from '~/store/base'
import UserStore from '~/store/user'

let baseStore: BaseStore
let userStore: UserStore

let initializeStores = (store: Store<any>): void => {
    baseStore = getModule(BaseStore, store)
    userStore = getModule(UserStore, store)
}

export {
    initializeStores,
    baseStore,
    userStore
}
