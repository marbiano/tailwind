<script>
  import { fade } from "svelte/transition";
  import One from "./steps/One";
  import Two from "./steps/Two";
  import "./main.css";
  let step = 0;

  setTimeout(() => {
    step = 1;
  });

  const handleClick = () => {
    step = 1;
  };
</script>

<style>
  header {
    margin-top: 2rem;
  }

  header img {
    display: block;
    width: 3rem;
  }
</style>

<svelte:head>
  <link
    rel="stylesheet"
    type="text/css"
    href="https://cloud.typography.com/6916494/7728412/css/fonts.css" />
</svelte:head>
<div class="container mx-auto px-4 text-lg text-yellow-black-dark">
  <header on:click={handleClick}>
    <img src="/logo.svg" class="App-logo" alt="logo" />
  </header>
  <div class="mt-64 text-yellow-black-light" transition:fade>
    {#if step === 1}
      <div in:fade={{ delay: 300 }} out:fade={{ duration: 200 }}>
        <One onNext={() => (step = 2)} />
      </div>
    {:else if step === 2}
      <div in:fade={{ delay: 300 }} out:fade={{ duration: 200 }}>
        <Two onNext={() => (step = 3)} onPrev={() => (step = 1)} />
      </div>
    {/if}
  </div>
</div>
