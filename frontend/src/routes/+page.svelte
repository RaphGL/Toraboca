<script lang="ts">
	import ChatCard from '$lib/components/ChatCard.svelte';
	import ChatBubble from '$lib/components/ChatBubble.svelte';
	import MessageArea from '$lib/components/MessageArea.svelte';

	type ChatInfo = {
		name: string;
		message: string;
	};

	type MessageInfo = {
		content: string;
		userId: number;
		userName: string;
	};

	const chats: ChatInfo[] = [
		{ name: 'Geeks 2.0', message: '😂😂😂🔥' },
		{ name: 'Mom', message: 'come have lunch' },
		{ name: 'friend', message: 'u coming tonight?' }
	];

	const messages: MessageInfo[] = [
		{ content: 'hello there', userId: 2, userName: 'Raph' },
		{ content: 'hello there', userId: 2, userName: 'Raph' },
		{ content: 'hello there', userId: 1, userName: 'Raph' },
		{ content: 'hello there', userId: 2, userName: 'Raph' },
		{ content: 'hello there', userId: 2, userName: 'Raph' },
		{ content: 'hello there', userId: 1, userName: 'Raph' },
		{ content: 'hello there', userId: 1, userName: 'Raph' }
	];
</script>

<svelte:head>
	<title>Toraboca Messenger</title>
</svelte:head>

<div class="split-view">
	<aside>
		<header>Chats</header>

		<section>
			{#each chats as chat}
				<ChatCard label={chat.name} previewMsg={chat.message} timePassed="1m" />
			{/each}
		</section>
	</aside>

	<main>
		<div class="message-view">
			{#each messages as message}
				<ChatBubble userId={message.userId}>{message.content}</ChatBubble>
			{/each}
			<ChatBubble profilePic="#">hey, what's up</ChatBubble>
		</div>

		<MessageArea />
	</main>
</div>

<style>
	.split-view {
		display: grid;
		grid-template-rows: 1fr;
		grid-template-columns: 1fr 2fr;
		gap: 0.5em;
	}

	.message-view {
		overflow-y: auto;
	}

	aside {
		background-color: var(--bg-color2);
		display: flex;
		flex-direction: column;
		gap: 1em;
		padding: 1em;
		border-radius: var(--rounded-border);

		header {
			font-size: 1.5em;
			font-weight: bold;
		}
	}

	main {
		display: flex;
		flex-direction: column;
		background-color: var(--bg-color2);
		border-radius: var(--rounded-border);
		max-height: 100vh;
	}
</style>
