<script>
	import '../app.css';
	import NavBar from '$lib/components/NavBar.svelte';
</script>

<div class="fill-screen">
	<NavBar />
	<slot />
</div>

<style>
	.fill-screen {
		display: flex;
		flex-direction: column;
		height: 100vh;
		width: 100vw;
	}
</style>
