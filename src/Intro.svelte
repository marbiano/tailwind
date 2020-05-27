<script>
  import { fade } from 'svelte/transition';
  export let name;
  export let onChangeStep;
  export let onChangeName;

  let participants;

  let customName;
  let prewords = ['It’s', 'I’m'];
  let intros = ['Hi! May I have your name?', 'Welcome. Who is it?'];

  const randomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
</script>

<style>
  button {
    border: 1px solid rgba(var(--color-fg-rgb), 0.1);
    padding: 1rem 4rem;
    border-radius: 3px;
    color: rgba(var(--color-fg-rgb), 0.75);
    background: rgba(var(--color-fg-rgb), 0.02);
    transition: border 100ms, background 100ms, color 100ms;
  }

  button:hover {
    background: rgba(var(--color-fg-rgb), 0.035);
    border-color: rgba(var(--color-fg-rgb), 0.2);
    color: rgba(var(--color-fg-rgb), 1);
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
    padding-left: 2rem;
    padding-right: 2rem;
  }

  .custom-input button:disabled {
    background: rgba(var(--color-fg-rgb), 0.02);
    color: rgba(var(--color-fg-rgb), 0.33);
  }
</style>

<div class="content" in:fade={{ delay: 250 }} out:fade={{ duration: 150 }}>
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
      . I work as a web developer and created this little website to tell you a
      bit about myself and why I think I could be a good fit for
      <a href="https://jobs.tailwindui.com/full-stack-developer">
        this opportunity.
      </a>
    </p>

    <p>Without further ado, welcome to my place.</p>

    <button type="button" on:click={() => onChangeStep(1)} class="mt-8">
      Let’s Go &rarr;
    </button>
    <p class="note mt-32 text-base opacity-75">
      I used this tiny project as an excuse to take Svelte and Snowpack for a
      spin, and I enjoyed it!
      <a href="https://github.com/marbiano/tailwind">Here’s the code</a>
      in case you want to 👀.
    </p>
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
        <input
          bind:this={customName}
          on:keyup={(e) => e.code === 'Enter' && onChangeName(customName.value)}
          placeholder="Somebody else..." />
        <button type="button" on:click={() => onChangeName(customName.value)}>
          &rarr;
        </button>
      </li>
    </ul>
  {/if}
</div>
