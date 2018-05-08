<template>
	<header>
		<nav>
			<b-navbar type="dark" variant="primary" fixed="top">
				<b-container>
					<b-navbar-nav v-if="hideBack === false">
						<b-nav-item v-on:click="goBack" left>Back</b-nav-item>
					</b-navbar-nav>
					<b-navbar-brand to="/" class="mx-auto">TrafficTracker</b-navbar-brand>

				</b-container>
			</b-navbar>
		</nav>
	</header>

</template>  
<script>
export default {

	name: 'appHeader',

	data () {
		return {
			msg: 'Welcome to Your Vue.js App',
			hideBack: false
		}


	},
	created() {
		this.checkBack();
	},
	methods: {
		checkBack: function() {
			if(this.$router.history.current.name === 'home') {
				this.hideBack = true
			} else {
				this.hideBack = false
			}
		},
		goBack: function() {
			this.$router.go(-1);
		}
	},
	watch:{
		$route (to, from){
			this.checkBack();
		}
	}
}
</script>

<style scoped>
</style>
