import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'

// Import all modules
import base from '~/store/base'
import bucket from '~/store/bucket'
import snippet from '~/store/snippet'

let baseStore: base
let snippetStore: snippet
let bucketStore: bucket

let initializeStores = (store: Store<any>): void => {
    baseStore = getModule(base, store)
    snippetStore = getModule(snippet, store)
    bucketStore = getModule(bucket, store)
}

export {
    initializeStores,
    baseStore,
    snippetStore,
    bucketStore
}
