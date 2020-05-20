<script>
  import { fade } from "svelte/transition";
  export let onPrev;
  export let onNext;
</script>

<div in:fade={{ delay: 300 }} out:fade={{ duration: 150 }}>
  <div class="content">
    <slot />
  </div>
  <div class="mt-16 ml-24">
    {#if onPrev}
      <button type="button" on:click={onPrev}>Prev</button>
    {/if}
    {#if onNext}
      <button type="button" on:click={onNext}>Next</button>
    {/if}
  </div>
</div>
