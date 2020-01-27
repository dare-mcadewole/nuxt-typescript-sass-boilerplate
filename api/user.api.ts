import $api from '~/utils/api'
import { User, AuthUser } from '~/contracts/UserContract';
import { AxiosPromise } from 'axios';

export default class UserApi {
    /**
     * 
     * @param user 
     * 
     * Creates a user
     */
    createUser (user: User): AxiosPromise<User> {
        return $api({
            
        })
    }

    /**
     * 
     * @param user 
     * 
     * Authenticates a user
     */
    authenticateUser (user: AuthUser) {}

    /**
     * Logs a user out of the system
     */
    logout () {}
}
