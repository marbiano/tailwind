<script>
  import Slides from "./Slides";
  import One from "./slides/01";
  import "./main.css";

  let step = 0;
  let darkMode = false;

  const onChangeStep = (newStep) => {
    step = newStep;
  };

  const switchMode = () => (darkMode = !darkMode);

  setTimeout(() => {
    step = 1;
  });
</script>

<style>
  .mode-switcher {
    font-size: 0;
    width: 1.5rem;
    height: 1.5rem;
    background: var(--color-fg);
    border-radius: 50%;
    outline: none;
    opacity: 0.15;
    transition: opacity 200ms;
  }

  .mode-switcher:hover {
    opacity: 1;
  }
</style>

<svelte:head>
  <link
    rel="stylesheet"
    type="text/css"
    href="https://cloud.typography.com/6916494/7728412/css/fonts.css" />

  {#if darkMode}
    <style>
      :root {
        --color-fg: var(--color-white);
        --color-bg: var(--color-black);
      }
    </style>
  {/if}
</svelte:head>

<div class="root">
  <div class="container mx-auto px-4 text-lg">
    <header class="mt-8 flex justify-between">
      <img src="/logo.svg" class="block w-12" alt="logo" />
      <button
        class="mode-switcher"
        type="button"
        on:click={switchMode}
        title="Switch mode">
        Go Dark
      </button>
    </header>
    <div class="mt-32">
      <Slides {step} {onChangeStep} />
    </div>
  </div>
</div>
