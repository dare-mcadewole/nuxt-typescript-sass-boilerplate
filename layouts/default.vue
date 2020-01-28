<template>
  <div>
    <nuxt />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import { initStoreData } from '~/store'

@Component
export default class DefaultLayout extends Vue {
  mounted () {
    // window.addEventListener('DOMContentLoaded', initStoreData)
  }
}
</script>

<style lang="scss">
html {
  font-family: $font-family;
  font-size: $body;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

h1, h2, h3, h4, h5, h6 {
  font-weight: 300;
}
</style>
