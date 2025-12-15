<script setup lang="ts">
import type { LessonWarning } from '~/components/widgets/Lesson/model/types';
defineProps<{
  warning: LessonWarning;
  type: string;
}>();
</script>

<template>
  <div class="lesson-alert" :class="`lesson-alert--${type}`">
    <div class="lesson-alert__icon">{{ warning.icon }}</div>
    <div class="lesson-alert__text-wrap">
      <p class="lesson-alert__text">{{ warning.text }}</p>
    </div>
  </div>
</template>

<style lang="scss">
.lesson-alert {
  &__text-wrap {
    min-height: 45px;
    display: flex;
    align-items: center;
  }
}
</style>
