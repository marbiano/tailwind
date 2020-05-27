<script>
  import { fade } from 'svelte/transition';
  export let name;
  export let onChangeStep;
  export let onChangeName;

  let customName;
  let prewords = ['It’s', 'I’m', ''];
  let intros = [
    'Hi! May I have your name?',
    'Welcome. Who is it?',
    'You’re...',
    'Hey, howdy, hi! Who is it in there?',
    'Hello, mister...'
  ];

  const randomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
</script>

<style>
  h1 span {
    border-color: var(--color-yellow);
  }

  .button {
    color: rgba(var(--color-fg-rgb), 0.75);
    background: rgba(var(--color-fg-rgb), 0.02);
    border-color: rgba(var(--color-fg-rgb), 0.1);
    transition: border 100ms, background 100ms, color 100ms;
  }

  .button:hover {
    color: rgba(var(--color-fg-rgb), 1);
    background: rgba(var(--color-fg-rgb), 0.035);
    border-color: rgba(var(--color-fg-rgb), 0.2);
  }

  .custom-input {
    border-color: rgba(var(--color-fg-rgb), 0.15);
  }

  .custom-button {
    top: 1px;
    right: 1px;
    bottom: 1px;
    background: rgba(var(--color-fg-rgb), 0.02);
    color: rgba(var(--color-fg-rgb), 0.5);
  }

  .custom-button:disabled {
    background: rgba(var(--color-fg-rgb), 0.02);
    color: rgba(var(--color-fg-rgb), 0.33);
  }
</style>

<div class="content" in:fade={{ delay: 250 }} out:fade={{ duration: 150 }}>
  <h1>
    {#if name}
      Hi
      <span class="border-b-2 border-b-solid">{name}</span>
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

    <button
      class="button block rounded border border-solid py-4 px-16 w-full
      md:w-auto focus:outline-none mt-8 shadow-sm"
      type="button"
      on:click={() => onChangeStep(1)}>
      Let’s Go &rarr;
    </button>
    <p class="note mt-32 text-base opacity-75">
      I used this tiny project as an excuse to take Svelte and Snowpack for a
      spin, and I enjoyed it!
      <a href="https://github.com/marbiano/tailwind">Here’s the code</a>
      in case you want to 👀.
    </p>
  {:else}
    <ul class="md:flex items-center text-xl">
      <li class="mb-8 md:mb-0 md:mr-8">
        <button
          class="button block rounded border border-solid py-4 px-16 w-full
          md:w-auto focus:outline-none shadow-sm"
          type="button"
          on:click={() => onChangeName('Adam')}>
          {randomItem(prewords)} Adam
        </button>
      </li>
      <li class="mb-8 md:mb-0 md:mr-8">
        <button
          class="button block rounded border border-solid py-4 px-16 w-full
          md:w-auto focus:outline-none shadow-sm"
          type="button"
          on:click={() => onChangeName('Steve')}>
          {randomItem(prewords)} Steve
        </button>
      </li>
      <li class="relative">
        <label class="hidden" for="custom-name">Your name</label>
        <input
          class="custom-input inline-block bg-transparent rounded border
          border-solid py-4 px-6 w-full md:w-96 focus:outline-none shadow-sm"
          bind:this={customName}
          on:keyup={(e) => e.code === 'Enter' && onChangeName(customName.value)}
          placeholder="Somebody else..."
          id="custom-name" />
        <button
          class="custom-button absolute px-8 rounded focus:outline-none"
          type="button"
          on:click={() => onChangeName(customName.value)}>
          &rarr;
        </button>
      </li>
    </ul>
  {/if}
</div>
