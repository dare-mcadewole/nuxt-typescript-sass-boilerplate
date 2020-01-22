/*
 * File: 'snippets.ts'
 * Created by Dare Adewole II <dare.dev.adewole@gmail.com>
 * Created on Wed Jan 22 2020
 *
 * Copyright (c) 2020 Snippets Inc.
 *
 * Description:
 *      Store Module for managing Snippets
 *       
 */
import {
    Module, VuexModule, Mutation, Action
} from 'vuex-module-decorators'

@Module({
    name: 'snippet',
    stateFactory: true,
    namespaced: true
})
export default class Snippet extends VuexModule {
    _snippets: Array<Object> = []

    get snippets () {
        return this._snippets
    }

    @Mutation
    ADD_SNIPPET (payload: Object) {
        this._snippets.push(payload)
    }

    @Mutation
    TRASH_SNIPPET (snippetId: String) {
        // Trash Snippet
        console.log('Trashing Snippet', snippetId)
    }

    @Action({ commit: 'ADD_SNIPPET' })
    addSnippet (payload: Object) {
        return payload
    }

    @Action({ commit: 'TRASH_SNIPPET' })
    trashSnippet (snippetId: String) {
        return snippetId
    }
}
