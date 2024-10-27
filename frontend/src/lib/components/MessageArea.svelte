<script lang="ts">
	import MicIcon from '$lib/icons/MicIcon.svelte';
	import SendIcon from '$lib/icons/SendIcon.svelte';

	// this is necessary for the :empty css pseudoclass to work in some browsers,
	// which insert a \n when the contenteditable is empty
	let messageBox: HTMLDivElement;
	let showVoiceRecorder = $state(true);
	function ensureEmptyContent() {
		if (messageBox.innerText.trim().length === 0) {
			messageBox.innerText = '';
			showVoiceRecorder = true;
		} else {
			showVoiceRecorder = false;
		}
	}
</script>

<div class="message-area">
	<div
		bind:this={messageBox}
		oninput={ensureEmptyContent}
		class="input"
		role="textbox"
		contenteditable
		data-placeholder="Message"
	></div>
	<button>
		{#if showVoiceRecorder}
			<MicIcon />
		{:else}
			<SendIcon />
		{/if}
	</button>
</div>

<style>
	[contenteditable]:empty:before {
		color: var(--fg-color2);
		content: attr(data-placeholder);
		display: block;
		pointer-events: none;
	}

	.message-area {
		display: flex;
		width: 100%;
		justify-content: center;
		gap: 1em;

		button {
			background: none;
			border: none;
			cursor: pointer;
			color: var(--fg-color2);
		}
	}

	.input {
		outline: none;
		color: var(--fg-color1);
		background-color: var(--bg-color2);
		border: none;
		border-bottom: 2px solid var(--bg-color1);
		min-height: 1em;
		margin: 0.5em;
		padding: 1em;
		border-radius: var(--rounded-border);
		width: 90%;
	}
</style>
