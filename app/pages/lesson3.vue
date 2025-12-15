<!-- app/pages/lesson3.vue -->
<script setup lang="ts">
definePageMeta({
  layout: 'lesson',
});

import type { LessonData } from '~/components/widgets/Lesson/model/types';
import lesson3Content from '~~/data/content/lesson3.content';

// Каст данных к типу
const { sections, keyPoints, conclusion } = lesson3Content as LessonData;

// const { activeSection, setActiveSection } = useLessonContent();
</script>

<template>
  <div class="lesson-container lesson3">
    <LessonHero
      icon="📈"
      title="Урок 3: Эволюция блокчейнов"
      subtitle="От Bitcoin к Ethereum и TON: три поколения блокчейн-сетей"
    />

    <LessonKeyPointsSection :points="keyPoints" />

    <div class="lesson-content">
      <!-- <LessonSection
        v-for="(section, index) in sections"
        :key="index"
        :section="section"
        :index="index"
      /> -->
      <!-- Секция Bitcoin -->
      <SectionBitcoin :section="sections[0]" :index="0" />

      <!-- Секция Ethereum -->
      <SectionEthereum :section="sections[1]" :index="1" />

      <!-- Секция TON -->
      <SectionTon :section="sections[2]" :index="2" />

      <EvolutionTimeline :sections="sections" />
      <LessonConclusion :conclusion="conclusion" />
    </div>
  </div>
</template>

<!-- <style lang="scss">
.lesson3 {
  &-content {
    display: flex;
    flex-direction: column;
    gap: $spacing-3xl;
  }

  // Специфичные стили для урока 3
}
</style> -->

<style lang="scss">
.lesson3 {
  // Основные компоненты
  &-content {
    display: flex;
    flex-direction: column;
    gap: $spacing-3xl;
  }

  // Карточки ключевых точек
  .key-point-card {
    background: white;
    border-radius: $border-radius-lg;
    padding: $spacing-xl;
    border-left: 4px solid;
    box-shadow: $shadow-sm;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-2px);
      box-shadow: $shadow-md;
    }

    .lesson-number {
      margin-bottom: 1.3em;
    }

    // Модификаторы для разных цветов
    $border-colors: (
      0: $color-warning,
      1: $color-secondary,
      2: $color-primary,
    );

    @each $index, $color in $border-colors {
      &--#{$index} {
        border-color: $color;
      }
    }
  }

  .key-point-text {
    font-size: $font-size-lg;
    color: $color-text-medium;
    line-height: 1.6;
    margin: 0;
  }

  // Генерации
  $generation-colors: (
    0: $color-warning,
    1: $color-secondary,
    2: $color-primary,
  );

  @each $index, $color in $generation-colors {
    .generation-#{$index} {
      border-top: 6px solid $color;
    }
  }

  .generation-badge {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: 700;
    text-align: center;
    font-size: $font-size-2xl;
  }

  .generation-text {
    font-size: $font-size-xs;
    font-weight: 500;
    opacity: 0.9;
    margin-top: 4px;
  }

  // Точки
  .points-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: $spacing-md;
    margin: $spacing-lg 0;

    @media (min-width: 640px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 1024px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .point-item {
    background: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%);
    border-radius: $border-radius-md;
    padding: $spacing-lg;
    display: flex;
    align-items: flex-start;
    gap: $spacing-md;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.08);
    }
  }

  .point-icon {
    font-size: $font-size-2xl;
    flex-shrink: 0;
    margin-top: 2px;
  }

  .point-description {
    font-size: $font-size-lg;
    color: $color-text-medium;
    line-height: 1.6;
    margin: 0;
  }

  // Достижения
  .achievements-content {
    width: 100%;
  }

  .achievements-title {
    font-size: $font-size-xl;
    font-weight: 600;
    color: #065f46;
    margin: 0 0 $spacing-sm 0;
  }

  // Features
  .features-section {
    margin: $spacing-xl 0;

    &-title {
      font-size: $font-size-xl;
      font-weight: 600;
      color: $color-text-dark;
      margin: 0 0 $spacing-lg 0;
    }
  }

  .feature-card {
    display: flex;
    align-items: flex-start;
    gap: $spacing-md;
    padding: $spacing-lg;

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

  // Approach
  .approach-alert {
    .approach {
      &-content {
        width: 100%;
      }

      &-title {
        font-size: $font-size-xl;
        font-weight: 600;
        color: #6d28d9;
        margin: 0 0 $spacing-xs 0;
      }

      &-text {
        font-size: $font-size-lg;
        color: #6d28d9;
        line-height: 1.7;
        margin: 0;
      }
    }
  }

  // Improvements
  .improvements-section {
    margin: $spacing-xl 0;

    &-title {
      font-size: $font-size-xl;
      font-weight: 600;
      color: $color-text-dark;
      margin: 0 0 $spacing-lg 0;
    }
  }

  .improvement-card {
    display: flex;
    align-items: center;
    gap: $spacing-md;
    padding: $spacing-lg;
    text-align: left;

    &-icon {
      font-size: $font-size-2xl;
      flex-shrink: 0;
    }

    &-text {
      font-size: $font-size-lg;
      color: #065f46;
      line-height: 1.6;
      margin: 0;
    }
  }

  // Факты
  .facts-section {
    margin: $spacing-xl 0;

    &-title {
      font-size: $font-size-xl;
      font-weight: 600;
      color: $color-text-dark;
      margin: 0 0 $spacing-lg 0;
    }
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

  // Timeline
  .timeline-section {
    background: white;
    border-radius: $border-radius-xl;
    padding: $spacing-4xl;
    box-shadow: $shadow-md;
    margin-top: $spacing-xl;
    text-align: center;

    @media (max-width: 768px) {
      padding: $spacing-xl;
    }

    @media (max-width: 480px) {
      border-radius: $border-radius-lg;
      padding: $spacing-lg;
    }
  }

  .timeline-title {
    font-size: $font-size-4xl;
    font-weight: 700;
    color: $color-text-dark;
    text-align: center;
    margin: 0 0 $spacing-3xl 0;

    @media (max-width: 768px) {
      font-size: $font-size-2xl;
      margin-bottom: $spacing-xl;
    }

    @media (max-width: 480px) {
      font-size: $font-size-xl;
    }
  }

  .timeline-track {
    position: relative;
    height: 120px;
    margin: 0 $spacing-lg;

    @media (max-width: 768px) {
      height: 100px;
    }
  }

  .timeline-progress {
    position: absolute;
    top: 1em;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(
      90deg,
      $color-warning 0%,
      $color-secondary 50%,
      $color-primary 100%
    );
    border-radius: 2px;
  }

  .timeline-milestones {
    position: relative;
    height: 100%;
    width: 100%;
  }

  .timeline-milestone {
    position: absolute;
    top: 0;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100px;

    @media (max-width: 768px) {
      width: 80px;
    }
  }

  .milestone-dot {
    width: 2.3em;
    height: 2.3em;
    border-radius: 50%;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    margin-bottom: 12px;
    border: 0.3em solid white;

    @media (max-width: 768px) {
      width: 1.3em;
      height: 1.3em;
    }
  }

  .milestone-label {
    font-size: $font-size-base;
    font-weight: 600;
    color: $color-text-dark;
    text-align: center;
    margin-bottom: $spacing-xs;
  }

  .milestone-year {
    font-size: $font-size-sm;
    color: $color-text-light;
    font-weight: 500;
  }

  .timeline-description {
    text-align: center;
    margin-top: $spacing-2xl;
    padding-top: $spacing-xl;
    border-top: 1px solid #e5e7eb;

    p {
      font-size: $font-size-xl;
      color: $color-text-light;
      font-weight: 500;
      margin: 0;

      @media (max-width: 480px) {
        font-size: $font-size-lg;
      }
    }
  }

  // Общие медиа-запросы
  @media (max-width: 480px) {
    .points-grid {
      grid-template-columns: 1fr;
    }

    .lesson-grid--3 {
      grid-template-columns: 1fr;
    }
  }
}
</style>
