import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { User, AuthUser } from '~/contracts/UserContract'
import Cookie from '~/utils/cookie'

@Module({
    name: 'UserStore',
    namespaced: false,
    stateFactory: true
})
export default class UserStore extends VuexModule {
    _token: string = Cookie.token === undefined ? '' : Cookie.token
    _user: User | null = null
    _username: string = Cookie.user === undefined ? '-' : Cookie.user

    get user(): User | null {
        return this._user
    }

    get userName (): string {
        return this._username
    }

    @Mutation
    SET_USER (user: User): void {
        this._user = user
    }

    @Mutation
    SET_USERNAME_AND_TOKEN (payload: any): void {
        this._username = payload.user
        this._token = payload.token
    }

    @Mutation
    LOGOUT (): void {
        this._user = null
        this._token = ''
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
        Cookie.user = authenticatedUser.name
        Cookie.token = 'YXBwbGljYXRpb25fdG9rZW5fZm9yX251eHRfdHNfc2Fzc19ib2lsZXJwbGF0ZQ=='
        return authenticatedUser
    }

    @Action({
        commit: 'SET_USERNAME_AND_TOKEN'
    })
    setUsernameAndToken (payload: any): any {
        return payload
    }

    @Action
    logout () {
        Cookie.user = undefined
        Cookie.token = undefined
        this.LOGOUT()
    }

    @Action({
        commit: 'CREATE'
    })
    createUser (user: User): User {
        return user
    }

}
