<template>
	<v-app>
		<v-app-bar app>
			<img
				src="../src/views/image/header/protect.png"
				width="48"
				style="margin-right:12px"
				class="mml-2"
				@click=";(mini = !mini), (drawer = !drawer)"
			/>
			<div class="Logo-1 main-font-7 m1--text" @click="$router.push({ name: 'Home' })">PROTECT-WEB</div>
		</v-app-bar>
		<v-layout>
			<v-navigation-drawer appclass="navigation" class="navigation_left" v-model="drawer1" :mini-variant.sync="mini">
				<v-list class="">
					<v-list-item @click="$router.push({ name: 'Home' })">
						<v-list-item-icon>
							<v-icon small color="black">mdi-trending-up</v-icon>
						</v-list-item-icon>
						<v-list-item-title>포트폴리오</v-list-item-title>
					</v-list-item>
					<v-list-item @click="$router.push({ name: 'schedule' })">
						<v-list-item-icon>
							<v-icon small>mdi-youtube-subscription</v-icon>
						</v-list-item-icon>
						<v-list-item-title>일정표</v-list-item-title>
					</v-list-item>
					<v-list-item @click="$router.push({ name: 'contact' })">
						<v-list-item-icon>
							<v-icon small>mdi-history</v-icon>
						</v-list-item-icon>
						<v-list-item-title>문의하기</v-list-item-title>
					</v-list-item>
					<v-list style="font-size:.75rem align:center">
						최근 본 포트폴리오
					</v-list>
				</v-list>
			</v-navigation-drawer>
			<!-- <v-navigation-drawer appclass="navigation" class="navigation_left" v-model="drawer1">
				<v-list class="">
					<v-list-item @click="$router.push({ name: 'Home' })">
						<v-list-item-icon>
							<v-icon small color="black">mdi-trending-up</v-icon>
						</v-list-item-icon>
						<v-list-item-title>포트폴리오</v-list-item-title>
					</v-list-item>
					<v-list-item @click="$router.push({ name: 'schedule' })">
						<v-list-item-icon>
							<v-icon small>mdi-youtube-subscription</v-icon>
						</v-list-item-icon>
						<v-list-item-title>일정표</v-list-item-title>
					</v-list-item>
					<v-list-item @click="$router.push({ name: 'contact' })">
						<v-list-item-icon>
							<v-icon small>mdi-history</v-icon>
						</v-list-item-icon>
						<v-list-item-title>문의하기</v-list-item-title>
					</v-list-item>
					<v-list mini="false">
						최근 본 포트폴리오
					</v-list>
				</v-list>
			</v-navigation-drawer> -->

			<!-- <v-flex class="navigation_left"> </v-flex> -->
			<v-flex xs12 class="mainBoard">
				<router-view></router-view>
			</v-flex>
		</v-layout>
		<!-- <v-footer app></v-footer> -->
	</v-app>
</template>

<script>
// import { header_logo_view } from './views/header_logo_view'
export default {
	name: 'App',
	components: {
		// header_logo_view,
	},
	data: () => ({
		items: ['Foo', 'Bar', 'Fizz', 'Buzz'],

		drawer: !null,
		drawer1: null,
		// mini-variant: true,
		mini: true,
	}),

	// 	methods: {
	// 		mini_variant() {
	// 			const mini-variant : false
	// 		},
	// 	},
}
</script>
<style scoped>
.navigation_left {
	padding: 56px 0px 0px 0px;
	height: 100vh;
	top: 56px;
	max-height: calc(100% - 56px);
	transform: translateX(-100%);
	width: 240px;
}
.mainBoard {
	margin: 0px;
	padding: 56px 0px 0px 0px;
	width: 100% !important;
}
.container {
	margin: 0px;
	padding: 0px;
}
.v-toolbar__content {
	height: 56px !important;
}
.v-sheet {
	height: 56px !important;
}
</style>
