<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		label: Snippet;
		children: Snippet;
		align: 'left' | 'right' | 'center';
	};

	let { label, children, align = 'center' }: Props = $props();

	let showDropdown = $state(false);

	let dropdownElement: HTMLDivElement;
	function closeOnClickOutside(e: MouseEvent) {
		e.preventDefault();

		if (!dropdownElement.contains(e.target)) {
			showDropdown = false;
		}
	}

</script>

<svelte:window onclick={closeOnClickOutside} />

<div bind:this={dropdownElement} class="dropdown">
	<button onclick={() => (showDropdown = !showDropdown)}>{@render label()}</button>

	{#if showDropdown}
		<div class="dropdown-content {align}">
			{@render children()}
		</div>
	{/if}
</div>

<style>
	button {
		background: none;
		border: none;
		cursor: pointer;
	}

	.dropdown {
		position: relative;
		cursor: pointer;
	}

	.dropdown-content {
		cursor: auto;
		display: flex;
		flex-direction: column;
		gap: 0.5em;
		position: absolute;
		color: var(--fg-color1);
		background-color: var(--bg-color2);
		min-height: 3em;
		min-width: fit-content;
		box-shadow: 0 0 10px black;
		border-radius: var(--rounded-border);
		padding: 0.4em;
		z-index: 1;
	}

	.center {
		left: 50%;
		right: 50%;
		transform: translate(-50%, 0);
	}

	.right {
		left: 0.5em;
	}

	.left {
		right: 0.5em;
	}
</style>
