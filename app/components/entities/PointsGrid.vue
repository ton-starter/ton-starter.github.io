<script setup lang="ts">
import type { SectionPoints } from '~/components/entities/model/types';
defineProps<{
  points: SectionPoints;
}>();
</script>

<template>
  <div v-if="points" class="points-grid">
    <div
      v-for="(point, pointIndex) in points"
      :key="pointIndex"
      class="point-item"
    >
      <div class="point-icon">{{ point.icon }}</div>
      <p class="point-description">{{ point.text }}</p>
    </div>
  </div>
</template>

<style lang="scss"></style>
