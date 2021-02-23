<script>
  import {operationStore, query} from '@urql/svelte';

  const message = operationStore(`
    query {
      hello
    }
  `)
  query(message);
  console.log(message.data);
</script>

{#if $message.fetching}
  <p>Loading...</p>
  {:else if $message.error}
  <p>Error {$message?.error?.message}</p>
  {:else}
  <p>{$message?.data?.hello}</p>
{/if}