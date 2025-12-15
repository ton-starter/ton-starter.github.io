<script setup lang="ts">
defineProps<{
  index: number;
}>();
</script>

<template>
  <section class="lesson-section" :class="`generation-${index}`">
    <slot name="header" />
    <div class="lesson-section__content">
      <slot />
    </div>
    <slot name="footer" />
  </section>
</template>
