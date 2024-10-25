<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		profilePic: string | null;
		userId: number;
		children: Snippet;
	};
	let { profilePic = '#', userId, children }: Props = $props();

	// message sent by the user of the account
	// todo: change to compare to actual userid gotten from the backend
	let myMsg = userId == 1;
</script>

<div class="bubble-container">
	{#if !myMsg}
		<img src={profilePic} alt="user's avatar"/>
	{/if}
	<div class="chat-bubble" class:my-msg={myMsg}>
		{@render children()}
	</div>
</div>

<style>
	.bubble-container {
		display: flex;

		img {
			width: 2.5em;
			height: 2.5em;
			border-radius: 50%;
			margin: auto 0;
			margin-left: 1em;
		}
	}

	.chat-bubble {
		background-color: var(--bg-color1);
		width: fit-content;
		padding: 0.7em;
		margin: 1em;
		border-radius: calc(var(--rounded-border) * 3);
	}

	.my-msg {
		background-color: var(--fg-color2);
		margin-left: auto;
		margin-right: 1em;
	}
</style>
