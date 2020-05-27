<script>
  import { fade } from 'svelte/transition';
  import Slide from './Slide';
  import Slide01 from './slides/01.svelte';
  import Slide02 from './slides/02.svelte';
  import Slide03 from './slides/03.svelte';
  import Slide04 from './slides/04.svelte';
  import Slide05 from './slides/05.svelte';
  export let step;
  export let name;
  export let onChangeStep;
  export let prune;

  function handleKeyUp(event) {
    if ([32, 39].includes(event.keyCode) && step < 5) {
      onChangeStep(step + 1);
    }

    if (event.keyCode === 37 && step > 0) {
      onChangeStep(step - 1);
    }
  }
</script>

<style>
  button {
    border: 1px solid rgba(var(--color-fg-rgb), 0.1);
    padding: 0 1rem;
    border-radius: 3px;
    color: rgba(var(--color-fg-rgb), 0.4);
    background: var(--color-bg);
  }

  button:hover {
    background: rgba(var(--color-fg-rgb), 0.015);
    border-color: rgba(var(--color-fg-rgb), 0.075);
  }

  button:focus {
    outline: none;
  }

  button:disabled {
    border: 1px solid rgba(var(--color-fg-rgb), 0.05);
    color: rgba(var(--color-fg-rgb), 0.2);
    cursor: default;
  }

  button:disabled:hover {
    background: var(--color-bg);
    border-color: rgba(var(--color-fg-rgb), 0.05);
  }
</style>

<svelte:window on:keyup={handleKeyUp} />
<div class="mb-16 flex items-center" in:fade={{ delay: 150 }}>
  <button
    type="button"
    class="mr-2"
    disabled={step === 0}
    on:click={() => onChangeStep(step - 1)}>
    &larr;
  </button>
  <button
    type="button"
    disabled={step === 5}
    on:click={() => onChangeStep(step + 1)}>
    &rarr;
  </button>
  {#if prune && [1, 2].includes(step)}
    <span class="text-sm text-gray-500 ml-4" out:fade={{ duration: 150 }}>
      Tip: use arrow keys to navigate.
    </span>
  {/if}
</div>
{#if step === 1}
  <Slide onNext={() => onChangeStep(2)}>
    <Slide01 />
  </Slide>
{:else if step === 2}
  <Slide
    onPrev={() => onChangeStep(step - 1)}
    onNext={() => onChangeStep(step + 1)}>
    <Slide02 />
  </Slide>
{:else if step === 3}
  <Slide
    onPrev={() => onChangeStep(step - 1)}
    onNext={() => onChangeStep(step + 1)}>
    <Slide03 />
  </Slide>
{:else if step === 4}
  <Slide
    onPrev={() => onChangeStep(step - 1)}
    onNext={() => onChangeStep(step + 1)}>
    <Slide04 />
  </Slide>
{:else if step === 5}
  <Slide onPrev={() => onChangeStep(step - 1)}>
    <Slide05 {name} />
  </Slide>
{/if}
