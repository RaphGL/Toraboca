<script>
	import '../app.css';
	import MenuBar from '$lib/components/MenuBar.svelte';
</script>

<div class="fill-screen">
	<MenuBar />
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
