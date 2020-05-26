<script>
  import { fade } from 'svelte/transition';
</script>

<div in:fade={{ delay: 300 }} out:fade={{ duration: 150 }}>
  <div class="content">
    <slot />
  </div>
</div>
