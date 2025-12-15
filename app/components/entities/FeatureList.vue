<script setup lang="ts">
import type { featurePoints } from '~/components/entities/model/types';
defineProps<{
  features: featurePoints;
}>();
</script>

<template>
  <div v-if="features" class="features-section">
    <h3 class="features-title">Ключевые особенности:</h3>
    <div class="lesson-grid lesson-grid--2">
      <div
        v-for="(feature, featureIndex) in features"
        :key="featureIndex"
        class="lesson-card feature-card"
      >
        <div class="feature-icon">{{ feature.icon }}</div>
        <p class="feature-text">{{ feature.text }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.features-section {
  display: flex;
  gap: 20px;
  margin: $spacing-xl 0;
  flex-wrap: wrap;

  font-size: 1rem;
  color: black;
  line-height: 1.3;

  &-title {
    font-size: $font-size-xl;
    font-weight: 600;
    color: $color-text-dark;
    margin: 0 0 $spacing-lg 0;
  }

  .feature-card {
    display: flex;
    align-items: flex-start;
    gap: $spacing-md;
    padding: $spacing-lg;

    .feature-header {
      display: flex;
      gap: $spacing-md;
      align-items: center;
    }

    &-icon {
      font-size: $font-size-2xl;
      flex-shrink: 0;
      margin-top: 2px;
    }

    &-text {
      font-size: $font-size-lg;
      color: #1e40af;
      line-height: 1.6;
      margin: 0;
    }
  }
}
</style>
