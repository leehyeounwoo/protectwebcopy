<template>
	<v-container class="home">
		<v-img src="./image/header/banner.png" max-height="350" contain class="img_back"></v-img>
		<v-layout class="sheet" row wrap>
			<v-flex mt-5 px-2 xl3 lg4 md4 sm6 xs6 v-for="title in titles" :key="title" v-on:click="$EventBus.$emit('history', title)">
				<template>
					<v-carousel>
						<v-carousel-item
							v-for="(item, i) in items"
							:key="i"
							:src="item.src"
							reverse-transition="fade-transition"
							transition="fade-transition"
							@click="dialog = true"
						>
						</v-carousel-item>
					</v-carousel>
				</template>
			</v-flex>
			<template>
				<v-dialog v-model="dialog" height="500px" width="100%" persistent color="#f5f5f5">
					<v-carousel>
						<v-carousel-item
							v-for="(item, i) in items"
							:key="i"
							:src="item.src"
							reverse-transition="fade-transition"
							transition="fade-transition"
							hide-delimiters
						></v-carousel-item>
					</v-carousel>
					<v-btn class="dialog_cancel" text color="#f5f5f5" @click="dialog = !dialog">
						<v-icon>mdi-window-close</v-icon>
					</v-btn>
				</v-dialog>
			</template>
		</v-layout>
	</v-container>
</template>

<script>
// import { RECENT_PORTFOLIO } from '../store/index'
export default {
	data: () => ({
		dialog: false,
		drawer: !null,
		sheet: false,
		carousel: [],
		model: 0,
		titles: ['첫번째 게시물', '두번째 게시물', '세번째 게시물', '네번째 게시물', '다섯번째 게시물'],
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

		// colors: ['red', 'deep-purple', 'cyan', 'green', 'orange', 'grey darken-1'],
		// sheet: { titles: { colors: ['red', 'deep-purple', 'cyan', 'green', 'orange', 'grey darken-1'] } },
	}),
	components: {},
	// methods: {
	// 	RECENT_PORTFOLIO() {
	// 		this.$store.commit(RECENT_PORTFOLIO, this.title)
	// 		console.log('이것은1:' + this.$store.Recent_Portfolio)
	// 		this.$store.Recent_Portfolio = this.titles
	// 		console.log('이것은2:' + this.$store.Recent_Portfolio)
	// 	},
	// },
}
</script>
<style lang="scss" scope>
.dialog_cancel {
}

.sheet {
	padding-left: 15px;
}
.main_page {
	max-width: 100% !important;
	max-height: 100% !important;
	height: 100% !important;
}
.navigation {
	min-width: 0px;
	height: 100%;
}
.content {
	padding-top: 0px !important;
}
.Logo-1 {
	font-family: 'Noto Sans KR', sans-serif;
	font-weight: bold;
	font-weight: 500;
	font-size: 26px !important;
	letter-spacing: -1px;
	background: linear-gradient(to top, #fa6870, #5522fd);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	cursor: pointer;
}
.main-font-7 {
	font-family: 'Noto Sans KR', sans-serif;
	font-weight: 700 !important;
}
.navigation_left {
	font-size: 10px;
}
.header {
	height: 56px;
	padding: 0px 16px 0px 16px !important;
}
.slider {
	width: 374px !important;
	height: 300px !important;
}
.img_back {
	background-color: #b2bdff;
}
.title {
	width: 100%;
}
.header_bar {
	padding: 0px 0px 0px 0px !important;
	height: 56px !important;
}
.v-toolbar__content {
	padding: 0px 16px 0px 16px !important;
	height: 56px !important;
}
.container {
	max-width: 100% !important;
}
</style>
