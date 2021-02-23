<script lang="typescript">
  import {Router} from 'svelte-router-spa';
  import { initClient } from '@urql/svelte';
  import Home from './Home.svelte';
  import About from './About.svelte';
  const routes = [{name: "/", component: Home}, {name: "/about", component: About}]


  initClient({
    url: 'http://localhost:8080/graphql'
  })
</script>

<Router routes={routes} />