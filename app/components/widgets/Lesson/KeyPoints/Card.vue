<script setup lang="ts">
defineProps<{
  text: string;
  number: number;
  colorIndex: number;
}>();
</script>

<template>
  <div class="key-point-card" :class="`key-point-card--${colorIndex}`">
    <div class="lesson-number lesson-number--circle">
      {{ number + 1 }}
    </div>
    <p class="key-point-text">{{ text }}</p>
  </div>
</template>
