<template>
	<v-container wrap>
		<v-layout wrap class="qustion_editor rounded-lg">
			<v-flex class="contact_left" xs6>
				<div class="title">문의하기</div>
				<v-layout contact-text-1>
					<v-flex xs6 class="question">
						<v-text-field v-model="name" counter="50" maxlength="50" label="Name*"></v-text-field>
						<v-text-field v-model="phone" @keyup="getPhoneMask(phone)" counter="13" maxlength="13" label="Phone*"></v-text-field>

						<v-select v-model="money" :items="moneys" label="예산*" />
						<v-dialog ref="dialog" v-model="modal" :return-value.sync="date" persistent width="290px">
							<template v-slot:activator="{ on, attrs }">
								<v-text-field v-model="date" label="예상납품기한" readonly v-bind="attrs" v-on="on"></v-text-field>
							</template>
							<v-date-picker v-model="date" scrollable>
								<v-spacer></v-spacer>
								<v-btn text color="primary" @click="modal = false"> Cancel </v-btn>
								<v-btn text color="primary" @click="$refs.dialog.save(date)"> OK </v-btn>
							</v-date-picker>
						</v-dialog>
						<v-text-field v-model="password" type="password" label="게시글 비밀번호*"></v-text-field>
					</v-flex>
					<v-flex xs6 class="question">
						<v-text-field v-model="company" counter="50" maxlength="50" label="Company*"></v-text-field>
						<v-text-field v-model="email" counter="50" maxlength="50" label="Email*"></v-text-field>
						<v-select v-model="type" :items="items" label="의뢰타입*" />
						<v-text-field v-model="url" label="참고 URL"></v-text-field>
					</v-flex>
				</v-layout>
			</v-flex>
			<v-flex>
				<v-layout v-model="editor">editor</v-layout>
				<textarea style="height: 80%; border: solid 1px black; width: 100%" v-model="editor" />

				<v-layout>
					<v-btn class="button" style="background: black; color: white; width: 100%; height: 70px" @click="onclick()">등록하기</v-btn>
				</v-layout>
			</v-flex>
		</v-layout>
		<v-layout wrap class="" style="margin: 70px 40px 70px 40px">
			<v-flex class="rounded-lg offset-xs9 xs3">
				<v-text-field
					v-model="search"
					label="이름을 입력해주세요"
					float="right"
					single-line
					hide-details
					class="rounded-lg"
					style="padding: 0px; margin: 0px; width: 200px; margin-bottom: 10px; border: solid 1px black; float: right; width: 100%"
					append-icon="mdi-magnify"
					@click="search()"
				>
				</v-text-field
				><v-btn @click="search_form()"> test</v-btn>
			</v-flex>
			<v-flex class="contact_left contact_box rounded-xl" v-for="(b, index) in box" :key="index" xs12 @click="contact(index)">
				<v-layout wrap>
					<v-flex v-model="test">{{ $store.state.array[b - 1].name }} </v-flex>
					<v-flex style="float: right">{{ $store.state.array[b - 1].date }} </v-flex>
				</v-layout>
				<v-layout contact-text-1>{{ $store.state.array[b - 1].type }} 입니다. </v-layout>
			</v-flex>
		</v-layout>
		<v-pagination v-model="page" :length="1"></v-pagination>
		<v-dialog v-model="dialog1" persistent>
			<v-container wrap class="test rounded-lg">
				<v-layout>게시글 비밀번호 입력</v-layout><v-icon style="float: right" @click="dialog1 = false">mdi-window-close</v-icon>
				<div>비밀번호 <v-text-field v-model="view_password" type="password"></v-text-field></div>
				<v-btn @click="password_check()">확인</v-btn>
			</v-container>
		</v-dialog>
		<v-dialog v-model="dialog2" persistent>
			<v-layout wrap class="test rounded-lg">
				<v-flex class="contact_left" xs6>
					<div class="title">문의하기 수정 <v-icon style="float: right" @click="dialog2 = false">mdi-window-close</v-icon></div>

					<v-layout contact-text-1>
						<v-flex xs6 class="question">
							<v-text-field counter="50" maxlength="50" label="Name*" v-model="edit_name"></v-text-field>
							<v-text-field v-model="edit_phone" @keyup="getPhoneMask(edit_phone)" counter="13" maxlength="13" label="Phone*">
							</v-text-field>
							<v-text-field v-model="edit_money" label="예산*"> </v-text-field>
							<v-dialog ref="dialog" v-model="modal" :return-value.sync="date" persistent width="290px">
								<template v-slot:activator="{ on, attrs }">
									<v-text-field v-model="edit_date" label="예상납품기한" readonly v-bind="attrs" v-on="on"></v-text-field>
								</template>
								<v-date-picker v-model="edit_date" scrollable>
									<v-spacer></v-spacer>
									<v-btn text color="primary" @click="modal = false"> Cancel </v-btn>
									<v-btn text color="primary" @click="$refs.dialog.save(date)"> OK </v-btn>
								</v-date-picker>
							</v-dialog>
							<v-text-field v-model="edit_password" type="password" label="게시글 비밀번호*"></v-text-field>
						</v-flex>
						<v-flex xs6 class="question">
							<v-text-field v-model="edit_company" counter="50" maxlength="50" label="Company*"></v-text-field>
							<v-text-field v-model="edit_email" counter="50" maxlength="50" label="Email*"></v-text-field>
							<v-select v-model="edit_type" :items="items" label="의뢰타입*" />
							<v-text-field v-model="edit_url" label="참고 URL"></v-text-field>
						</v-flex>
					</v-layout>
				</v-flex>
				<v-flex>
					<v-layout>editor</v-layout>
					<textarea style="height: 80%; border: solid 1px black; width: 100%" v-model="editor" />

					<v-layout class="button">
						<v-btn style="background: black; color: white; width: 100%; height: 70px" @click="edit(index), (dialog2 = !dialog2)"
							>수정하기</v-btn
						>
					</v-layout>
				</v-flex>
			</v-layout>
		</v-dialog>
	</v-container>
</template>

<script>
import Vue from 'vue'

import { CONTACT, SEARCH_FORM } from '../store/index'
Vue.component('BaseModal', {
	template: `
  <v-layout>
			<slot name="qustion"></slot>
</v-layout>
  `,
})

export default {
	data() {
		return {
			items: ['웹 개발 문의', '앱 개발 문의', '기타 문의'],
			moneys: ['1000만원 이하', '1000만원 이상', '예산 미정'],
			date: new Date().toISOString().substr(0, 10),
			menu: false,
			modal: false,
			menu2: false,
			dialog1: false,
			dialog2: false,
			box: this.$store.state.array.length,
			view_password: '',
			phone: null,
			listData: this.$store.state.array,
			edit_phone: null,
			dataPerPage: 10,
			curPageNum: 1,
			search: '',
			searchData: [],
			names: '',
		}
	},
	created: {},
	methods: {
		getPhoneMask(val) {
			let res = this.getMask(val)
			this.phone = res
			this.edit_phone = res
			//서버 전송 값에는 '-' 를 제외하고 숫자만 저장
			this.model.phone = this.phone.replace(/[^0-9]/g, '')
		},

		getMask(phoneNumber) {
			if (!phoneNumber) return phoneNumber
			phoneNumber = phoneNumber.replace(/[^0-9]/g, '')

			let res = ''
			if (phoneNumber.length < 3) {
				res = phoneNumber
			} else {
				if (phoneNumber.substr(0, 2) == '02') {
					if (phoneNumber.length <= 5) {
						//02-123-5678
						res = phoneNumber.substr(0, 2) + '-' + phoneNumber.substr(2, 3)
					} else if (phoneNumber.length > 5 && phoneNumber.length <= 9) {
						//02-123-5678
						res = phoneNumber.substr(0, 2) + '-' + phoneNumber.substr(2, 3) + '-' + phoneNumber.substr(5)
					} else if (phoneNumber.length > 9) {
						//02-1234-5678
						res = phoneNumber.substr(0, 2) + '-' + phoneNumber.substr(2, 4) + '-' + phoneNumber.substr(6)
					}
				} else {
					if (phoneNumber.length < 8) {
						res = phoneNumber
					} else if (phoneNumber.length == 8) {
						res = phoneNumber.substr(0, 4) + '-' + phoneNumber.substr(4)
					} else if (phoneNumber.length == 9) {
						res = phoneNumber.substr(0, 3) + '-' + phoneNumber.substr(3, 3) + '-' + phoneNumber.substr(6)
					} else if (phoneNumber.length == 10) {
						res = phoneNumber.substr(0, 3) + '-' + phoneNumber.substr(3, 3) + '-' + phoneNumber.substr(6)
					} else if (phoneNumber.length > 10) {
						//010-1234-5678
						res = phoneNumber.substr(0, 3) + '-' + phoneNumber.substr(3, 4) + '-' + phoneNumber.substr(7)
					}
				}
			}

			return res
		},
		// search1() {
		// 	console.log(this.$store.state.array.find((x) => x.name === this.search))
		// 	if (this.search === true) {
		// 		this.test = this.$store.state.array
		// 		this.$store.state.array = this.$store.state.array.find((x) => x.name === this.search)
		// 		this.box = this.$store.state.array.length
		// 	} else {
		// 		console.log(this.$store.state.array.find((x) => x.name === this.search))
		// 		this.$store.state.array = this.test
		// 	}

		// console.log(this.search === this.$store.state.array[0].name)
		// if (this.search) {
		// 	console.log('ssss')
		// 	this.$store.state.array.name.filter(this.search)
		// 	console.log(this.$store.state.array.name.filter(this.search))
		// } else {
		// 	alert('검색결과 없음')
		// }
		// },
		password_check() {
			if (this.edit_password === this.view_password) {
				this.dialog2 = !this.dialog2
				this.dialog1 = !this.dialog1
				console.log('password' + this.view_password)
				this.view_password = ''
				console.log('password1' + this.view_password)
			} else {
				alert('오류')
			}
		},
		onclick() {
			this.$store.commit(CONTACT)

			if (!this.name || !this.phone || !this.money || !this.password || !this.company || !this.email || !this.type)
				return alert('*를 한번 더 확인해주세요')
			console.log(this.name)

			this.box = this.$store.state.array.length
			this.$store.state.array.push({
				id: this.box,
				name: this.name,
				phone: this.phone,
				money: this.money,
				date: this.date,
				password: this.password,
				company: this.company,
				email: this.email,
				type: this.type,
				url: this.url,
				editor: this.editor,
			})
			this.commentID = this.$store.state.array.id
			this.box = this.$store.state.array.length
			console.log(this.$store.state.array)
			this.name = ''
			this.phone = ''
			this.money = ''
			this.date = ''
			this.password = ''
			this.company = ''
			this.email = ''
			this.type = ''
			this.url = ''
			this.editor = ''
		},
		contact(index) {
			this.dialog1 = !this.dialog1
			console.log(this.$store.state.array[index].view_password)
			this.edit_name = this.$store.state.array[index].name
			this.edit_phone = this.$store.state.array[index].phone
			this.edit_money = this.$store.state.array[index].money
			this.edit_password = this.$store.state.array[index].password
			this.edit_company = this.$store.state.array[index].company
			this.edit_type = this.$store.state.array[index].type
			this.edit_url = this.$store.state.array[index].url
			this.edit_editor = this.$store.state.array[index].editor
			this.edit_date = this.$store.state.array[index].date
			this.edit_email = this.$store.state.array[index].email
			this.edit_id = this.$store.state.array[index].id
			this.view_password = ''
		},

		edit() {
			console.log('ss' + this.edit_id)

			this.$store.state.array[this.edit_id].name = this.edit_name
			this.$store.state.array[this.edit_id].phone = this.edit_phone
			this.$store.state.array[this.edit_id].money = this.edit_money
			this.$store.state.array[this.edit_id].password = this.edit_password
			this.$store.state.array[this.edit_id].company = this.edit_company
			this.$store.state.array[this.edit_id].type = this.edit_type
			this.$store.state.array[this.edit_id].url = this.edit_url
			this.$store.state.array[this.edit_id].editor = this.edit_editor
			this.$store.state.array[this.edit_id].date = this.edit_date
			this.$store.state.array[this.edit_id].email = this.edit_email
		},
		search_form() {
			this.$store.commit(SEARCH_FORM)
		},
	},
	// computed: {
	// 	filterBySize() {
	// 		return this.$store.state.array.filter(function (item) {
	// 			return item.name === this.search
	// 			// 참고 : 여기서 this.size를 접근하면 undefined
	// 		})
	// 	},
	// },

	// computed: {
	// 	calData() {
	// 		// eslint-disable-next-line vue/no-side-effects-in-computed-properties
	// 		this.searchData = this.$store.state.array
	// 			.filter(data => {
	// 				return data.name.toLowerCase().includes(this.search.toLowerCase())
	// 			})
	// 			.slice(0)
	// 		console.log(this.search.toLowerCase())
	// 		return this.searchData.slice(this.startOffset, this.endOffset)
	// 	},
	// },
	// computed: {
	// 	filteredList() {
	// 		return this.postList.filter(post => {
	// 			return post.title.toLowerCase().includes(this.search.toLowerCase())
	// 		})
	// 	},
	// },
	// computed: {
	// 	startOffset() {
	// 		return (this.curPageNum - 1) * this.dataPerPage
	// 	},
	// 	endOffset() {
	// 		return this.startOffset + this.dataPerPage
	// 	},
	// 	numOfPages() {
	// 		return Math.ceil(this.box / this.dataPerPage)
	// 	},
	// 	calData() {
	// 		// eslint-disable-next-line vue/no-side-effects-in-computed-properties
	// 		this.listData = this.$store.state.array
	// 			// eslint-disable-next-line vue/no-side-effects-in-computed-properties
	// 			.filter((array) => {
	// 				return this.$store.state.array.name.toLowerCase().includes(this.search.toLowerCase())
	// 			})
	// 			.slice(0)

	// 		return this.searchData.slice(this.startOffset, this.endOffset)
	// 	},
	// },
	// computed: {
	// 	filteredList() {
	// 		return this.postList.filter((post) => {
	// 			return post.title.toLowerCase().includes(this.search.toLowerCase())
	// 		})
	// 	},
	// },
}
</script>

<style>
.test {
	background: white;
}

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
