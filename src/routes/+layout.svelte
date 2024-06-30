<script lang="ts">
	import Navbar from '$lib/Navbar.svelte';
	import 'normalize.css';
	import '../app.css';
	import { initAppSettings } from '$lib/appSettings.svelte';

	let { children } = $props();

	const appSettings = initAppSettings();

	$effect(() => {
		if (appSettings.theme == 'dark') {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	});
</script>

<div class="app flex flex-col min-h-screen bg-primary-1">
	<main class="flex-1 flex flex-col p-4 w-full max-w-5xl mx-auto">
		{@render children?.()}
	</main>

	<Navbar />
</div>
