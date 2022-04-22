<template>
  <div>
    <league-header />
    <Nuxt class="body" />
    <base-footer />
  </div>
</template>

<script>
import LeagueHeader from "../components/Header/LeagueHeader.vue";
import BaseFooter from "../components/BaseFooter.vue";

export default {
  components: {
    LeagueHeader,
    BaseFooter,
  },
};
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