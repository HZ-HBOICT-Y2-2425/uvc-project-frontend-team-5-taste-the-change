<script>
  function goToHome() {
    goto('/');
  }

  function checkAvailability() {
    //check user input against database entries
    //if (username matches) {
    //login()};
    //else signup();
  }

  function login() {
    //login with information from database
    goToHome();
  }

  function signup() {
    //post name to database with statistics at 0
    goToHome();
  }
</script>

<div>
  <h2 class="font-bold text-4xl absolute left-[37.5%] top-[35%]">Sign up / Log in to your account</h2>
  <section class="align-center h-96 w-96 p-5 absolute left-[36%] top-[45%]">
    <form>
      <label>
        Username
        <input class="mt-2 p-2 rounded border border-gray-300 w-96 focus:outline-none focus:ring-2 focus:ring-dark-green" name="username" type="text">
      </label>
      <button class="mt-4 w-96 bg-dark-green text-white font-bold py-2 px-4 rounded-full shadow-md hover:bg-[#96DF77] transition-all duration-300">Sign up / Log In</button>
    </form>
  </section>
</div>