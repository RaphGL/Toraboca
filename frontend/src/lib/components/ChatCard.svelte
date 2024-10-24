<script lang="ts">
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
	<div class="card-image">
		<img src={profilePic} alt={profilePicAlt} />
	</div>

	<div class="card-text">
		<div class="label">
			{label}
		</div>
		<div class="preview-msg">{previewMsg} - {timePassed}</div>
	</div>
</div>

<style>
	.card {
		display: flex;
		flex-direction: row;
		gap: 1.5em;
		padding: 1em;
		border-radius: var(--rounded-border);

		&:hover {
			background-color: var(--bg-color1);
			.card-image {
				background-color: var(--bg-color2);
			}
		}

	}

	.card-text {
		.label {
			color: var(--fg-color1);
		}

		.preview-msg {
			color: var(--fg-color2);
		}
	}

	.card-image {
		background-color: var(--bg-color1);
		width: 4em;
		height: 4em;
		text-align: center;
		border-radius: 50%;
	}

</style>
