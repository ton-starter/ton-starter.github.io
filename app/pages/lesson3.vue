<script setup lang="ts">
import {
  sections as sectionsData,
  keyPoints as keyPointsData,
  conclusion as conclusionData,
} from './../../data/content/lesson3.content';
const sections = ref(sectionsData);
const keyPoints = ref(keyPointsData);
const conclusion = ref(conclusionData);
</script>

<template>
  <div class="lesson-container lesson3">
    <!-- Hero Section -->
    <div class="lesson-hero">
      <h1 class="lesson-hero__title">
        <span class="lesson-hero__icon">📈</span>
        Урок 3: Эволюция блокчейнов
      </h1>
      <p class="lesson-hero__subtitle">
        От Bitcoin к Ethereum и TON: три поколения блокчейн-сетей
      </p>
    </div>

    <!-- Key Points -->
    <section class="lesson-key-points">
      <div class="lesson-key-points__header">
        <div class="lesson-key-points__icon">📝</div>
        <h2 class="lesson-key-points__title">Краткие тезисы</h2>
      </div>
      <div class="lesson-key-points__content">
        <div class="lesson-grid lesson-grid--3">
          <div
            v-for="(point, index) in keyPoints"
            :key="index"
            class="key-point-card"
            :class="`key-point-card--${Math.floor(index / 3)}`"
          >
            <div class="lesson-number lesson-number--circle">
              {{ index + 1 }}
            </div>
            <p class="key-point-text">{{ point }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <div class="lesson-content">
      <!-- Sections -->
      <section
        v-for="(section, index) in sections"
        :key="index"
        class="lesson-section"
        :class="`generation-${index}`"
      >
        <!-- Section Header -->
        <div class="lesson-section__header">
          <div
            class="lesson-section__icon-wrapper"
            :class="`gradient--${section.gradient}`"
          >
            <div class="generation-badge">
              {{ index + 1 }}
            </div>
          </div>
          <div class="lesson-section__title-wrapper">
            <h2 class="lesson-section__title">{{ section.title }}</h2>
            <h3 class="lesson-section__subtitle">{{ section.subtitle }}</h3>
          </div>
        </div>

        <!-- Content -->
        <p class="lesson-section__content">
          {{ section.content }}
        </p>

        <!-- Points Grid -->
        <div v-if="section.points" class="points-grid">
          <div
            v-for="(point, pointIndex) in section.points"
            :key="pointIndex"
            class="point-item"
          >
            <div class="point-icon">{{ point.icon }}</div>
            <p class="point-description">{{ point.text }}</p>
          </div>
        </div>

        <!-- Achievements -->
        <div
          v-if="section.achievements"
          class="lesson-alert lesson-alert--success"
        >
          <div class="lesson-alert__icon">🏆</div>
          <div class="achievements-content">
            <h3 class="achievements-title">Достижения:</h3>
            <ul class="lesson-list lesson-list--check">
              <li
                v-for="(achievement, achIndex) in section.achievements"
                :key="achIndex"
                class="lesson-list__item"
              >
                {{ achievement }}
              </li>
            </ul>
          </div>
        </div>

        <!-- Limitation -->
        <div
          v-if="section.limitation"
          class="lesson-alert lesson-alert--warning"
        >
          <div class="lesson-alert__icon">⚠️</div>
          <p class="lesson-alert__text">{{ section.limitation }}</p>
        </div>

        <!-- Features -->
        <div v-if="section.features" class="features-section">
          <h3 class="features-title">Ключевые особенности:</h3>
          <div class="lesson-grid lesson-grid--2">
            <div
              v-for="(feature, featureIndex) in section.features"
              :key="featureIndex"
              class="lesson-card feature-card"
            >
              <div class="feature-icon">{{ feature.icon }}</div>
              <p class="feature-text">{{ feature.text }}</p>
            </div>
          </div>
        </div>

        <!-- Warning -->
        <div v-if="section.warning" class="lesson-alert lesson-alert--danger">
          <div class="lesson-alert__icon">{{ section.warning.icon }}</div>
          <p class="lesson-alert__text">{{ section.warning.text }}</p>
        </div>

        <!-- Approach -->
        <div
          v-if="section.approach"
          class="lesson-alert lesson-alert--info approach-alert"
        >
          <div class="lesson-alert__icon">🎯</div>
          <div class="approach-content">
            <h3 class="approach-title">Подход к масштабированию:</h3>
            <p class="approach-text">{{ section.approach }}</p>
          </div>
        </div>

        <!-- Improvements -->
        <div v-if="section.improvements" class="improvements-section">
          <h3 class="improvements-title">Улучшения:</h3>
          <div class="lesson-grid lesson-grid--3">
            <div
              v-for="(improvement, impIndex) in section.improvements"
              :key="impIndex"
              class="lesson-card improvement-card"
            >
              <div class="improvement-icon">{{ improvement.icon }}</div>
              <p class="improvement-text">{{ improvement.text }}</p>
            </div>
          </div>
        </div>

        <!-- Facts -->
        <div v-if="section.facts" class="facts-section">
          <h3 class="facts-title">Факты:</h3>
          <div class="facts-list">
            <div
              v-for="(fact, factIndex) in section.facts"
              :key="factIndex"
              class="fact-item"
            >
              <div class="lesson-number lesson-number--circle-sm">
                {{ factIndex + 1 }}
              </div>
              <p class="fact-text">{{ fact }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Evolution Timeline -->
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
            От простых переводов → к умным контрактам → к масштабируемым
            решениям
          </p>
        </div>
      </section>

      <!-- Conclusion -->
      <section class="lesson-conclusion">
        <div class="lesson-conclusion__content">
          <h2 class="lesson-conclusion__title">{{ conclusion.title }}</h2>
          <p class="lesson-conclusion__text">{{ conclusion.content }}</p>
        </div>
      </section>
    </div>
  </div>
</template>

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
