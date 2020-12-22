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
			</v-flex>
			<v-flex> editor</v-flex>
		</v-layout>
		<v-layout wrap class=" " style="margin: 70px 40px 70px 40px;">
			<v-flex class="rounded-lg offset-xs9 xs3">
				<v-text-field
					v-model="search"
					append-icon="mdi-magnify"
					label="이름을 입력해주세요"
					float="right"
					single-line
					hide-details
					class="rounded-lg"
					style="padding:0px; margin:0px; width:200px; margin-bottom:10px; border:solid 1px black; float:right; width:100%"
				></v-text-field>
			</v-flex>
			<v-flex class="contact_left contact_box rounded-xl" xs12>
				<div class="">예산 1000만원 이하</div>
				<v-layout contact-text-1>
					개발문의 합니다.
				</v-layout>
			</v-flex>
			<v-flex class="contact_left contact_box rounded-xl" xs12>
				<div class="">예산 1000만원 이하</div>
				<v-layout contact-text-1>
					개발문의 합니다.
				</v-layout>
			</v-flex>
		</v-layout>
		<v-pagination v-model="page" :length="1"></v-pagination>
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
.contact_box {
	border: solid 1px black;
	padding: 10px;
	box-shadow: 10px 10px black;
	margin-bottom: 20px;
}
.card {
	min-width: 100% !important;
	width: 100%;
	padding: 0px !important;
}
.search {
	border: 1px solid black;
	margin-bottom: 12px;
}
.border {
	border: 1px solid black;
}
.search_box {
	border: solid 1px black;
	box-shadow: 10px 10px black;
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
