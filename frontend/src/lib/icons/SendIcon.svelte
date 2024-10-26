<script lang="ts">
	let sendButtonHovered = $state(false);
</script>

<div
	onmouseenter={() => (sendButtonHovered = true)}
	onmouseleave={() => (sendButtonHovered = false)}
>
	{#if sendButtonHovered}
		<svg
			class="w-6 h-6 text-gray-800 dark:text-white"
			aria-hidden="true"
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			fill="currentColor"
			viewBox="0 0 24 24"
		>
			<path
				fill-rule="evenodd"
				d="M3 4a1 1 0 0 0-.822 1.57L6.632 12l-4.454 6.43A1 1 0 0 0 3 20h13.153a1 1 0 0 0 .822-.43l4.847-7a1 1 0 0 0 0-1.14l-4.847-7a1 1 0 0 0-.822-.43H3Z"
				clip-rule="evenodd"
			/>
		</svg>
	{:else}
		<svg
			class="w-6 h-6 text-gray-800 dark:text-white"
			aria-hidden="true"
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			fill="none"
			viewBox="0 0 24 24"
		>
			<path
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M16.153 19 21 12l-4.847-7H3l4.848 7L3 19h13.153Z"
			/>
		</svg>
	{/if}
</div>

<style>
	div {
		color: var(--fg-color2);
	}
</style>
