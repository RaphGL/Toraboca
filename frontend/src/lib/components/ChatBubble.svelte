<script lang="ts">
	import EmojiIcon from '$lib/icons/EmojiIcon.svelte';
	import ReplyIcon from '$lib/icons/ReplyIcon.svelte';
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
	let messageHovered = $state(false);
</script>

{#snippet messageControls()}
	<ReplyIcon />
	<EmojiIcon />
{/snippet}

<div
	class="bubble-container"
	class:justify-right={myMsg}
	onmouseenter={() => (messageHovered = true)}
	onmouseleave={() => (messageHovered = false)}
>
	{#if myMsg && messageHovered}
		{@render messageControls()}
	{/if}

	{#if !myMsg}
		<img src={profilePic} alt="user's avatar" />
	{/if}

	<div class="chat-bubble" class:my-msg={myMsg}>
		{@render children()}
	</div>

	{#if !myMsg && messageHovered}
		{@render messageControls()}
	{/if}
</div>

<style>
	.bubble-container {
		display: flex;
		gap: 0.5em;
		align-items: center;

		img {
			width: 2.5em;
			height: 2.5em;
			border-radius: 50%;
			margin: auto 0;
			margin-left: 1em;
		}
	}

	.justify-right {
		justify-content: right;
	}

	.chat-bubble {
		background-color: var(--bg-color3);
		width: fit-content;
		padding: 0.7em;
		margin: 1em;
		border-radius: calc(var(--rounded-border) * 3);
	}

	.my-msg {
		background-color: var(--bg-color1);
	}
</style>
