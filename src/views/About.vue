<template>
	<div class="about">
		<h1>This is an about page</h1>
	</div>
</template>
<v-bottom-sheet v-model="sheet" persistent>
					<template v-slot:activator="{ on, attrs }">
						<v-carousel v-model="model" dark v-bind="attrs" v-on="on" class="slider" align="center">
							<v-carousel-item v-for="(title, i) in titles" :key="title">
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
