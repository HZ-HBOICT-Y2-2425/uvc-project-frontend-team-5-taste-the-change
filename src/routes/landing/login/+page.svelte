<script>
  import { goto } from "$app/navigation";
  import { name } from "../../../stores/nameStore.js";
  import { onMount } from "svelte";

  export let data;

  let input = "";
  let usernameExists = false;

  function checkAvailability(event) {
  event.preventDefault();
  
  const userInput = document.getElementById("username").value;

  let usernameExists = false;

  data.data.forEach((user) => {
    if (user.username === userInput) {
      usernameExists = true;
    }
  });

  if (usernameExists) {
    console.log(`Logging in as ${userInput}`);
    name.set(userInput);
    goto('/');
  } else {
    console.log(`Signing up as ${userInput}`);
    name.set(userInput);
    goto('/landing/diet');
  }
}

</script>


<div>
  <h2 class="font-bold text-4xl absolute left-[32%] top-[35%]">
    Sign up / Log in to your account
  </h2>
  <section class="align-center h-96 w-96 p-5 absolute left-[36%] top-[45%]">
    <form>
      <label>
        Username
        <input
          class="mt-2 p-2 rounded border border-gray-300 w-96 focus:outline-none focus:ring-2 focus:ring-dark-green"
          id="username"
          type="text"
        />
      </label>
      <button
        class="mt-4 w-96 bg-dark-green text-white font-bold py-2 px-4 rounded-full shadow-md hover:bg-[#96DF77] transition-all duration-300"
        on:click={checkAvailability}
        type="button">Sign up / Log In</button
      >
    </form>
  </section>
</div>