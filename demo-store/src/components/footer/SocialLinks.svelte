<script lang="ts">
  import Fa from "svelte-fa";
  import { faFacebook } from "@fortawesome/free-brands-svg-icons";
  export let icon = faFacebook;
</script>

<div class="bg-blue-900 p-2 ring-2 rounded-full">
  <Fa {icon} size="2x" class="text-gray-200 bg-blue-900" />
</div>
