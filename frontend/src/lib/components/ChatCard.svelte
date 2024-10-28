<script lang="ts">
	import ArchiveIcon from '$lib/icons/ArchiveIcon.svelte';
	import CheckIcon from '$lib/icons/CheckIcon.svelte';
	import DotsIcon from '$lib/icons/DotsIcon.svelte';
	import TrashIcon from '$lib/icons/TrashIcon.svelte';
	import VolumeMuteIcon from '$lib/icons/VolumeMuteIcon.svelte';
	import Dropdown from './Dropdown.svelte';
	import DropdownItem from './DropdownItem.svelte';

	type Props = {
		label: string;
		previewMsg: string;
		profilePic: string;
		profilePicAlt: string;
		timePassed: string;
	};

	let { label, previewMsg, profilePic = '#', profilePicAlt = '#', timePassed }: Props = $props();
</script>

<div class="card">
	<img src={profilePic} alt={profilePicAlt} />

	<div class="card-text">
		<div class="label">
			<div>{label}</div>
		</div>

		<div class="preview-msg">
			<div>{previewMsg} - {timePassed}</div>
		</div>
	</div>

	<div class="chat-settings">
		<Dropdown>
			{#snippet label()}
				<div class="icon">
					<DotsIcon />
				</div>
			{/snippet}
			<DropdownItem icon={CheckIcon}>Mark as read</DropdownItem>
			<DropdownItem icon={VolumeMuteIcon}>Mute chat</DropdownItem>
			<DropdownItem icon={ArchiveIcon}>Archive</DropdownItem>
			<DropdownItem icon={TrashIcon}>Delete</DropdownItem>
		</Dropdown>
	</div>
</div>

<style>
	.card {
		display: flex;
		flex-direction: row;
		gap: 1.5em;
		padding: 1em;
		border-radius: var(--rounded-border);

		img {
			height: 4em;
			width: 4em;
			border-radius: 50%;
			background-color: var(--bg-color1);
			text-align: center;
			align-content: center;
		}

		&:hover {
			background-color: var(--bg-color1);
			box-shadow: 0 0 2px var(--fg-color2);

			img {
				background-color: var(--bg-color2);
			}
		}
	}

	.card-text {
		width: 100%;
		.label {
			color: var(--fg-color1);
			display: flex;
			justify-content: space-between;
		}
	}

	.preview-msg {
		display: flex;
		padding: 0.5em 0;
		justify-content: space-between;
		color: var(--fg-color2);
	}

	.icon {
		color: var(--fg-color1);
		visibility: hidden;
		background-color: var(--bg-color2);
		border-radius: 50%;
		padding: 0.5em;
		box-shadow: 0 0 2px var(--fg-color2);
	}

	.card:hover .icon {
		visibility: visible;
	}

	.chat-settings {
		align-content: center;
	}
</style>
