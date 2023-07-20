<script lang="ts">
	import type { LayoutData } from './$types';
	import '../app.css';

	export let data: LayoutData;
</script>

<h1 class="text-3xl font-bold underline">Hello world!</h1>

<style lang="postcss">
	h1 {
		@apply text-red-500;
	}
</style>
