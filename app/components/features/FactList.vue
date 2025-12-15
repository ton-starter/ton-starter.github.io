<script setup lang="ts">
defineProps<{
  facts: Array<string>;
}>();
</script>
<template>
  <div class="facts-section">
    <h3 class="facts-section-title">Факты:</h3>
    <ul class="facts-list">
      <li
        v-for="(fact, index) in facts"
        :key="index"
        class="fact-item lesson-list__item"
      >
        <div class="lesson-number lesson-number--circle-sm">
          {{ index + 1 }}
        </div>
        <p class="fact-text">{{ fact }}</p>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
.facts-section {
  margin: $spacing-xl 0;

  &-title {
    font-size: $font-size-xl;
    font-weight: 600;
    color: $color-text-dark;
    margin: 0 0 $spacing-lg 0;
  }

  .facts-list {
    display: flex;
    flex-direction: column;
    gap: $spacing-md;
  }

  .fact-item {
    display: flex;
    align-items: flex-start;
    gap: $spacing-md;
    padding: $spacing-lg;
    background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
    border-radius: $border-radius-md;
    border: 1px solid #93c5fd;
  }

  .fact-text {
    font-size: $font-size-lg;
    color: #1e40af;
    line-height: 1.6;
    margin: 0;
    flex: 1;
  }
}
</style>
