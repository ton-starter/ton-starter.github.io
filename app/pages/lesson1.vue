<script setup lang="ts">
definePageMeta({
  layout: 'lesson',
});

import {
  sections as sectionsData,
  services as servicesData,
  apps as appsData,
  blockchainTools as blockchainToolsData,
  ecosystem as ecosystemData,
} from '~~/data/content/lesson1.content';
const sections = ref(sectionsData);
const services = ref(servicesData);
const apps = ref(appsData);
const blockchainTools = ref(blockchainToolsData);
const ecosystem = ref(ecosystemData);
</script>

<template>
  <div class="lesson-container">
    <!-- Hero Section -->
    <div class="lesson-hero">
      <h1 class="lesson-hero__title">
        <span class="lesson-hero__icon">⚡</span>
        Быстрое руководство по экосистеме TON
      </h1>
      <p class="lesson-hero__subtitle">
        Урок 1: Архитектура, сервисы и возможности
      </p>
    </div>

    <!-- Main Content -->
    <div class="article__content">
      <!-- Introduction Section -->
      <section class="lesson-section lesson-section--intro">
        <div class="lesson-section__header">
          <div
            class="lesson-section__icon-wrapper"
            :class="`gradient--${sections[0].gradient}`"
          >
            <span class="lesson-icon lesson-icon--medium">{{
              sections[0].icon
            }}</span>
          </div>
          <div class="lesson-section__title-wrapper">
            <h2 class="lesson-section__title">{{ sections[0].title }}</h2>
          </div>
        </div>
        <p class="lesson-section__content">
          {{ sections[0].content }}
        </p>
      </section>

      <!-- Three Sides of TON -->
      <section class="lesson-section">
        <div class="lesson-section__header">
          <div
            class="lesson-section__icon-wrapper"
            :class="`gradient--${sections[1].gradient}`"
          >
            <span class="lesson-icon lesson-icon--medium">{{
              sections[1].icon
            }}</span>
          </div>
          <div class="lesson-section__title-wrapper">
            <h2 class="lesson-section__title">{{ sections[1].title }}</h2>
          </div>
        </div>
        <p class="lesson-section__content">{{ sections[1].content }}</p>
        <div class="lesson-grid lesson-grid--3">
          <div
            v-for="(item, index) in sections[1].list"
            :key="index"
            class="lesson-card"
          >
            <div
              class="lesson-number lesson-number--circle lesson-number--circle-lg"
            >
              {{ index + 1 }}
            </div>
            <p class="lesson-card__text">{{ item }}</p>
          </div>
        </div>
      </section>

      <!-- Services Comparison -->
      <section class="lesson-section">
        <div class="lesson-section__header">
          <h2 class="lesson-section__title lesson-section__title--center">
            Типы сервисов
          </h2>
        </div>
        <div class="lesson-grid lesson-grid--2">
          <div
            v-for="(service, index) in services"
            :key="index"
            class="lesson-card"
            :class="`service-${service.color}`"
          >
            <div class="service-header">
              <span class="lesson-icon lesson-icon--large">{{
                service.icon
              }}</span>
              <h3 class="lesson-card__title">{{ service.type }}</h3>
            </div>
            <p class="lesson-card__text">{{ service.definition }}</p>
            <div v-if="service.example" class="lesson-example">
              <div class="lesson-example__title">Пример:</div>
              <p class="lesson-example__text">{{ service.example }}</p>
            </div>
            <div class="lesson-alert lesson-alert--warning">
              <div class="lesson-alert__icon">⚠️</div>
              <p class="lesson-alert__text">{{ service.warning }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Apps Comparison -->
      <section class="lesson-section">
        <div class="lesson-section__header">
          <h2 class="lesson-section__title lesson-section__title--center">
            Типы приложений
          </h2>
        </div>
        <div class="lesson-grid lesson-grid--2">
          <div v-for="(app, index) in apps" :key="index" class="lesson-card">
            <div class="app-header">
              <span class="lesson-icon lesson-icon--large">{{ app.icon }}</span>
              <h3 class="lesson-card__title">{{ app.type }}</h3>
            </div>
            <p class="lesson-card__text">{{ app.definition }}</p>
          </div>
        </div>
      </section>

      <!-- Blockchain Tools -->
      <section class="lesson-section">
        <div
          v-for="tool in blockchainTools"
          :key="tool.title"
          class="tools-section"
        >
          <div class="lesson-section__header">
            <div
              class="lesson-section__icon-wrapper"
              :class="`gradient--${tool.gradient}`"
            >
              <span class="lesson-icon lesson-icon--medium">💎</span>
            </div>
            <div class="lesson-section__title-wrapper">
              <h2 class="lesson-section__title">{{ tool.title }}</h2>
            </div>
          </div>
          <p class="lesson-section__content">{{ tool.description }}</p>
          <div class="lesson-grid lesson-grid--4">
            <div
              v-for="(item, index) in tool.items"
              :key="index"
              class="lesson-card tool-item"
            >
              <div class="lesson-icon lesson-icon--large">{{ item.icon }}</div>
              <h4 class="tool-name">{{ item.name }}</h4>
              <ul
                v-if="item.subitems"
                class="lesson-list lesson-list--unordered"
              >
                <li
                  v-for="(subitem, subIndex) in item.subitems"
                  :key="subIndex"
                  class="lesson-list__item"
                >
                  {{ subitem }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Conclusion -->
      <section class="lesson-conclusion">
        <div class="lesson-conclusion__content">
          <h2 class="lesson-conclusion__title">{{ ecosystem.title }}</h2>
          <p class="lesson-conclusion__text">{{ ecosystem.content }}</p>
          <div class="lesson-grid lesson-grid--4">
            <div
              v-for="(element, index) in ecosystem.elements"
              :key="index"
              class="ecosystem-item"
            >
              <div class="lesson-icon lesson-icon--large">
                {{ element.split(' ')[0] }}
              </div>
              <span class="ecosystem-label">{{ element.substring(2) }}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style lang="scss">
.lesson-container {
  // Centered section title modifier (kept local)
  .lesson-section__title--center {
    text-align: center;
    width: 100%;
    margin-bottom: 0;
  }

  // Service badges used only on this page
  .service-danger {
    border-color: #fecaca;
    background: #fef2f2;
  }

  .service-success {
    border-color: #bbf7d0;
    background: #f0fdf4;
  }

  .service-header,
  .app-header {
    display: flex;
    align-items: center;
    gap: $spacing-sm;
    margin-bottom: $spacing-md;
  }

  .lesson-example {
    background: rgba(255, 255, 255, 0.5);
    border-radius: $border-radius-md;
    padding: $spacing-md;
    margin: $spacing-md 0;

    &__title {
      margin-bottom: $spacing-xs;
    }

    &__text {
      font-size: $font-size-base;
      color: $color-text-medium;
      line-height: 1.6;
      margin: 0;
    }
  }

  .tool {
    &-item {
      @include flex-center;
      flex-direction: column;
      text-align: center;

      .lesson-icon {
        margin-bottom: $spacing-md;
      }

      .lesson-list {
        text-align: left;
      }
    }
    &-name {
      font-size: $font-size-lg;
      font-weight: 600;
      color: $color-text-dark;
      margin-bottom: $spacing-sm;
    }
  }

  .ecosystem-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: $spacing-xs;

    .lesson-icon {
      margin-bottom: $spacing-xs;
    }
  }

  .ecosystem-label {
    color: #d1d5db;
    font-size: $font-size-base;
    text-align: center;
  }
}

// Responsive tweaks that are specific to this page
@media (max-width: 640px) {
  .lesson-hero__icon {
    font-size: $font-size-3xl;
  }

  .lesson-card__title {
    font-size: $font-size-lg;
  }
}

@media (max-width: 480px) {
  .lesson-container {
    padding: $spacing-xl 0;
  }

  .lesson-hero__title {
    font-size: $font-size-xl;
  }

  .lesson-section__title {
    font-size: $font-size-lg;
  }
}
</style>
