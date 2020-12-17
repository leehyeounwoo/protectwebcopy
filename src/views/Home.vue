<template>
	<v-container class="home">
		<v-img src="./image/header/banner.png" max-height="350" contain class="img_back"></v-img>
		<v-layout class="sheet" row wrap>
			<v-flex mt-5 px-2 xl3 lg4 md4 sm6 xs6 v-for="(title, i) in titles" :key="i">
				<v-bottom-sheet v-model="sheet" persistent>
					<template v-slot:activator="{ on, attrs }">
						<v-carousel v-model="model" dark v-bind="attrs" v-on="on" class="slider" align="center">
							<v-carousel-item v-for="(color, i) in colors" :key="color">
								<v-sheet :color="color" height="100%" tile @click="sheet = true">
									<v-row class="fill-height" align="center" justify="center">
										<div class="display-3">Slide {{ i + 1 }}</div>
									</v-row>
								</v-sheet>
							</v-carousel-item>
						</v-carousel>
					</template>
					<v-layout>
						<v-flex>
							<v-sheet class="text-center" height="500px">
								<div class="py-3">
									This is a bottom sheet using the persistent prop
									<v-btn class="v-icon notranslate material-icons theme--light" @click="sheet = !sheet"> </v-btn>
								</div>
							</v-sheet>
						</v-flex>
					</v-layout>
				</v-bottom-sheet>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
export default {
	data: () => ({
		drawer: !null,
		sheet: false,
		model: 0,
		colors: ['red', 'deep-purple', 'cyan', 'green', 'orange', 'grey darken-1'],
		sheet: { titles: { colors: ['red', 'deep-purple', 'cyan', 'green', 'orange', 'grey darken-1'] } },
		detailData: { comments: [{ users_permissions_user: null }] },
	}),
	methods: {},
}
</script>
<style lang="scss" scope>
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
<style global></style>
