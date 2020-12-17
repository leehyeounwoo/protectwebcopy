<template>
	<v-navigation-drawer class="navigation" v-model="drawer">
		<v-list class="navigation_left">
			<v-list-item link>
				<v-list-item-icon>
					<v-icon>mdi-trending-up</v-icon>
				</v-list-item-icon>
				<v-list-item-title>포트폴리오</v-list-item-title>
			</v-list-item>
			<v-list-item @click="$router.push({ name: 'schedule' })">
				<v-list-item-icon>
					<v-icon>mdi-youtube-subscription</v-icon>
				</v-list-item-icon>
				<v-list-item-title>일정표</v-list-item-title>
			</v-list-item>
			<v-list-item link>
				<v-list-item-icon>
					<v-icon>mdi-history</v-icon>
				</v-list-item-icon>
				<v-list-item-title>문의하기</v-list-item-title>
			</v-list-item>
		</v-list>
	</v-navigation-drawer>
</template>

<script>
export default {
	data() {
		return {
			drawer: !null,
		}
	},
}
</script>

<style></style>
