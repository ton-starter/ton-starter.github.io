<script setup lang="ts">
defineProps<{ icon?: string; title: string }>();
</script>

<template>
  <div class="icon-title">
    <IconEmoji class="icon-title__icon" :icon="icon" />
    <div class="icon-title__title">{{ title }}</div>
  </div>
</template>

<style scoped lang="scss">
.icon-title {
  display: flex;
  align-items: center;
  gap: 0.75rem;

  &__icon {
    font-size: 1.7rem;
    line-height: 1;
  }

  &__title {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--color-text, #111);
  }
}

.lesson-section {
  .icon-title {
    margin-bottom: 1em;
  }
}
</style>
