<script lang="ts">
	import BellInactiveIcon from '$lib/icons/BellInactiveIcon.svelte';
	import CallIcon from '$lib/icons/CallIcon.svelte';
	import DotsIcon from '$lib/icons/DotsIcon.svelte';
	import TrashIcon from '$lib/icons/TrashIcon.svelte';
	import Dropdown from './Dropdown.svelte';
	import DropdownItem from './DropdownItem.svelte';

	type Props = {
		chatName: string;
		chatInfo: string;
		chatProfilePic: string;
	};

	let { chatName, chatInfo, chatProfilePic = '#' }: Props = $props();
</script>

<header>
	<div class="chat-wrapper">
		<img src={chatProfilePic} alt="chat's avatar" />
		<div>
			<div class="chat-name">{chatName}</div>
			<div class="chat-info">{chatInfo}</div>
		</div>
	</div>
	<div class="chat-wrapper">
		<div><CallIcon /></div>
		<Dropdown align="left">
			{#snippet label()}
				<div style="color: var(--fg-color1);">
					<DotsIcon />
				</div>
			{/snippet}

			<DropdownItem icon={BellInactiveIcon}>Mute</DropdownItem>
			<DropdownItem>Media</DropdownItem>
			<DropdownItem>Block</DropdownItem>
			<DropdownItem icon={TrashIcon}>Delete</DropdownItem>
		</Dropdown>
	</div>
</header>

<style>
	header {
		display: flex;
		padding: 1em;
		justify-content: space-between;
	}

	img {
		width: 3em;
		height: 3em;
		border-radius: 50%;
		background-color: var(--bg-color1);
	}

	.chat-wrapper {
		display: flex;
		gap: 2em;
		margin: auto 0;
	}

	.chat-name {
		font-size: 1em;
		font-weight: bold;
	}

	.chat-info {
		font-size: 0.9em;
		color: var(--fg-color2);
	}
</style>
