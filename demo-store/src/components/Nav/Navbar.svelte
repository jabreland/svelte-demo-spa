<script lang="ts">
  import Navlink from "./Navlink.svelte";
  import Iconbar from "./Iconbar.svelte";
  import NavButton from "./NavButton.svelte";
</script>

<div class=" bg-gradient-to-r from-gray-800 to-blue-600">
  <nav class="flex justify-between items-center py-4 px-10 ">
    <a href="/">
      <img src="/SimpleLogo.png" alt="Corporate Logo" class="max-h-10" />
    </a>
    <div class="ml-8 flex items-center">
      <Navlink to="/">HOME</Navlink>
      <Navlink to="/about">ABOUT</Navlink>
      <Navlink to="/contact">CONTACT US</Navlink>
    </div>
    <div class="flex flex-col items-center">
      <div class="mt-1">
        <NavButton styles="mr-2">Login</NavButton>
        <NavButton styles="bg-yellow-800 hover:bg-blue-100">Sign Up</NavButton>
      </div>
      <Iconbar />
    </div>
  </nav>
</div>
