<script>
 	import { Route } from 'svelte-router-spa'
	import "./main.css";
  import Nav from '../Nav/Navbar.svelte';
import Footer from '../footer/Footer.svelte';
	export let currentRoute: any;
	const parms ={} // your script goes here
</script>

<div class='layout min-h-screen bg-gradient-to-r from-gray-800 to-blue-600'> 
  <Nav/>
  <Route {currentRoute} {parms} />
	<Footer />
</div>

<style>
	.layout {
		display: grid;
		grid-template-rows: auto ;
	}
</style>