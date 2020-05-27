<script>
  import Intro from './Intro.svelte';
  import Slides from './Slides';
  import One from './slides/01';
  import './main.css';

  let name = '';
  let step = 0;
  let darkMode = false;
  let prune = true;

  $: progress = step / 5;

  const onChangeName = (newName) => {
    name = newName;
  };

  const onChangeStep = (newStep) => {
    step = newStep;
    if (step > 2 && prune) {
      prune = false;
    }
  };

  const switchMode = () => (darkMode = !darkMode);
</script>

<style>
  .mode-switcher {
    font-size: 0;
    width: 1.75rem;
    height: 1.75rem;
    border: 2px solid var(--color-fg);
    border-radius: 50%;
    outline: none;
    transition: opacity 200ms;
  }

  .mode-switcher:hover {
    background: var(--color-fg);
  }

  .progress-bar {
    height: 0.33rem;
    position: fixed;
    top: 0;
    left: 0;
    background: var(--color-fg);
    transition: width 200ms;
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
        --color-fg-rgb: var(--color-white-rgb);
        --color-bg-rgb: var(--color-black-rgb);
        --color-copy: var(--color-light-gray);
      }
    </style>
  {/if}
</svelte:head>

<div class="root">
  <div class="container mx-auto px-8 text-lg">
    <header class="mt-8 flex justify-between items-center">
      <img src="/logo.svg" class="block w-12" alt="logo" />
      <button
        class="mode-switcher"
        type="button"
        on:click={switchMode}
        title="Switch mode">
        Go Dark
      </button>
      <div class="progress-bar" style="width: {progress * 100}%" />
    </header>
    <div class="mt-32">
      {#if step === 0}
        <Intro {name} {onChangeStep} {onChangeName} />
      {:else}
        <Slides {step} {onChangeStep} {prune} {name} />
      {/if}
    </div>
  </div>
</div>
