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

    <AchievementList
      v-if="section.achievements"
      :achievements="section.achievements"
    />

    <FeatureList v-if="section.features" :features="section.features" />
    <LessonAlert
      v-if="section.warning"
      type="danger"
      :warning="section.warning"
    />
  </LessonSectionWrapper>
</template>
