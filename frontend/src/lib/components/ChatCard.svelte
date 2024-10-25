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
	<img src={profilePic} alt={profilePicAlt} />

	<div class="card-text">
		<div class="label">
			<div>{label}</div>
			<div class="label-timestamp">{timePassed}</div>
		</div>
		<div class="preview-msg">{previewMsg} -</div>
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
		}

		&:hover {
			background-color: var(--bg-color1);

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

		.label-timestamp {
			color: var(--fg-color2);
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
