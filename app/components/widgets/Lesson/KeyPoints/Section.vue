<script setup lang="ts">
defineProps<{
  points: string[];
}>();
</script>

<template>
  <!-- Key Points -->
  <section class="lesson-key-points">
    <div class="lesson-key-points__header">
      <div class="lesson-key-points__icon">📝</div>
      <h2 class="lesson-key-points__title">Краткие тезисы</h2>
    </div>
    <div class="lesson-key-points__content">
      <div class="lesson-grid lesson-grid--3">
        <LessonKeyPointsCard
          v-for="(point, index) in points"
          :number="index"
          :text="point"
          :colorIndex="Math.floor(index / 3)"
        />
      </div>
    </div>
  </section>
</template>
