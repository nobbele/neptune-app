<script lang="ts">
	import { getAppSettings } from '$lib/appSettings.svelte';

	const appSettings = getAppSettings();

	$effect(() => {
		console.log(appSettings.theme);
	});
</script>

<div>
	<ul>
		<label for="theme">Theme</label>
		<select id="theme" bind:value={appSettings.theme}>
			<option value="dark">Dark</option>
			<option value="light">Light</option>
		</select>
	</ul>
</div>
