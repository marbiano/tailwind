<script>
  import { fade } from 'svelte/transition';
  export let name;
  export let onChangeStep;
  export let onChangeName;

  let customName;
  let prewords = ['It’s', 'I’m'];
  let intros = ['Hi! May I have your name?', 'Welcome. Who is it?'];

  const randomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
</script>

<style>
  button {
    border: 1px solid rgba(var(--color-fg-rgb), 0.25);
    padding: 1rem 4rem;
    border-radius: 3px;
    color: rgba(var(--color-fg-rgb), 0.75);
    background: var(--color-bg);
  }

  button:hover {
    background: rgba(var(--color-fg-rgb), 0.02);
    border-color: rgba(var(--color-fg-rgb), 0.15);
  }

  button:focus {
    outline: none;
  }

  h1 span {
    border-bottom: 2px solid var(--color-yellow);
  }

  input {
    display: inline-block;
    background: transparent;
    border: 1px solid rgba(var(--color-fg-rgb), 0.15);
    padding: 1rem 1.5rem;
    width: 24rem;
  }

  input:focus {
    outline: none;
  }

  .custom-input {
    position: relative;
  }

  .custom-input button {
    position: absolute;
    top: 1px;
    right: 1px;
    bottom: 1px;
    background: rgba(var(--color-fg-rgb), 0.02);
    color: rgba(var(--color-fg-rgb), 0.5);
    border-radius: 0 3px 3px 0;
    border: 0;
  }

  .custom-input button:disabled {
    background: rgba(var(--color-fg-rgb), 0.02);
    color: rgba(var(--color-fg-rgb), 0.33);
  }
</style>

<div class="content" in:fade={{ delay: 300 }} out:fade={{ duration: 150 }}>
  <h1>
    {#if name}
      Hi
      <span>{name}</span>
      , nice to meet you!
    {:else}{randomItem(intros)}{/if}
  </h1>
  {#if name}
    <p>
      My name is
      <strong>Martin Bavio</strong>
      and I created this tiny little website in order to tell you a bit about
      myself and why I think I could be a good fit for Tailwind UI. It's my
      first time doing something like this, so expect grammar errors and me
      talking a bit too much about myself. Apologies in advance for that! Now,
      without any further introduction, welcome to my house.
    </p>
    <button type="button" on:click={() => onChangeStep(1)} class="mt-12">
      Let’s Go &rarr;
    </button>
  {:else}
    <ul class="flex items-center text-xl">
      <li class="mr-8">
        <button type="button" on:click={() => onChangeName('Adam')}>
          {randomItem(prewords)} Adam
        </button>
      </li>
      <li class="mr-8">
        <button type="button" on:click={() => onChangeName('Steve')}>
          {randomItem(prewords)} Steve
        </button>
      </li>
      <li class="custom-input">
        <input bind:this={customName} placeholder="Somebody else..." />
        <button type="button" on:click={() => onChangeName(customName.value)}>
          &rarr;
        </button>
      </li>
    </ul>
  {/if}
</div>
