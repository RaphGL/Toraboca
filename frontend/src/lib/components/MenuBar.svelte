<script lang="ts">
	import RequestIcon from '$lib/icons/RequestIcon.svelte';
	import ChatIcon from '$lib/icons/ChatIcon.svelte';
	import SettingsIcon from '$lib/icons/SettingsIcon.svelte';
	import LogoutIcon from '$lib/icons/LogoutIcon.svelte';
</script>

<nav>
	<h1>Toraboca</h1>
	<ul>
		<li><a href="/chat"><ChatIcon active={true} /></a></li>
		<li><a href="/requests"><RequestIcon active={false} /></a></li>
		<li><a href="/settings"><SettingsIcon active={false} /></a></li>
		<li><a href="/logout"><LogoutIcon /></a></li>
	</ul>
</nav>

<style>
	h1 {
	font-size: 1.3em;		
	}

	nav {
		background-color: var(--bg-color2);
		padding: 0 1em;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	nav ul {
		display: flex;
		gap: 2em;
		justify-content: center;
		list-style: none;

		li {
			padding: 0.5em;

			&:hover {
				background-color: var(--fg-color2);
				border-radius: var(--rounded-border);
			}

			a {
				color: inherit;
			}
		}
	}
</style>
