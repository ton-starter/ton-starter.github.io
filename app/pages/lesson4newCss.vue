<script setup lang="ts">
import {
  sections as sectionsData,
  keyPoints as keyPointsData,
  summary as summaryData,
} from './../../data/content/lesson4.content';
const sections = ref(sectionsData);
const keyPoints = ref(keyPointsData);
const summary = ref(summaryData);
</script>
<template>
  <div class="lesson-container lesson4">
    <div class="lesson-hero">
      <h1 class="lesson-hero__title">
        <span class="lesson-hero__icon">🔧</span>
        Урок 4: Смарт-контракты TON
      </h1>
      <p class="lesson-hero__subtitle">
        Устройство, адресация, изоляция и экономика смарт-контрактов
      </p>
    </div>

    <section class="lesson-key-points">
      <div class="lesson-key-points__header">
        <div class="lesson-key-points__icon">📝</div>
        <h2 class="lesson-key-points__title">Краткие тезисы</h2>
      </div>
      <div class="lesson-key-points__content">
        <div class="summary-points">
          <div
            v-for="(point, index) in keyPoints"
            :key="index"
            class="summary-point"
          >
            <div class="lesson-number lesson-number--circle-sm">
              {{ index + 1 }}
            </div>
            <p class="summary-point-text">{{ point.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <div class="lesson-content">
      <section
        v-for="(section, index) in sections"
        :key="index"
        class="lesson-section"
        :class="`contract-section--${index}`"
      >
        <div class="lesson-section__header">
          <div
            class="lesson-section__icon-wrapper"
            :class="`gradient--${section.gradient}`"
          >
            <span class="lesson-icon lesson-icon--large">{{
              section.icon
            }}</span>
          </div>
          <div class="lesson-section__title-wrapper">
            <h2 class="lesson-section__title">{{ section.title }}</h2>
            <h3 class="lesson-section__subtitle">{{ section.subtitle }}</h3>
          </div>
        </div>

        <div v-if="section.points" class="section-points">
          <ul class="lesson-list lesson-list--unordered">
            <li
              v-for="(point, i) in section.points"
              :key="i"
              class="lesson-list__item"
            >
              {{ point }}
            </li>
          </ul>
        </div>

        <p v-if="section.content" class="lesson-section__content">
          {{ section.content }}
        </p>

        <div v-if="section.features" class="features-section">
          <div
            v-for="feature in section.features"
            :key="feature.title"
            class="lesson-card feature-card"
          >
            <IconTitle
              :icon="feature.icon"
              :title="feature.title"
              class="feature-header"
            />
            <div class="feature-content">
              <p class="lesson-card__text">{{ feature.content }}</p>
              <div
                v-if="feature.explanation"
                class="lesson-alert lesson-alert--info explanation-alert"
              >
                <div class="lesson-alert__icon">❓</div>
                <p class="lesson-alert__text">{{ feature.explanation }}</p>
              </div>
              <div
                v-if="feature.benefit"
                class="lesson-alert lesson-alert--success"
              >
                <div class="lesson-alert__icon">✅</div>
                <p class="lesson-alert__text">{{ feature.benefit }}</p>
              </div>
            </div>
          </div>
        </div>

        <div v-if="section.question" class="lesson-question">
          <div class="lesson-question__icon">❓</div>
          <h3 class="lesson-question__text">{{ section.question }}</h3>
        </div>
        <div v-if="section.examples" class="examples-section">
          <div class="lesson-grid lesson-grid--3">
            <div
              v-for="(example, exampleIndex) in section.examples"
              :key="exampleIndex"
              class="lesson-card example-card"
            >
              <IconTitle
                :icon="example.icon"
                :title="example.title"
                class="example-header"
              />
              <p class="example-description">
                {{ example.description }}
              </p>
            </div>
          </div>
        </div>
        <div v-if="section.note" class="lesson-alert lesson-alert--warning">
          <div class="lesson-alert__icon">💡</div>
          <p class="lesson-alert__text">{{ section.note }}</p>
        </div>
        <div v-if="section.parameters" class="parameters-section">
          <h3 class="parameters-title">Параметры токена:</h3>
          <div class="parameters-list">
            <div
              v-for="(param, paramIndex) in section.parameters"
              :key="paramIndex"
              class="lesson-card parameter-card"
            >
              <IconTitle
                :icon="param.icon"
                :title="param.name"
                class="parameter-header"
              />
              <div class="parameter-content">
                <p class="parameter-description">
                  {{ param.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div v-if="section.process" class="lesson-example">
          <IconTitle
            v-if="section.process"
            :icon="section.process.icon"
            :title="section.process.title"
            class="process-header"
          />
          <ol class="lesson-example__steps">
            <li
              v-for="(step, stepIndex) in section.process.steps"
              :key="stepIndex"
              class="lesson-example__step"
            >
              <span class="lesson-example__number">{{ stepIndex + 1 }}</span>
              {{ step }}
            </li>
          </ol>
        </div>
        <div v-if="section.components" class="components-section">
          <div
            v-for="(component, componentIndex) in section.components"
            :key="componentIndex"
            class="lesson-card component-card"
            :class="`component-card--${componentIndex}`"
          >
            <IconTitle
              :icon="component.icon"
              :title="component.title"
              class="component-header"
            />
            <ul class="lesson-list lesson-list--unordered">
              <li
                v-for="(point, pointIndex) in component.points"
                :key="pointIndex"
                class="lesson-list__item"
              >
                {{ point }}
              </li>
            </ul>
            <div
              v-if="component.warning"
              class="lesson-alert lesson-alert--warning"
            >
              <div class="lesson-alert__icon">⚠️</div>
              <p class="lesson-alert__text">{{ component.warning }}</p>
            </div>
          </div>
        </div>
        <div v-if="section.process" class="process-list-section">
          <h3 class="process-list-title">Процесс заморозки:</h3>
          <ul class="lesson-list lesson-list--unordered">
            <li
              v-for="(item, itemIndex) in section.process"
              :key="itemIndex"
              class="lesson-list__item"
            >
              {{ item }}
            </li>
          </ul>
        </div>
        <div v-if="section.recovery" class="lesson-alert lesson-alert--info">
          <div class="lesson-alert__icon">{{ section.recovery.icon }}</div>
          <div class="recovery-content">
            <h3 class="recovery-title">{{ section.recovery.title }}</h3>
            <p class="recovery-description">
              {{ section.recovery.description }}
            </p>
          </div>
        </div>
      </section>
      <section class="considerations-section">
        <h2 class="considerations-title">🧠 Что важно при разработке</h2>
        <div class="lesson-grid lesson-grid--3">
          <div class="lesson-card consideration-card">
            <div class="consideration-icon">⚡</div>
            <h3 class="consideration-title">Стоимость газа</h3>
            <p class="consideration-text">
              Учитывайте стоимость исполнения инструкций в TVM. Каждая операция
              расходует газ, который оплачивается из баланса контракта.
            </p>
          </div>
          <div class="lesson-card consideration-card">
            <div class="consideration-icon">⏳</div>
            <h3 class="consideration-title">Аренда данных</h3>
            <p class="consideration-text">
              Планируйте бюджет для оплата хранения данных. Каждый бит данных
              требует постоянной оплаты "аренды".
            </p>
          </div>
          <div class="lesson-card consideration-card">
            <div class="consideration-icon">💰</div>
            <h3 class="consideration-title">Баланс контракта</h3>
            <p class="consideration-text">
              Следите за балансом контракта. Недостаток средств приведет к
              заморозке и остановке работы.
            </p>
          </div>
        </div>
      </section>
      <section class="lesson-conclusion">
        <div class="lesson-conclusion__content">
          <h2 class="lesson-conclusion__title">{{ summary.title }}</h2>
          <p class="lesson-conclusion__text">{{ summary.content }}</p>
        </div>
      </section>
    </div>
  </div>
</template>

<style lang="scss">
.lesson4 {
  .lesson-hero {
    &__title {
      font-size: 1.9rem;
    }
    &__subtitle {
      color: $color-text-medium;
      margin-top: $spacing-sm;
    }
    &__icon {
      display: inline-block;
      margin-right: $spacing-sm;
    }
  }

  .lesson-key-points {
    &__content {
      .key-point-card {
        padding: $spacing-lg;
        border-radius: $border-radius-md;
        box-shadow: $shadow-sm;
        display: flex;
        gap: $spacing-md;
        align-items: flex-start;

        .lesson-number {
          flex: 0 0 auto;
          margin-top: 0.2rem;
        }

        .lesson-card__text {
          margin: 0;
          color: $color-text-medium;
        }
      }
    }
  }

  .lesson-content {
    display: grid;
    gap: $spacing-3xl;

    .lesson-section {
      padding: $spacing-lg;
      border-radius: $border-radius-lg;

      &__header {
        display: flex;
        gap: $spacing-md;
        align-items: center;

        .lesson-section__icon-wrapper {
          width: 64px;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
        }

        &-title-wrapper {
          .lesson-section__title {
            margin: 0;
            font-size: 1.4rem;
          }

          .lesson-section__subtitle {
            margin: 0;
            color: $color-text-medium;
            font-size: $font-size-sm;
          }
        }
      }

      .lesson-list__item {
        margin-bottom: $spacing-sm;
      }

      .features-section {
        display: flex;
        gap: 1em;
        .feature-card {
          .feature-header {
            display: flex;
            gap: $spacing-md;
            align-items: center;
          }
        }
      }

      .lesson-alert {
        &--info {
        }
        &--warning {
        }
        &--success {
        }
      }
    }
  }

  .lesson-question {
    display: flex;
    align-items: center;
    gap: $spacing-sm;
    margin-top: $spacing-md;
    .lesson-question__icon {
      font-size: 1.2rem;
    }
    .lesson-question__text {
      margin: 0;
      font-weight: 600;
    }
  }

  // Responsive tweaks
  @media (max-width: 768px) {
    .lesson-content {
      grid-template-columns: 1fr;
    }
    .lesson-section & {
      padding: $spacing-md;
    }
  }
}
</style>
