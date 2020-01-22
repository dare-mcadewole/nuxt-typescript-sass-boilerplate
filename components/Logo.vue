<template>
  <h1 class="logo">Snippets</h1>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component
export default class Logo extends Vue {
  @Prop({
    type: Number,
    default: 38
  }) readonly size !: Number
}
</script>

<style lang="scss"scoped>
.logo {
  text-shadow: 0 0 1px $header-font-color !important;
  font-size: $title;
}
</style>
