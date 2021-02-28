<script lang="ts">
  import SocialLinks from "./SocialLinks.svelte";
  import Fa from "svelte-fa";
  import { faFacebookF, faInstagram, faGoogle, faGoodreads, faApple } from "@fortawesome/free-brands-svg-icons";
  import {faCopyright} from '@fortawesome/free-solid-svg-icons';
import FooterMenu from './FooterMenu.svelte';
</script>

<footer class="bg-gray-900 flex flex-col space-y-4 py-3" >
  <div class="flex space-x-4 justify-center">
    <SocialLinks icon={faFacebookF} />
    <SocialLinks icon={faApple} />
    <SocialLinks icon={faGoogle} />
    <SocialLinks icon={faInstagram} />
    <SocialLinks icon={faGoodreads} />
  </div>

  <div class="flex justify-center"> 
    <FooterMenu />  
  </div>
  <div class="text-gray-200 flex justify-center content-center space-x-2">
    <Fa icon={faCopyright} size="lg" />3021 By some company
  </div>
</footer>
