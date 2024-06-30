<script lang="ts">
	import { page } from '$app/stores';
	import Library from '$lib/icons/Library.svg';
	import Music from '$lib/icons/Music.svg';
	import Settings from '$lib/icons/Settings.svg';

	interface Route {
		path: string;
		name: string;
		icon: string;
	}

	const routes: Route[] = [
		{
			path: '/',
			name: 'Library',
			icon: Library,
		},
		{
			path: '/player',
			name: 'Player',
			icon: Music,
		},
		{
			path: '/settings',
			name: 'Settings',
			icon: Settings,
		},
	];

	function isActive(route: Route) {
		return $page.url.pathname == route.path;
	}
</script>

<nav class="bg-primary-2">
	<ul class="flex flex-row justify-between">
		{#each routes as route}
			<li aria-current={isActive(route) ? 'page' : undefined} class="flex-1 flex justify-center">
				<a href={route.path} class="flex flex-col items-center w-full p-2">
					<div class:active={isActive(route)} class="flex justify-center w-full mx-4 p-1">
						<img src={route.icon} alt={route.name} class="max-h-16 icon" />
					</div>

					<span>{route.name}</span>
				</a>
			</li>
		{/each}
	</ul>
</nav>

<style>
	.icon {
		filter: invert(100%);
	}

	.active {
		background-color: white;
		border-radius: 50%;
	}

	nav > ul > li:not(:first-child) {
		border-left: 1px solid black;
	}
</style>
