import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { User, AuthUser } from '~/contracts/UserContract'
import Cookies from 'js-cookie'

@Module({
    name: 'UserStore',
    namespaced: false,
    stateFactory: true
})
export default class UserStore extends VuexModule {
    _token: string | null = null
    _user: User | null = null

    get user(): User | null {
        return this._user
    }

    @Mutation
    SET_USER (user: User): void {
        this._user = user
    }

    @Mutation
    LOGOUT (): void {
        this._user = null
        this._token = null
    }

    @Mutation
    CREATE (user: User) {
        this._user = user
    }

    /**
     * 
     * @param user 
     * @returns {User | null}
     * 
     * Authenticates user and sets appropriate cookies
     */
    @Action({
        commit: 'SET_USER'
    })
    authenticate (user: AuthUser): AuthUser | null {
        var authenticatedUser = {
            ...user,
            name: 'Dare Adewole II'
        }
        Cookies.set('dotcom_user', authenticatedUser.name)
        Cookies.set('user_token', 'YXBwbGljYXRpb25fdG9rZW5fZm9yX251eHRfdHNfc2Fzc19ib2lsZXJwbGF0ZQ==')
        return authenticatedUser
    }

    @Action
    logout () {
        Cookies.remove('dotcom_user')
        Cookies.remove('user_token')
        this.LOGOUT()
    }

    @Action({
        commit: 'CREATE'
    })
    createUser (user: User): User {
        return user
    }

}
