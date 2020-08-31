<script>
	import TopNav from './TopNav.vue'
	import LoginRegistrationModal from "./LoginRegistrationModal";

	export default {
		name: 'Home',
		props: {},
		components: {
			TopNav, LoginRegistrationModal
		},
		mounted() {
			console.log('blah',  this.$route.params);
		}
	}
</script>

<style>
	@font-face {
		font-family: 'koch_geometricregular';
		src: url('../assets/fonts/kochgeometric_book_macroman/KochGeometric-Book-webfont.eot');
		src: url('../assets/fonts/kochgeometric_book_macroman/KochGeometric-Book-webfont.eot?#iefix') format('embedded-opentype'),
		url('../assets/fonts/kochgeometric_book_macroman/KochGeometric-Book-webfont.woff2') format('woff2'),
		url('../assets/fonts/kochgeometric_book_macroman/KochGeometric-Book-webfont.woff') format('woff'),
		url('../assets/fonts/kochgeometric_book_macroman/KochGeometric-Book-webfont.ttf') format('truetype'),
		url('../assets/fonts/kochgeometric_book_macroman/KochGeometric-Book-webfont.svg#koch_geometricregular') format('svg');
		font-weight: normal;
		font-style: normal;
	}

	@font-face {
		font-family: 'koch_geometricmedium';
		src: url('../assets/fonts/kochgeometric_medium_macroman/KochGeometric-Medium-webfont.eot');
		src: url('../assets/fonts/kochgeometric_medium_macroman/KochGeometric-Medium-webfont.eot?#iefix') format('embedded-opentype'),
		url('../assets/fonts/kochgeometric_medium_macroman/KochGeometric-Medium-webfont.woff2') format('woff2'),
		url('../assets/fonts/kochgeometric_medium_macroman/KochGeometric-Medium-webfont.woff') format('woff'),
		url('../assets/fonts/kochgeometric_medium_macroman/KochGeometric-Medium-webfont.ttf') format('truetype'),
		url('../assets/fonts/kochgeometric_medium_macroman/KochGeometric-Medium-webfont.svg#koch_geometricmedium') format('svg');
		font-weight: normal;
		font-style: normal;
	}

	body{
		color: #fff !important;
		font-family: "koch_geometricregular","Myriad Pro",Arial !important;
		background-color: #121211 !important;
	}

	#top_container{
		background-image: url(../assets/facesfull.jpg);
		background-size: 50%;
		min-height: 500px;
	}

	#top_container a{
		color:#fff;
	}

	#top_container h1, #top_container h2, #top_container h3, #top_container h4, #top_container h5 {
		color: #fff;
	}

	#top_container h2{
		font-size:1.25rem;
	}

	a{
		color: #7ac256 !important;
	}
</style>

<template>
	<b-container class="pb-4" id="top_container" fluid>
		<TopNav />
		<b-row>
			<div class="mx-auto py-4">
				<b-col lg="8" class="mx-auto text-center">
					<h1 class="mb-4">SoSa is a fun, friendly and privacy first community!</h1>
					<h2 class="py-2">Making friends online should be fun, free and privacy conscious so we're developing a new kind of social network.</h2>
					<h2 class="py-2">Follow SoSa's journey through the blog or our discord!</h2>
				</b-col>
			</div>
		</b-row>
		<LoginRegistrationModal />
		<LoginRegistrationModal :for-registration="true" />
	</b-container>
</template>
