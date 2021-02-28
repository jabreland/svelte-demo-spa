<script>
  import { operationStore, mutation } from "@urql/svelte";

  let email: string

  interface Email {
    registerEmail: String;
  }

  const registerEmailStore = operationStore<Email>(`
      mutation ($email: String) {
        registerEmail(email: $email)
      }
    `);
  const registerEmailMutation = mutation(registerEmailStore);

  function register(): void {
    registerEmailMutation({ email });
  }

  function handleInputChange (event: Event): void {
    email = (event.target as HTMLInputElement).value;
    console.log(email)
  }
  console.log($registerEmailStore?.data?.registerEmail)
</script>

<div
  class="flex w-100 bg-gray-50 h-52 flex-col justify-center text-center space-y-6"
>
  <h5 class="text-4xl">
    Sign up for our news letter and get lots of email about stuff!
  </h5>
  <div class="text-center flex justify-center">
    <form
     on:submit|preventDefault={register}
    class="flex justify-center text-center content-center space-x-4">
      <label class="text-xl py-1" for="email"> Email: </label>
      <input
        name="email"
        type="text"
        class="border-2 border-gray-600 border-solid"
        on:change={handleInputChange}
      />
      <div>
        <button
          type="submit"
          class="bg-green-800 px-3 py-2 rounded text-white ring-1 hover:shadow-md"
          >Sign Up!</button
        >
      </div>
    </form>
  </div>
    {#if $registerEmailStore?.data?.registerEmail}
    <div class="text-lg">{$registerEmailStore?.data?.registerEmail} </div>
    {/if}
</div>
