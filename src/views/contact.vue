<template>
	<v-container v-content__wrap>
		<v-layout wrap class="qustion_editor rounded-lg">
			<v-flex class="contact_left" xs6>
				<div class="title">문의하기</div>
				<v-layout contact-text-1>
					<v-flex xs6 class="question">
						<v-text-field counter="50" label="Name*"></v-text-field>
						<v-text-field onKeyup="this.value=this.value.replace(/[^0-9]/g,'');" counter="13" label="Phone*"></v-text-field>
						<v-text-field label="예산*"> </v-text-field>
						<v-dialog ref="dialog" v-model="modal" :return-value.sync="date" persistent width="290px">
							<template v-slot:activator="{ on, attrs }">
								<v-text-field v-model="date" label="예상납품기한" readonly v-bind="attrs" v-on="on"></v-text-field>
							</template>
							<v-date-picker v-model="date" scrollable>
								<v-spacer></v-spacer>
								<v-btn text color="primary" @click="modal = false">
									Cancel
								</v-btn>
								<v-btn text color="primary" @click="$refs.dialog.save(date)">
									OK
								</v-btn>
							</v-date-picker>
						</v-dialog>
						<v-text-field type="password" placeholder="게시글 비밀번호*"></v-text-field>
					</v-flex>
					<v-flex xs6 class="question">
						<v-text-field counter="50" label="Company*"></v-text-field>
						<v-text-field counter="50" label="Email*"></v-text-field>
						<v-select :items="items" label="의뢰타입*" />
						<v-text-field label="참고 URL"></v-text-field>
					</v-flex>
				</v-layout>
				<v-layout> </v-layout>
			</v-flex>
			<v-flex> editor</v-flex>
		</v-layout>
		<!-- <v-layout class="search_box">
			<v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details></v-text-field>
		</v-layout>
		<v-layout class="text-center">
			<v-pagination v-model="page" :length="1"></v-pagination>
		</v-layout> -->
	</v-container>
</template>

<script>
export default {
	data: () => ({
		items: ['웹 개발 문의', '앱 개발 문의', '기타 문의'],
		date: new Date().toISOString().substr(0, 10),
		menu: false,
		modal: false,
		menu2: false,
	}),
}
</script>

<style>
.search_box {
	border: 1px gray;
	width: 100%;
	float: right;
	margin: 20px 20px 20px 20px;
}
.contact_left {
	border-right: solid black 1px;
}
.title {
	padding: 20px;
	font-size: 40px;
}
.question {
	margin: 20px 20px 20px 20px;
}
.qustion_editor {
	border: solid 1px black;
	box-shadow: 10px 10px black;
	margin: 70px 40px 70px 40px;
}
.contact-text-1 {
	font-size: 24px;
	width: 100%;
}
</style>
