/*
 * File: 'bucket.ts'
 * Created by Dare Adewole II <dare.dev.adewole@gmail.com>
 * Created on Wed Jan 22 2020
 *
 * Copyright (c) 2020 Snippets Inc.
 *
 * Description:
 *      Store Module for managing Bucket(collection) of Snippets
 *       
 */
import {
    Module, VuexModule, Mutation, Action
} from 'vuex-module-decorators'

@Module({
    name: 'bucket',
    stateFactory: true,
    namespaced: true
})
export default class Bucket extends VuexModule {
    _bucket: Array<String> = []

    get bucket () {
        return this._bucket
    }

    @Mutation
    CREATE_BUCKET (name: String) {
        this._bucket.push(name)
    }

    @Mutation
    TRASH_BUCKET (bucketId: String) {
        this._bucket.splice(this._bucket.indexOf(bucketId), 1)
    }

    @Action({
        commit: 'CREATE_BUCKET'
    })
    createBucket (name: String) {
        return name
    }

    @Action({
        commit: 'TRASH_BUCKET'
    })
    trashBucket (bucketId: String) {
        return bucketId
    }
}
