<template>
	<v-app>
		<v-app-bar app>
			<img
				src="../src/views/image/header/protect.png"
				width="48"
				style="margin-right: 12px"
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
					<v-list style="font-size:.75rem align:center" v-if="mini === false">
						최근 본 포트폴리오

						<!-- <v-list v-for="test in tests" :key="test" items="test" /> -->
						<v-flex
							v-for="carousel in carousels"
							:key="carousel"
							:value="carousel"
							style="font-size: 20px; cursor: pointer; text-align: center; text-decoration: underline"
							@click="dialog = !dialog"
							>{{ carousel }}
						</v-flex>
						<!-- <v-list v-for="carousel in carousels" :key="carousel" @click="dialog = true">{{ carousel }}</v-list> -->
						<v-dialog v-model="dialog" height="500px" width="100%" persistent color="#f5f5f5">
							<v-carousel>
								<v-carousel-item
									v-for="(item, i) in items"
									:key="i"
									:src="item.src"
									reverse-transition="fade-transition"
									transition="fade-transition"
									hide-delimiters
									style="cursor: pointer"
								></v-carousel-item>
							</v-carousel>
							<v-btn class="dialog_cancel" text color="#f5f5f5" @click="dialog = !dialog">
								<v-icon>mdi-window-close</v-icon>
							</v-btn>
						</v-dialog>
					</v-list>
				</v-list>
			</v-navigation-drawer>

			<v-flex xs12 class="mainBoard">
				<router-view></router-view>
			</v-flex>
		</v-layout>
	</v-app>
</template>

<script>
export default {
	name: 'App',
	components: {
		// header_logo_view,
	},
	data: () => ({
		dialog: false,
		titles: ['1', '2', '3', '4', '5'],
		items: [
			{
				src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
			},
			{
				src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
			},
			{
				src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
			},
			{
				src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
			},
		],
		carousels: [],
		tests: [],
		drawer: !null,
		drawer1: null,
		history: [],
		mini: true,
	}),
	created() {
		this.carousels = new Array()
		this.$EventBus.$on('history', value => {
			console.log(value)

			this.test = value
			this.carousels.push(this.test)
			// console.log(this.carousels)
		})

		// console.log('test13' + this.test)
		// this.carousels = new Array()
		// this.carousels.push(this.test)
		// console.log('car' + this.carousels)
	},
	mounted() {
		this.carousels = []
	},
	methods: {
		test1() {
			this.dialog = true
		},
	},
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
