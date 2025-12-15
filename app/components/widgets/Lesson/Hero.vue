<script setup lang="ts">
defineProps<{
  title: string;
  subtitle: string;
  icon: string;
}>();
</script>

<template>
  <div class="lesson-hero">
    <h1 class="lesson-hero__title">
      <span class="lesson-hero__icon">{{ icon }}</span>
      {{ title }}
    </h1>
    <p class="lesson-hero__subtitle">
      {{ subtitle }}
    </p>
  </div>
</template>
