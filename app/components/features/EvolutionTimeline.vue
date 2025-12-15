<script setup lang="ts">
import type { LessonSection } from '~/components/widgets/Lesson/model/types';
defineProps<{
  sections: LessonSection[];
}>();
</script>
<template>
  <section class="timeline-section">
    <h2 class="timeline-title">📊 Эволюция блокчейнов</h2>
    <div class="timeline-track">
      <div class="timeline-progress"></div>
      <div class="timeline-milestones">
        <div
          v-for="(section, index) in sections"
          :key="index"
          class="timeline-milestone"
          :style="{ left: `${(index / (sections.length - 1)) * 100}%` }"
        >
          <div
            class="milestone-dot"
            :class="`gradient--${section.gradient}`"
          ></div>
          <div class="milestone-label">{{ section.title }}</div>
          <div class="milestone-year">{{ 2009 + index * 6 }}</div>
        </div>
      </div>
    </div>
    <div class="timeline-description">
      <p>
        От простых переводов → к умным контрактам → к масштабируемым решениям
      </p>
    </div>
  </section>
</template>

<style lang="scss"></style>
