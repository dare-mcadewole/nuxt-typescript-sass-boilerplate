<template>
  <div class="">
    <Logo />
    <button @click="authenticate">Authenticate User</button>
    <button @click="logout">Logout</button>

    <h1>{{ user }}</h1>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import Logo from '~/components/Logo.vue'
import { User, AuthUser } from '../contracts/UserContract'
import { userStore } from '../store'

@Component({
  components: {
    Logo
  }
})
export default class Index extends Vue {
  _user: AuthUser = {
    id: 'dare-adewole',
    password: 'password1'
  }

  get user () {
    return userStore.user ? userStore.user.name : '-'
  }

  authenticate () {
    let user = userStore.authenticate(this._user)
    console.log('Authenticated User: ', user)
  }

  logout () {
    userStore.logout()
    console.log('Check cookies to verify that logout was successful')
  }
}
</script>

<style>
</style>
