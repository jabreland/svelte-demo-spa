<script lang="ts">
  export let message: string;
  export let src: string;
</script>

<style>
  p {
    bottom: 0;
  }
</style>

<div class="flex relative m-8 box">
  <img {src} alt="Person(s)" width={500}/>
  <p class="text-lg absolute max-w-sm p-4 text-blue-50 bg-black opacity-80" >{message}</p>
</div>
