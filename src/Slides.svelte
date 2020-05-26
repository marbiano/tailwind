<script>
  import Slide from './Slide';
  import Slide01 from './slides/01.svelte';
  import Slide02 from './slides/02.svelte';
  import Slide03 from './slides/03.svelte';
  import Slide04 from './slides/04.svelte';
  import Slide05 from './slides/05.svelte';
  export let step;

  export let onChangeStep;
</script>

<div class="text-gray-500 mb-16">{step}/5</div>
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
    <Slide05 />
  </Slide>
{/if}
