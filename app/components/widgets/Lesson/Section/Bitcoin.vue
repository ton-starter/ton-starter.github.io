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
    <PointsGrid v-if="section.points" :points="section.points" />

    <LessonAlert
      v-if="section.limitation"
      type="warning"
      :warning="{ icon: '⚠️', text: section.limitation }"
    />
  </LessonSectionWrapper>
</template>
