<script setup lang="ts">
definePageMeta({
  layout: 'page',
});

const steps = ref([
  {
    id: 0,
    title: 'Шаг 0. Ознакомься с документацией',
    subtitle: 'Быстрое руководство по экосистеме TON',
    links: [
      { text: 'Урок 1', to: '/lesson1' },
      { text: 'Урок 2', to: '/lesson2' },
      { text: 'Урок 3', to: '/lesson3' },
      { text: 'Урок 4', to: '/lesson4' },
      { text: 'Урок 5', to: '/lesson/005-tokens' },
    ],
    icon: '📚',
    gradient: 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)',
  },
  {
    id: 1,
    title: 'Шаг 1. Установи TON Wallet',
    content:
      'Скачай TON Wallet из официального источника и создай новый кошелёк. Сохрани секретные слова безопасно.',
    button: {
      text: 'Установить Wallet',
      href: 'https://ton.org/wallets',
      external: true,
      icon: '👛',
    },
    icon: '📱',
    gradient: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
  },
  {
    id: 2,
    title: 'Шаг 2. Пополни баланс',
    content:
      'Купи TON на бирже или получи от друга. Переведи монеты на свой кошелёк TON для начала.',
    icon: '💰',
    gradient: 'linear-gradient(135deg, #10b981 0%, #34d399 100%)',
  },
  {
    id: 3,
    title: 'Шаг 3. Изучи приложения TON',
    content:
      'Используй DeFi, NFT, Games и другие DApps. Проверь проекты в TON Apps.',
    button: {
      text: 'Открыть ton.app',
      href: 'https://ton.app/',
      external: true,
      icon: '🚀',
    },
    icon: '🔍',
    gradient: 'linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)',
  },
  {
    id: 4,
    title: 'Шаг 4. Безопасность и сообщества',
    content:
      'Береги seed-фразы, используй официальные ресурсы и присоединяйся к сообществам TON в Telegram.',
    icon: '🛡️',
    gradient: 'linear-gradient(135deg, #ef4444 0%, #f87171 100%)',
  },
]);

function handleRestart() {
  console.log('restart btn');
}
</script>

<template>
  <div class="guide">
    <!-- Header -->
    <div class="guide__header">
      <h1 class="guide__title">
        <span class="guide__title-icon">🚀</span>
        Быстрый старт в TON
      </h1>
      <p class="guide__subtitle">
        Пошаговое руководство для новичков в экосистеме TON
      </p>
    </div>

    <!-- Steps -->
    <div class="guide__steps">
      <div
        v-for="step in steps"
        :key="step.id"
        class="guide__step"
        :class="`guide__step--${step.id}`"
      >
        <!-- Step Header -->
        <div class="guide__step-header">
          <div
            class="guide__step-icon-wrapper"
            :style="{ background: step.gradient }"
          >
            <span class="guide__step-icon">{{ step.icon }}</span>
            <span class="guide__step-number">{{ step.id }}</span>
          </div>
          <div class="guide__step-title-wrapper">
            <h2 class="guide__step-title">{{ step.title }}</h2>
            <h3 v-if="step.subtitle" class="guide__step-subtitle">
              {{ step.subtitle }}
            </h3>
          </div>
        </div>

        <!-- Step Content -->
        <div class="guide__step-content">
          <p v-if="step.content" class="guide__step-text">
            {{ step.content }}
          </p>

          <!-- Links List -->
          <div v-if="step.links" class="guide__links">
            <h4 class="guide__links-title">Доступные уроки:</h4>
            <ul class="guide__links-list">
              <li
                v-for="(link, index) in step.links"
                :key="index"
                class="guide__links-item"
              >
                <NuxtLink :to="link.to" class="guide__link">
                  <span class="guide__link-icon">📖</span>
                  {{ link.text }}
                </NuxtLink>
              </li>
            </ul>
          </div>

          <!-- Button -->
          <div v-if="step.button" class="guide__step-actions">
            <a
              :href="step.button.href"
              :target="step.button.external ? '_blank' : '_self'"
              class="guide__button"
              :class="`guide__button--${step.id}`"
            >
              <span class="guide__button-icon">{{ step.button.icon }}</span>
              {{ step.button.text }}
              <span v-if="step.button.external" class="guide__button-external">
                ↗
              </span>
            </a>
          </div>
        </div>

        <!-- Step Footer -->
        <div class="guide__step-footer">
          <div class="guide__step-progress">
            <div class="guide__progress-bar">
              <div
                class="guide__progress-fill"
                :style="{
                  width: `${((step.id + 1) / steps.length) * 100}%`,
                  background: step.gradient,
                }"
              ></div>
            </div>
            <span class="guide__progress-text">
              Шаг {{ step.id + 1 }} из {{ steps.length }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Completion -->
    <div class="guide__completion">
      <div class="guide__completion-content">
        <h2 class="guide__completion-title">🎉 Поздравляем!</h2>
        <p class="guide__completion-text">
          Вы прошли все шаги для начала работы в TON экосистеме. Теперь вы
          готовы к самостоятельному изучению и использованию всех возможностей
          блокчейна TON.
        </p>
        <div class="guide__completion-actions">
          <WhiteButton label="Начать сначала" @click="handleRestart" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.guide {
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px 16px;
  box-sizing: border-box;

  &__header {
    text-align: center;
    margin-bottom: 48px;
  }

  &__title {
    font-size: 2.5rem;
    font-weight: 700;
    color: #1f2937;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;

    &-icon {
      font-size: 3rem;
    }
  }

  &__subtitle {
    font-size: 1.25rem;
    color: #6b7280;
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
  }

  &__steps {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  &__step {
    background: white;
    border-radius: 24px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
    padding: 32px;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;

    &:hover {
      box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
      transform: translateY(-2px);
    }

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 6px;
      height: 100%;
      opacity: 0.8;
    }

    &--0::before {
      background: linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%);
    }
    &--1::before {
      background: linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%);
    }
    &--2::before {
      background: linear-gradient(135deg, #10b981 0%, #34d399 100%);
    }
    &--3::before {
      background: linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%);
    }
    &--4::before {
      background: linear-gradient(135deg, #ef4444 0%, #f87171 100%);
    }
  }

  &__step-header {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 24px;
  }

  &__step-icon-wrapper {
    width: 80px;
    height: 80px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    flex-shrink: 0;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  &__step-icon {
    font-size: 2.5rem;
    z-index: 1;
  }

  &__step-number {
    position: absolute;
    top: -8px;
    right: -8px;
    width: 32px;
    height: 32px;
    background: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 0.875rem;
    color: #1f2937;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  }

  &__step-title-wrapper {
    flex: 1;
  }

  &__step-title {
    font-size: 1.75rem;
    font-weight: 700;
    color: #1f2937;
    margin: 0 0 8px 0;
    line-height: 1.3;
  }

  &__step-subtitle {
    font-size: 1.125rem;
    font-weight: 500;
    color: #6b7280;
    margin: 0;
    line-height: 1.4;
  }

  &__step-content {
    margin-bottom: 24px;
  }

  &__step-text {
    font-size: 1.125rem;
    color: #4b5563;
    line-height: 1.7;
    margin: 0 0 24px 0;
  }

  &__links {
    background: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%);
    border-radius: 16px;
    padding: 24px;
    margin-bottom: 24px;
    border: 1px solid #e5e7eb;

    &-title {
      font-size: 1.25rem;
      font-weight: 600;
      color: #1f2937;
      margin: 0 0 16px 0;
    }

    &-list {
      list-style: none;
      padding: 0;
      margin: 0;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 12px;
    }

    &-item {
      margin: 0;
    }
  }

  &__link {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 16px;
    background: white;
    border-radius: 12px;
    color: #3b82f6;
    text-decoration: none;
    font-weight: 500;
    font-size: 1.125rem;
    transition: all 0.3s ease;
    border: 2px solid transparent;

    &:hover {
      background: #3b82f6;
      color: white;
      transform: translateY(-2px);
      box-shadow: 0 8px 16px rgba(59, 130, 246, 0.2);
      border-color: #3b82f6;
    }

    &-icon {
      font-size: 1.5rem;
    }
  }

  &__step-actions {
    margin-top: 24px;
  }

  &__button {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    padding: 18px 32px;
    font-size: 1.125rem;
    font-weight: 600;
    text-decoration: none;
    border-radius: 16px;
    transition: all 0.3s ease;
    border: 2px solid transparent;
    cursor: pointer;

    &--0 {
      background: linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%);
      color: white;

      &:hover {
        box-shadow: 0 12px 24px rgba(59, 130, 246, 0.3);
        transform: translateY(-2px);
      }
    }

    &--1 {
      background: linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%);
      color: white;

      &:hover {
        box-shadow: 0 12px 24px rgba(139, 92, 246, 0.3);
        transform: translateY(-2px);
      }
    }

    &--3 {
      background: linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%);
      color: white;

      &:hover {
        box-shadow: 0 12px 24px rgba(245, 158, 11, 0.3);
        transform: translateY(-2px);
      }
    }

    &-icon {
      font-size: 1.5rem;
    }

    &-external {
      font-size: 0.875rem;
      opacity: 0.8;
    }
  }

  &__step-footer {
    padding-top: 24px;
    border-top: 1px solid #e5e7eb;
  }

  &__step-progress {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  &__progress-bar {
    flex: 1;
    height: 8px;
    background: #e5e7eb;
    border-radius: 4px;
    overflow: hidden;
  }

  &__progress-fill {
    height: 100%;
    border-radius: 4px;
    transition: width 0.6s ease;
  }

  &__progress-text {
    font-size: 0.875rem;
    color: #6b7280;
    font-weight: 500;
    min-width: 100px;
    text-align: right;
  }

  &__completion {
    background: linear-gradient(135deg, #1f2937 0%, #111827 100%);
    border-radius: 24px;
    padding: 48px 32px;
    text-align: center;
    margin-top: 48px;

    &-content {
      max-width: 600px;
      margin: 0 auto;
    }

    &-title {
      font-size: 2.5rem;
      font-weight: 700;
      color: white;
      margin-bottom: 16px;
    }

    &-text {
      font-size: 1.25rem;
      color: #d1d5db;
      line-height: 1.7;
      margin-bottom: 32px;
    }

    &-actions {
      margin-top: 24px;
    }

    &-button {
      background: white;
      color: #1f2937;
      border: none;
      padding: 18px 40px;
      font-size: 1.125rem;
      font-weight: 600;
      border-radius: 16px;
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        background: #f3f4f6;
        transform: translateY(-2px);
        box-shadow: 0 12px 24px rgba(255, 255, 255, 0.2);
      }
    }
  }

  /* Responsive */
  @media (max-width: 768px) {
    padding: 24px 0px;

    &__title {
      font-size: 2rem;
      flex-direction: column;
      gap: 12px;

      &-icon {
        font-size: 2.5rem;
      }
    }

    &__subtitle {
      font-size: 1.125rem;
    }

    &__step {
      padding: 24px;

      &-header {
        flex-direction: column;
        align-items: flex-start;
        gap: 16px;
      }

      &-icon-wrapper {
        width: 60px;
        height: 60px;
      }

      &-icon {
        font-size: 2rem;
      }

      &-title {
        font-size: 1.5rem;
      }

      &-subtitle {
        font-size: 1rem;
      }
    }

    &__links-list {
      grid-template-columns: 1fr;
    }

    &__link {
      padding: 14px;
      font-size: 1rem;
    }

    &__button {
      width: 100%;
      justify-content: center;
      padding: 16px 24px;
      font-size: 1rem;
    }

    &__step-progress {
      flex-direction: column;
      align-items: stretch;
      gap: 12px;
    }

    &__progress-text {
      text-align: center;
      min-width: auto;
    }

    &__completion {
      padding: 32px 24px;

      &-title {
        font-size: 2rem;
      }

      &-text {
        font-size: 1.125rem;
      }
    }
  }

  @media (max-width: 480px) {
    &__title {
      font-size: 1.75rem;
    }

    &__subtitle {
      font-size: 1rem;
    }

    &__step {
      padding: 20px 24px;

      &-title {
        font-size: 1.3rem;
      }

      &-text {
        font-size: 1rem;
      }
    }

    &__completion {
      padding: 24px 24px;

      &-title {
        font-size: 1.75rem;
      }

      &-text {
        font-size: 1rem;
      }
    }
  }
}
</style>
