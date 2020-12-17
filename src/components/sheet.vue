<template>
	<div>
		<v-bottom-sheet v-model="sheet" persistent>
			<template v-slot:activator="{ on, attrs }">
				<!-- 시트 안 -->
				<v-carousel v-model="model" dark v-bind="attrs" v-on="on" class="slider">
					<v-carousel-item v-for="(color, i) in colors" :key="color">
						<v-sheet :color="color" height="100%" tile @click="sheet = true">
							<v-row class="fill-height" align="center" justify="center">
								<div class="display-3">Slide {{ i + 1 }}</div>
							</v-row>
						</v-sheet>
					</v-carousel-item>
				</v-carousel>
			</template>
		</v-bottom-sheet>
		<v-sheet class="text-center" height="500px">
			<v-btn class="v-icon notranslate material-icons theme--light" @click="sheet = !sheet"> </v-btn>
			<div class="py-3">
				This is a bottom sheet using the persistent prop
			</div>
		</v-sheet>
	</div>
</template>

<script>
export default {
	data: () => ({
		sheet: false,
		model: 0,
		colors: ['primary', 'secondary', 'yellow darken-2', 'red', 'orange'],
	}),
}
</script>

<style></style>
