<template>
	<div class="demo-alignment">
		<vs-button @click="popupActive=true" color="primary" type="filled">Create Client</vs-button>
		<div v-if="message">{{ message }}</div>
		 
		<vs-popup class="holamundo"  title="Create a new client" :active.sync="popupActive">
		<form>
			<div class="vx-row w-full">
			<div class="vx-col w-full">
				<vs-input size="large" v-validate="'required|alpha'" placeholder="Your Name" name="name" v-model="name" class="mt-5 w-full" />
				<span class="text-danger text-sm"  v-show="errors.has('name')">{{ errors.first('name') }}</span>
			</div>

			<div class="vx-col w-full">
				<vs-input size="large" v-validate="'required|alpha_dash'" placeholder="Your phone" name="phone" v-model="phone" class="mt-5 w-full" />
				<span class="text-danger text-sm" v-show="errors.has('phone')">{{ errors.first('phone') }}</span>
			</div>

			<div class="vx-col w-full">
				<vs-input size="large" v-validate="'required|email'" placeholder="Your Email" name="email" v-model="email" class="mt-5 w-full" />
				<span class="text-danger text-sm" v-show="errors.has('email')">{{ errors.first('email') }}</span>
			</div>

			<div class="vx-col w-full">
				<vs-input type="address" size="large" v-validate="'required'" ref="|min:6|max:10" placeholder="Your address" name="address" v-model="address" class="mt-5 w-full" />
				<span class="text-danger text-sm" v-show="errors.has('address')">{{ errors.first('address') }}</span>
			</div>

			
			</div>

			<vs-button type="filled" @click.prevent="submitForm" class="mt-5 block">Submit</vs-button>
		</form>
		</vs-popup>
	</div>
</template>

<script>
export default {
    data() {
        return {
			name: "test name",
			email: "test@gmail.com",
			phone: "",
			address: "",
			company_id:1,
			currency_code:'USD',
			popupActive: false,
			message:"",
        }
	},
	methods:{
		submitForm() {
			this.$validator.validateAll().then(result => {
				if (result) {
					this.$store.dispatch('client/createClient',{company_id:this.company_id,name:this.name,email:this.email,currency_code:this.currency_code}).then((res) => {
						this.popupActive = false;
						this.$vs.notify({
						text:'Client Created Successfully',
						color:'success',
						position:'top-right'})
                    });
				}
			})
		}
	},
}
</script>