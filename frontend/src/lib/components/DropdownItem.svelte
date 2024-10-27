<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		href: string;
		icon: Snippet | null;
		children: Snippet;
	};

	let { href = '#', icon = null, children }: Props = $props();
</script>

<div class="dropdown-item">
	{#if icon}
		<div class="icon">
			{@render icon()}
		</div>
	{/if}

	<div class="dropdown-label">
		{@render children()}
	</div>
</div>

<style>
	.dropdown-item {
		display: flex;
		align-items: center;
		gap: 1em;
		padding: 0.8em 1em;
		border-radius: var(--rounded-border);
		min-width: max-content;
	}

	.dropdown-item:hover {
		background-color: var(--bg-color1);
	}

	.icon {
		display: flex;
		align-items: center;
		height: 1em;
	}
</style>
