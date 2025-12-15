<script setup lang="ts">
defineProps<{
  achievements: Array<string>;
}>();
</script>
<template>
  <div class="lesson-alert lesson-alert--success">
    <div class="lesson-alert__icon">🏆</div>
    <div class="achievements-content">
      <h3 class="achievements-title">Достижения:</h3>
      <ul class="lesson-list lesson-list--check">
        <li
          v-for="(achievement, index) in achievements"
          :key="index"
          class="lesson-list__item"
        >
          {{ achievement }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
.lesson-alert {
  .achievements-content {
    width: 100%;
  }

  .achievements-title {
    font-size: $font-size-xl;
    line-height: 45px;
    font-weight: 600;
    color: #065f46;
    margin: 0 0 $spacing-sm 0;
  }
}
</style>
