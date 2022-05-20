<template>
	<ul>
     <li v-for="character in characters" :key="character.name">
		 {{character.name}}
	 </li>
	</ul>
</template>

<script>
export default {
	layout: 'valorant',
	async asyncData({$axios}) {
		let characters = (await $axios.$get('/api/val/content/v1/contents')).characters;
		return {characters};
	},
}
</script>

<style>

</style>