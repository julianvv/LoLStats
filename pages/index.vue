<template>
  <main>
    <h1 class="title">SELECT A GAME</h1>
    <div class="game-selectors">
      <nuxt-link to="/league">
        <div class="selector league-selector">
          <img
            src="../static/lol-logo-rendered-hi-res.png"
            height="auto"
            width="220px"
          />
        </div>
      </nuxt-link>
      <nuxt-link to="/valorant">
        <div class="selector valorant-selector">
          <img
            src="../static/valorant/Logotype/V_Logotype_Off-White.png"
            height="auto"
            width="220px"
          />
        </div>
      </nuxt-link>
    </div>
  </main>
</template>

<script>
export default {
  layout: "default",
};
</script>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

div.game-selectors {
	display: flex;
	flex-direction: column;
}

@media (min-width: 768px) {
  div.game-selectors {
		flex-direction: row;
	}
}

div.selector {
  cursor: pointer;
  margin: 6px;
  height: 200px;
  display: flex;
  border-width: 2px;
  border-style: solid;
}

div.selector.league-selector {
	border-color:#C19738;
}

div.selector.valorant-selector {
	border-color:#FF4655;
}

div.selector img {
  align-self: center;
}

h1.title {
  font-family: "Inter", sans-serif;
	margin: 2rem;
}
</style>