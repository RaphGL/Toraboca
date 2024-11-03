<script>
	import SearchIcon from '$lib/icons/SearchIcon.svelte';
</script>

<div class="search-bar">
	<input type="text" placeholder="Search anything" />
	<SearchIcon />
</div>

<style>
	.search-bar {
		display: flex;
		align-items: center;
		padding: 0 1em;
		background-color: var(--bg-color1);
		border: 1px solid var(--fg-color2);
		border-radius: calc(var(--rounded-border) * 2);

		&:has(> input[type='text']:focus) {
			outline: 2px solid var(--fg-color1);
		}
	}

	input[type='text'] {
		color: var(--fg-color1);
		font-size: 1em;
		background: none;
		border: none;
		padding: 0.5em;
		outline: none;
		width: 100%;
	}
</style>
