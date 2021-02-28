<script lang="ts">
  export let styles: string = "";
</script>

<button 
class={`rounded orange-300 ring-2 ring-yellow-700 px-5 py-1 text-blue-100 hover:bg-yellow-800 hover:text-gray-800 ${styles}`}
  ><slot /></button
>
