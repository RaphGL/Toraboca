<script>
	import { page } from '$app/stores';
</script>

<div class="error-box">
	<h1>{$page.status}</h1>
	<h2>{$page.error?.message}</h2>
</div>

<style>
	.error-box {
		display: flex;
		flex-direction: column;
		justify-items: center;
		text-align: center;
		margin: auto;
		padding: 3em 10em;
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
