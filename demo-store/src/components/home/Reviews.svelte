<script lang="ts">
import { operationStore, query } from "@urql/svelte";
	import Points from "./Points.svelte";

	interface Point {
		message: string;
		src: string;
	}

	interface Points {
		homePage: Array<Point>;
	}

	const homePage = operationStore<Points>(`
    query {
      homePage {
				message
				src
			}
    }
  `);

	query<Points>(homePage);
</script>

<div class="flex justify-center my-8 bg-transparent">
	<h4 class="text-6xl text-gray-200">What Our Friends have To Say</h4>
</div>

<div class="flex justify-center">
	<div class="grid grid-cols-2">
		{#if $homePage?.data?.homePage}
			{#each $homePage?.data?.homePage as info }
				<Points src={info.src} message={info.message} />
			{/each}
		{/if}
	</div>
</div>