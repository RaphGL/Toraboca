<script lang="ts">
	import ChatCard from '$lib/components/ChatCard.svelte';
	import ChatBubble from '$lib/components/ChatBubble.svelte';
	import MessageArea from '$lib/components/MessageArea.svelte';
	import ChatHeader from '$lib/components/ChatHeader.svelte';

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
		{ name: 'Geeks 2.0', message: '😂😂😂🔥' },
		{ name: 'Mom', message: 'come have lunch' },
		{ name: 'Geeks 2.0', message: '😂😂😂🔥' },
		{ name: 'Mom', message: 'come have lunch' },
		{ name: 'Geeks 2.0', message: '😂😂😂🔥' },
		{ name: 'Mom', message: 'come have lunch' },
		{ name: 'Geeks 2.0', message: '😂😂😂🔥' },
		{ name: 'Mom', message: 'come have lunch' },
		{ name: 'Geeks 2.0', message: '😂😂😂🔥' },
		{ name: 'Mom', message: 'come have lunch' },
		{ name: 'Geeks 2.0', message: '😂😂😂🔥' },
		{ name: 'Mom', message: 'come have lunch' },
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
		{ content: 'hello there', userId: 2, userName: 'Raph' },
		{ content: 'hello there', userId: 2, userName: 'Raph' },
		{ content: 'hello there', userId: 1, userName: 'Raph' },
		{ content: 'hello there', userId: 2, userName: 'Raph' },
		{ content: 'hello there', userId: 2, userName: 'Raph' },
		{ content: 'hello there', userId: 1, userName: 'Raph' },
		{ content: 'hello there', userId: 2, userName: 'Raph' },
		{ content: 'hello there', userId: 2, userName: 'Raph' },
		{ content: 'hello there', userId: 1, userName: 'Raph' },
		{ content: 'hello there', userId: 2, userName: 'Raph' },
		{ content: 'hello there', userId: 2, userName: 'Raph' },
		{ content: 'hello there', userId: 1, userName: 'Raph' },
		{ content: 'hello there', userId: 2, userName: 'Raph' },
		{ content: 'hello there', userId: 2, userName: 'Raph' },
		{ content: 'hello there', userId: 1, userName: 'Raph' },
		{ content: 'hello there', userId: 2, userName: 'Raph' },
		{ content: 'hello there', userId: 2, userName: 'Raph' },
		{ content: 'hello there', userId: 1, userName: 'Raph' },
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
		<section>
			{#each chats as chat}
				<ChatCard label={chat.name} previewMsg={chat.message} timePassed="1m" />
			{/each}
		</section>
	</aside>

	<main>
		<ChatHeader chatName="Friend" chatInfo="last active 10 minutes ago" />

		<div class="message-wrapper">
			<div class="message-view">
				{#each messages as message}
					<ChatBubble userId={message.userId}>{message.content}</ChatBubble>
				{/each}
				<ChatBubble userId={1}>hey, what's up</ChatBubble>
			</div>
		</div>

		<MessageArea />
	</main>
</div>

<style>
	.split-view {
		display: grid;
		grid-template-columns: 1fr 3fr;
		align-items: center;
		height: 100%;
		margin: 2em 0.5em;
		margin-top: 1em;
		gap: 0.5em;
	}

	.split-view > * {
		box-shadow: 0 0 2px var(--bg-color2);
		padding: 1em;
		height: 0;
		min-height: 100%;
	}

	.message-wrapper {
		overflow-y: auto;

		.message-view {
			display: flex;
			flex-direction: column;
			justify-content:end;
		}
	}

	aside {
		background-color: var(--bg-color2);
		display: flex;
		flex-direction: column;
		gap: 1em;
		border-radius: var(--rounded-border);
		overflow: hidden;

		section {
			overflow-y: auto;
		}
	}

	main {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		background-color: var(--bg-color2);
		border-radius: var(--rounded-border);
	}
</style>
