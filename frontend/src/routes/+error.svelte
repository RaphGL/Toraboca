<script>
	import { page } from '$app/stores';
	import NavBar from '$lib/components/NavBar.svelte';

	let loggedIn = $state(true);
</script>

<div class="error-page">
	{#if loggedIn}
		<NavBar />
	{/if}

	<div class="error-box">
		<h1>{$page.status}</h1>
		<h2>{$page.error?.message}</h2>
	</div>
</div>

<style>
	.error-page {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 100%;
	}

	.error-box {
		text-align: center;
		margin: auto;
	}

	h1 {
		font-weight: bold;
		font-size: 5em;
		margin: 0;
	}

	h2 {
		margin: 0;
	}
</style>
