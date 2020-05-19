<script>
  export let onPrev;
  export let onNext;
</script>

<style>
  h1 {
    font-family: "Sentinel A", "Sentinel B";
    font-weight: 700;
    font-size: 3em;
    letter-spacing: -0.01em;
    line-height: 1.1;
  }

  p {
    max-width: 33em;
  }
</style>

<h1 class="mb-24 text-yellow-black-dark">What’s my working experience?</h1>
<p class="mb-8 ml-24">
  One of the most common challenges teams face when executing an incremental
  migration is handling the transition between the new and old systems.
  Fortunately, with Next.js there was never an issue with running both versions
  at once. With out-of-the-box support for prefetching new pages while jumping
  into the legacy app when needed, Zack and the team were able to easily migrate
  pages one-by-one. And since the intermediary hybrid-site was intelligently
  routed by Next.js, there was no need to maintain the overhead of explicitly
  tracking the migration's progress in the code itself.
</p>
<p class="mb-8 ml-24">
  In fact, throughout the migration, the ability of Next.js to make the
  extraction of common issues and patterns as easy as possible was a recurring
  theme. With each new version of Next.js, Zack and the team found they were
  constantly deleting internal code in favor of framework integrated tooling.
  Whenever the team needed to incorporate a new technology, Next.js had either
  first-class support or an endorsed example for them to follow.
</p>
<p class="mt-16 ml-24">
  <button type="button" on:click={onPrev}>Prev</button>
  <button type="button" on:click={onNext}>Next</button>
</p>
