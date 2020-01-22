<template>
  <div class="">
    <Logo />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import Logo from '~/components/Logo.vue'

@Component({
  components: {
    Logo
  }
})
export default class Index extends Vue {
}
</script>

<style>
</style>
