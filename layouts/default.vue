<template>
  <div>
    <BaseHeader />
    <Nuxt class="body" />
    <BaseFooter />
  </div>
</template>

<script>
import BaseHeader from '../components/Header/BaseHeader.vue'
import BaseFooter from '../components/BaseFooter.vue'

export default {
  components: {
    BaseHeader,
    BaseFooter
  }
}
</script>

<style>
/* Global styles */
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;700&display=swap');

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
  font-family: 'Quicksand', sans-serif;
  color: white;
  background-color: #474747;
}

main {
  margin: 0 auto;
  padding: 0 1rem;
  margin-top: 88px;
  max-width: 1280px;
}
</style>

<style scoped>
  .body {
    padding: 0px 32px;
  }
</style>