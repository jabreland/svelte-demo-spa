<script lang="ts">
  import { Navigate } from "svelte-router-spa";
  export let to: string;
</script>

<Navigate {to} styles="text-blue-100 text-lg pl-8 underline hover:text-yellow-800" ><slot /></Navigate>