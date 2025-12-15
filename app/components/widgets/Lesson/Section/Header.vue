<script setup lang="ts">
defineProps<{
  title: string;
  subtitle: string;
  gradient: string;
  generation: number;
}>();
</script>

<template>
  <div class="lesson-section__header">
    <div class="lesson-section__icon-wrapper" :class="`gradient--${gradient}`">
      <div class="generation-badge">
        {{ generation }}
      </div>
    </div>
    <div class="lesson-section__title-wrapper">
      <h2 class="lesson-section__title">{{ title }}</h2>
      <h3 class="lesson-section__subtitle">{{ subtitle }}</h3>
    </div>
  </div>
</template>
