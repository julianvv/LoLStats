<template>
  <div>
    <valorant-header />
    <Nuxt class="body" />
    <base-footer />
  </div>
</template>

<script>
import ValorantHeader from '../components/Header/ValorantHeader.vue'
import BaseFooter from '../components/BaseFooter.vue'

export default {
  components: {
    ValorantHeader,
    BaseFooter,
}
}
</script>

<style scoped>
main {
  margin: 0 auto;
  padding: 0 1rem;
  margin-top: 88px;
  max-width: 1280px;
}

.body {
  padding: 0px 32px;
}
</style>