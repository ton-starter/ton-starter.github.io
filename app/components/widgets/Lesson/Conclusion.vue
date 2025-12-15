<script setup lang="ts">
import type { LessonConclusion } from '~/components/widgets/Lesson/model/types';
defineProps<{
  conclusion: LessonConclusion;
}>();
</script>

<template>
  <section class="lesson-conclusion">
    <div class="lesson-conclusion__content">
      <h2 class="lesson-conclusion__title">{{ conclusion.title }}</h2>
      <p class="lesson-conclusion__text">{{ conclusion.content }}</p>
    </div>
  </section>
</template>
