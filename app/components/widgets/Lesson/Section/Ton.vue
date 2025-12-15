<script setup lang="ts">
import type { LessonSection } from '~/components/widgets/Lesson/model/types';
defineProps<{
  section: LessonSection;
  index: number;
}>();
</script>

<template>
  <LessonSectionWrapper :index="index">
    <template #header>
      <LessonSectionHeader
        :title="section.title"
        :subtitle="section.subtitle"
        :gradient="section.gradient"
        :generation="index + 1"
      />
    </template>

    <p>{{ section.content }}</p>

    <LessonAlert
      v-if="section.approach"
      type="info"
      :warning="{ icon: '🎯', text: section.approach }"
    />

    <h3 class="improvements-title">Улучшения:</h3>
    <PointsGrid v-if="section.improvements" :points="section.improvements" />

    <FactList v-if="section.facts" :facts="section.facts" />
  </LessonSectionWrapper>
</template>
