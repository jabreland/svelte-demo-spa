<script lang="typescript">
  import { Router } from "svelte-router-spa";
  import { initClient } from "@urql/svelte";
  import { routes } from "./routes";
  // Init the Urql graphql Client and it to the context
  initClient({
    url: "http://localhost:8080/graphql",
  });
</script>

<Router {routes} />
