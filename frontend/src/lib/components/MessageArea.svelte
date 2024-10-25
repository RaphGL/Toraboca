<script lang="ts">
	let sendButton = $state("record");
	let message: HTMLDivElement;

	function changeSendButtonIfMessageNotEmpty() {		
		sendButton = message.innerText.trim().length > 0 ? "send" : "record";
	}

</script>

<div class="message-area">
	<div bind:this={message} oninput={changeSendButtonIfMessageNotEmpty} class="input" role="textbox" contenteditable> </div>
	<button>{sendButton}</button>
</div>

<style>
	.message-area {
		display: flex;
		width: 100%;
		justify-content: center;
		gap: 1em;
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
