<script>
  import { fly } from 'svelte/transition';
  import Intro from './Intro.svelte';
  import Slides from './Slides';
  import One from './slides/01';
  import './main.css';

  let name = '';
  let step = 0;
  let hours = new Date().getHours();
  let darkMode = hours < 6 || hours > 19;
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
  .mode-switcher img {
    width: 100%;
  }
  .is-dark .mode-switcher img {
    width: 80%;
  }

  .progress-bar {
    background: var(--color-fg);
  }
</style>

<svelte:head>
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

<div class="root {darkMode ? 'is-dark' : ''}">
  <div class="container mx-auto px-8 text-lg">
    <header class="mt-8 flex justify-between items-center">
      <img
        src="/logo.svg"
        class="block w-8 md:w-12 cursor-pointer"
        alt="logo"
        on:click={() => onChangeStep(0)} />
      <button
        class="mode-switcher w-8 h-8 rounded-full focus:outline-none flex
        items-center justify-center overflow-hidden transition-colors
        duration-200"
        type="button"
        on:click={switchMode}
        title="Switch mode">
        {#if darkMode}
          <img
            src="/moon.svg"
            alt="Dark mode"
            in:fly={{ y: -50, delay: 50, duration: 100 }} />
        {:else}
          <img
            src="/sun.svg"
            alt="Light mode"
            in:fly={{ y: 50, duration: 100, delay: 50 }} />
        {/if}
      </button>
      <div
        class="progress-bar fixed top-0 left-0 h-1 transition-width duration-200"
        style="width: {progress * 100}%" />
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
