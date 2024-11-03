<script lang="ts">
	import RequestIcon from '$lib/icons/RequestIcon.svelte';
	import ChatIcon from '$lib/icons/ChatIcon.svelte';
	import SettingsIcon from '$lib/icons/SettingsIcon.svelte';
	import LogoutIcon from '$lib/icons/LogoutIcon.svelte';
	import UserEditIcon from '$lib/icons/UserEditIcon.svelte';
	import SunIcon from '$lib/icons/SunIcon.svelte';
	import MoonIcon from '$lib/icons/MoonIcon.svelte';
	import BellActiveIcon from '$lib/icons/BellActiveIcon.svelte';
	import BellInactiveIcon from '$lib/icons/BellInactiveIcon.svelte';

	import Dropdown from '$lib/components/Dropdown.svelte';
	import DropdownItem from '$lib/components/DropdownItem.svelte';
	import SearchBar from './SearchBar.svelte';

	import { page } from '$app/stores';

	let darkMode = $state(true);
	let isOnline = $state(true);
</script>

<nav>
	<h1>Toraboca</h1>
	<div class="search-bar">
		<SearchBar />
	</div>
	<ul>
		<li><a href="/c"><ChatIcon active={$page.url.pathname === '/c'} /></a></li>
		<li><a href="/c/requests"><RequestIcon active={$page.url.pathname === '/c/requests'} /></a></li>
		<li>
			<a href="/c/settings"><SettingsIcon active={$page.url.pathname === '/c/settings'} /></a>
		</li>
		<li>
			<Dropdown align="left">
				{#snippet label()}
					<img src="https://i.pinimg.com/736x/c0/74/9b/c0749b7cc401421662ae901ec8f9f660.jpg" />
				{/snippet}

				<DropdownItem icon={UserEditIcon}>Edit Profile</DropdownItem>
				<DropdownItem
					icon={isOnline ? BellActiveIcon : BellInactiveIcon}
					onclick={() => (isOnline = !isOnline)}
				>
					Status: {isOnline ? 'Online' : 'Offline'}
				</DropdownItem>
				<DropdownItem icon={darkMode ? SunIcon : MoonIcon} onclick={() => (darkMode = !darkMode)}>
					Theme: {darkMode ? 'Dark' : 'Light'}
				</DropdownItem>
				<DropdownItem icon={LogoutIcon}>Logout</DropdownItem>
			</Dropdown>
		</li>
	</ul>
</nav>

<style>
	h1 {
		font-size: 1.3em;
	}

	nav {
		padding: 0 2em;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	nav ul {
		display: flex;
		gap: 3em;
		justify-content: center;
		align-items: center;
		list-style: none;

		li a {
			color: inherit;
		}
	}

	nav li img {
		background-color: var(--fg-color2);
		border-radius: 50%;
		height: calc(2em - 2px);
		width: calc(2em - 2px);
		padding: 2px;
	}

	.search-bar {
		width: 40%;
	}
</style>
