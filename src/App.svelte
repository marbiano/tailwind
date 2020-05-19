<script>
  import { fade } from "svelte/transition";
  import One from "./steps/One";
  import Two from "./steps/Two";
  import Three from "./steps/Three";
  import Four from "./steps/Four";
  import Five from "./steps/Five";
  import "./main.css";
  let step = 0;

  setTimeout(() => {
    step = 1;
  });
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
  <header>
    <img src="/logo.svg" class="App-logo" alt="logo" />
  </header>
  <div class="mt-32 text-yellow-black-light">
    <div class="text-gray-500 mb-6">{step}/5</div>
    {#if step === 1}
      <div in:fade={{ delay: 300 }} out:fade={{ duration: 200 }}>
        <One onNext={() => (step = 2)} />
      </div>
    {:else if step === 2}
      <div in:fade={{ delay: 300 }} out:fade={{ duration: 200 }}>
        <Two onNext={() => (step = 3)} onPrev={() => (step = 1)} />
      </div>
    {:else if step === 3}
      <div in:fade={{ delay: 300 }} out:fade={{ duration: 200 }}>
        <Three onNext={() => (step = 4)} onPrev={() => (step = 2)} />
      </div>
    {:else if step === 4}
      <div in:fade={{ delay: 300 }} out:fade={{ duration: 200 }}>
        <Four onNext={() => (step = 5)} onPrev={() => (step = 3)} />
      </div>
    {:else if step === 5}
      <div in:fade={{ delay: 300 }} out:fade={{ duration: 200 }}>
        <Five onPrev={() => (step = 4)} />
      </div>
    {/if}
  </div>
</div>
