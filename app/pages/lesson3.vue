<script setup lang="ts">
const sections = ref([
  {
    title: 'Bitcoin',
    subtitle: 'Первое поколение блокчейна',
    content:
      'Bitcoin — это в принципе первый известный блокчейн. Он был создан для адресных переводов цифровой валюты, защищенных от регуляторов.',
    points: [
      {
        icon: '🔑',
        text: 'Использует реестр аккаунтов, идентифицируемых по уникальным публичным ключам',
      },
      {
        icon: '📝',
        text: 'Транзакции авторизуются с помощью криптографических подписей',
      },
      {
        icon: '👥',
        text: 'Поддерживает транзакции со множеством отправителей и получателей',
      },
      {
        icon: '⚡',
        text: 'Консенсус по схеме Proof-of-Work',
      },
      {
        icon: '💻',
        text: 'Имеется поддержка сценарного языка для сложных схем управления транзакциями',
      },
      {
        icon: '🛡️',
        text: 'Для защиты конфиденциальности предусмотрено создание новых аккаунтов для перевода средств',
      },
    ],
    limitation: 'Ограничен в масштабировании',
    gradient: 'linear-gradient(135deg, #f59e0b 0%, #b45309 100%)',
  },
  {
    title: 'Ethereum',
    subtitle: 'Второе поколение блокчейна',
    content:
      'Ethereum — это второе поколение блокчейна, в котором появились компонуемые контракты и гибкая структура аккаунтов.',
    achievements: [
      'Пользователи смогли совершать в блокчейне произвольные операции, оплачивая их выполнение',
      'Появились децентрализованные финансы (DeFi)',
    ],
    features: [
      {
        icon: '🔄',
        text: 'Ethereum пытается развивать концепцию Bitcoin и делать ее более гибкой для разработчиков',
      },
      {
        icon: '🗄️',
        text: 'Любой account в Ethereum может включать не только логические значения, но произвольно заполняемое внутреннее хранилище',
      },
      {
        icon: '📤',
        text: 'Аккаунты могут взаимодействовать друг с другом, отправлять друг другу сообщения в синхронном режиме',
      },
      {
        icon: '⚙️',
        text: 'Принципы Ethereum совместимы со многими известными инструментами и концепциями программирования',
      },
    ],
    warning: {
      icon: '❗',
      text: 'Архитектура Ethereum предоставляет огромные возможности для разработчиков, но она совершенно немасштабируема, поскольку и разработчик, и все его контракты сохраняются в общем хранилище, в общем стейте сети.',
    },
    gradient: 'linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)',
  },
  {
    title: 'TON',
    subtitle: 'Третье поколение блокчейна',
    content:
      'TON — это третье поколение блокчейна, в котором были введены ограничения, чтобы обеспечить масштабируемость.',
    approach:
      'Контракты в TON имеют ограниченное поле зрения и взаимодействуют с помощью сообщений, что и создает возможности для масштабирования.',
    improvements: [
      {
        icon: '🔄',
        text: 'Консенсус Proof-of-Stake приходит на смену Proof-of-Work',
      },
      {
        icon: '🏗️',
        text: 'Позволяет выделять отдельные группы валидаторов и эффективно рассылать сообщения',
      },
      {
        icon: '💰',
        text: 'Реализован точный контроль стоимости операций',
      },
      {
        icon: '📊',
        text: 'Предусмотрена плата за исполнение, хранение данных и маршрутизацию сообщений',
      },
      {
        icon: '⚡',
        text: 'Снимает риски отказа в обслуживании',
      },
    ],
    facts: [
      'Основная идея TON — обеспечить разработчикам неограниченную гибкость и масштабируемость',
      'Контракты TON не имеют доступа в глобальный стейт, они могут видеть только свой собственный стейт',
      'Единственный способ контрактов взаимодействовать друг с другом — отправлять сообщения в асинхронном режиме',
      'Каждый раз, когда вы исполняете транзакцию в рамках контракта, она является полностью независимой от любой транзакции в другом контракте',
      'В TON все контракты могут быть шардированы, они могут взаимодействовать друг с другом через сообщения',
    ],
    gradient: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
  },
]);

const keyPoints = ref([
  'Весь стейт Bitcoin — это по сути список аккаунтов, которые еще не истратили свой баланс.',
  'Ethereum старается развивать концепцию Bitcoin и сделать ее более доступной для разработчиков.',
  'Ethereum начинался с идеи, что аккаунт может включать не только логические значения, но произвольно заполняемое внутреннее хранилище.',
  'Аккаунты Ethereum могут взаимодействовать друг с другом и отправлять сообщения в синхронном режиме, подобно тому, как в приложении вызываются функции.',
  'Модель Ethereum очень гибка и удобна для разработчиков, но совершенно немасштабируема, поскольку и разработчик, и все его контракты сохраняются в общем хранилище, в общем стейте сети.',
  'Контракты в TON не могут видеть общий стейт сети, а только свой собственный, и единственный способ для них взаимодействовать с другими контрактами — это асинхронные сообщения.',
  'Контракты в TON могут быть шардированы, тогда как в Bitcoin все стейты контрактов сохраняются в едином хранилище еще не истраченных балансов.',
  'TON обеспечивает неограниченную гибкость и масштабируемость, но делает это ценой удобства разработчиков.',
]);

const conclusion = ref({
  title: 'Заключение',
  content:
    'Блокчейн прошел путь от простой, но важной модели Bitcoin до функциональной модели Ethereum, которая столкнулась с проблемами масштабирования. Третье поколение блокчейн-сетей, TON, решает эти проблемы с помощью некоторых новых ограничений, новых возможностей масштабирования и точной оценки затрат в сети. Такой подход обеспечивает неограниченные возможности масштабирования, сохраняя безопасность и эффективность операций в сети.',
});
</script>

<template>
  <div class="lesson">
    <!-- Hero Section -->
    <div class="lesson__hero">
      <h1 class="lesson__hero-title">
        <span class="lesson__hero-icon">📈</span>
        Урок 3: Эволюция блокчейнов
      </h1>
      <p class="lesson__hero-subtitle">
        От Bitcoin к Ethereum и TON: три поколения блокчейн-сетей
      </p>
    </div>

    <!-- Key Points -->
    <section class="lesson__key-points">
      <div class="lesson__key-points-header">
        <div class="lesson__key-points-icon">📝</div>
        <h2 class="lesson__key-points-title">Краткие тезисы</h2>
      </div>
      <div class="lesson__key-points-content">
        <div class="lesson__points-grid">
          <div
            v-for="(point, index) in keyPoints"
            :key="index"
            class="lesson__point-card"
            :class="`lesson__point-card--${Math.floor(index / 3)}`"
          >
            <div class="lesson__point-number">{{ index + 1 }}</div>
            <p class="lesson__point-text">{{ point }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <div class="lesson__content">
      <!-- Sections -->
      <section
        v-for="(section, index) in sections"
        :key="index"
        class="lesson__section"
        :class="`lesson__section--${index}`"
      >
        <!-- Section Header -->
        <div class="lesson__section-header">
          <div
            class="lesson__section-icon-wrapper"
            :style="{ background: section.gradient }"
          >
            <div class="lesson__generation-badge">
              {{ index + 1
              }}<span class="lesson__generation-text">поколение</span>
            </div>
          </div>
          <div class="lesson__section-title-wrapper">
            <h2 class="lesson__section-title">{{ section.title }}</h2>
            <h3 class="lesson__section-subtitle">{{ section.subtitle }}</h3>
          </div>
        </div>

        <!-- Content -->
        <p class="lesson__section-content">
          {{ section.content }}
        </p>

        <!-- Points Grid -->
        <div v-if="section.points" class="lesson__points-grid">
          <div
            v-for="(point, pointIndex) in section.points"
            :key="pointIndex"
            class="lesson__point-item"
          >
            <div class="lesson__point-icon">{{ point.icon }}</div>
            <p class="lesson__point-description">{{ point.text }}</p>
          </div>
        </div>

        <!-- Achievements -->
        <div v-if="section.achievements" class="lesson__achievements">
          <h3 class="lesson__achievements-title">Достижения:</h3>
          <ul class="lesson__achievements-list">
            <li
              v-for="(achievement, achIndex) in section.achievements"
              :key="achIndex"
              class="lesson__achievements-item"
            >
              {{ achievement }}
            </li>
          </ul>
        </div>

        <!-- Limitation -->
        <div v-if="section.limitation" class="lesson__limitation">
          <div class="lesson__limitation-icon">⚠️</div>
          <p class="lesson__limitation-text">{{ section.limitation }}</p>
        </div>

        <!-- Features -->
        <div v-if="section.features" class="lesson__features">
          <h3 class="lesson__features-title">Ключевые особенности:</h3>
          <div class="lesson__features-grid">
            <div
              v-for="(feature, featureIndex) in section.features"
              :key="featureIndex"
              class="lesson__feature-card"
            >
              <div class="lesson__feature-icon">{{ feature.icon }}</div>
              <p class="lesson__feature-text">{{ feature.text }}</p>
            </div>
          </div>
        </div>

        <!-- Warning -->
        <div v-if="section.warning" class="lesson__warning">
          <div class="lesson__warning-icon">{{ section.warning.icon }}</div>
          <p class="lesson__warning-text">{{ section.warning.text }}</p>
        </div>

        <!-- Approach -->
        <div v-if="section.approach" class="lesson__approach">
          <h3 class="lesson__approach-title">Подход к масштабированию:</h3>
          <p class="lesson__approach-text">{{ section.approach }}</p>
        </div>

        <!-- Improvements -->
        <div v-if="section.improvements" class="lesson__improvements">
          <h3 class="lesson__improvements-title">Улучшения:</h3>
          <div class="lesson__improvements-grid">
            <div
              v-for="(improvement, impIndex) in section.improvements"
              :key="impIndex"
              class="lesson__improvement"
            >
              <div class="lesson__improvement-icon">{{ improvement.icon }}</div>
              <p class="lesson__improvement-text">{{ improvement.text }}</p>
            </div>
          </div>
        </div>

        <!-- Facts -->
        <div v-if="section.facts" class="lesson__facts">
          <h3 class="lesson__facts-title">Факты:</h3>
          <div class="lesson__facts-list">
            <div
              v-for="(fact, factIndex) in section.facts"
              :key="factIndex"
              class="lesson__fact"
            >
              <div class="lesson__fact-number">{{ factIndex + 1 }}</div>
              <p class="lesson__fact-text">{{ fact }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Evolution Timeline -->
      <section class="lesson__timeline">
        <h2 class="lesson__timeline-title">📊 Эволюция блокчейнов</h2>
        <div class="lesson__timeline-track">
          <div class="lesson__timeline-progress"></div>
          <div class="lesson__timeline-milestones">
            <div
              v-for="(section, index) in sections"
              :key="index"
              class="lesson__timeline-milestone"
              :style="{ left: `${(index / (sections.length - 1)) * 100}%` }"
            >
              <div
                class="lesson__milestone-dot"
                :style="{ background: section.gradient }"
              ></div>
              <div class="lesson__milestone-label">{{ section.title }}</div>
              <div class="lesson__milestone-year">{{ 2009 + index * 6 }}</div>
            </div>
          </div>
        </div>
        <div class="lesson__timeline-description">
          <p>
            От простых переводов → к умным контрактам → к масштабируемым
            решениям
          </p>
        </div>
      </section>

      <!-- Conclusion -->
      <section class="lesson__conclusion">
        <div class="lesson__conclusion-content">
          <h2 class="lesson__conclusion-title">{{ conclusion.title }}</h2>
          <p class="lesson__conclusion-text">{{ conclusion.content }}</p>
        </div>
      </section>
    </div>
  </div>
</template>

<style lang="scss">
.lesson {
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px 16px;
  box-sizing: border-box;

  &__hero {
    text-align: center;
    margin-bottom: 48px;

    &-title {
      font-size: 2.5rem;
      font-weight: 700;
      color: #1f2937;
      margin-bottom: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 16px;
    }

    &-icon {
      font-size: 3rem;
    }

    &-subtitle {
      font-size: 1.25rem;
      color: #6b7280;
      max-width: 600px;
      margin: 0 auto;
      line-height: 1.6;
    }
  }

  &__key-points {
    background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
    border-radius: 20px;
    padding: 32px;
    margin-bottom: 40px;
    border: 2px solid #cbd5e1;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);

    &-header {
      display: flex;
      align-items: center;
      gap: 16px;
      margin-bottom: 28px;
    }

    &-icon {
      font-size: 2.5rem;
    }

    &-title {
      font-size: 1.75rem;
      font-weight: 700;
      color: #1e293b;
      margin: 0;
    }
  }

  &__points-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;

    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 1024px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  &__point-card {
    background: white;
    border-radius: 16px;
    padding: 24px;
    border-left: 4px solid;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
    }

    &--0 {
      border-color: #f59e0b;
    }

    &--1 {
      border-color: #8b5cf6;
    }

    &--2 {
      border-color: #3b82f6;
    }
  }

  &__point-number {
    width: 32px;
    height: 32px;
    background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: 600;
    font-size: 0.875rem;
    margin-bottom: 16px;
  }

  &__point-text {
    font-size: 1.125rem;
    color: #4b5563;
    line-height: 1.6;
    margin: 0;
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  &__section {
    background: white;
    border-radius: 20px;
    padding: 32px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;

    &:hover {
      box-shadow: 0 12px 28px rgba(0, 0, 0, 0.1);
    }

    &--0 {
      border-top: 6px solid #f59e0b;
    }

    &--1 {
      border-top: 6px solid #8b5cf6;
    }

    &--2 {
      border-top: 6px solid #3b82f6;
    }

    &-header {
      display: flex;
      align-items: center;
      gap: 24px;
      margin-bottom: 28px;
      padding-bottom: 24px;
      border-bottom: 2px solid #f3f4f6;
    }

    &-icon-wrapper {
      width: 100px;
      height: 100px;
      border-radius: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15);
      position: relative;
    }

    &-title-wrapper {
      flex: 1;
    }

    &-title {
      font-size: 2rem;
      font-weight: 700;
      color: #1f2937;
      margin: 0 0 8px 0;
    }

    &-subtitle {
      font-size: 1.25rem;
      font-weight: 500;
      color: #6b7280;
      margin: 0;
    }
  }

  &__generation-badge {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: 700;
    text-align: center;
  }

  &__generation-text {
    font-size: 0.75rem;
    font-weight: 500;
    opacity: 0.9;
    margin-top: 4px;
  }

  &__section-content {
    font-size: 1.25rem;
    color: #4b5563;
    line-height: 1.8;
    margin: 0 0 28px 0;
  }

  &__points-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    margin: 24px 0;

    @media (min-width: 640px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 1024px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  &__point-item {
    background: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%);
    border-radius: 12px;
    padding: 20px;
    display: flex;
    align-items: flex-start;
    gap: 16px;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.08);
    }
  }

  &__point-icon {
    font-size: 1.5rem;
    flex-shrink: 0;
    margin-top: 2px;
  }

  &__point-description {
    font-size: 1.125rem;
    color: #4b5563;
    line-height: 1.6;
    margin: 0;
  }

  &__achievements {
    background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%);
    border-radius: 16px;
    padding: 24px;
    margin: 24px 0;
    border: 1px solid #a7f3d0;

    &-title {
      font-size: 1.375rem;
      font-weight: 600;
      color: #065f46;
      margin: 0 0 16px 0;
    }

    &-list {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    &-item {
      font-size: 1.125rem;
      color: #065f46;
      line-height: 1.6;
      padding-left: 24px;
      position: relative;

      &::before {
        content: '✓';
        position: absolute;
        left: 0;
        color: #10b981;
        font-weight: 600;
      }
    }
  }

  &__limitation {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 20px;
    background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
    border-radius: 12px;
    margin: 24px 0;
    border: 1px solid #fbbf24;

    &-icon {
      font-size: 1.5rem;
      flex-shrink: 0;
    }

    &-text {
      font-size: 1.125rem;
      font-weight: 600;
      color: #92400e;
      margin: 0;
    }
  }

  &__features {
    margin: 28px 0;

    &-title {
      font-size: 1.375rem;
      font-weight: 600;
      color: #1f2937;
      margin: 0 0 20px 0;
    }

    &-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 20px;

      @media (min-width: 640px) {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  }

  &__feature-card {
    background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
    border-radius: 12px;
    padding: 20px;
    display: flex;
    align-items: flex-start;
    gap: 16px;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 16px rgba(59, 130, 246, 0.15);
    }
  }

  &__feature-icon {
    font-size: 1.5rem;
    flex-shrink: 0;
    margin-top: 2px;
  }

  &__feature-text {
    font-size: 1.125rem;
    color: #1e40af;
    line-height: 1.6;
    margin: 0;
  }

  &__warning {
    display: flex;
    align-items: flex-start;
    gap: 16px;
    padding: 24px;
    background: linear-gradient(135deg, #fee2e2 0%, #fecaca 100%);
    border-radius: 12px;
    margin: 24px 0;
    border: 1px solid #f87171;

    &-icon {
      font-size: 1.5rem;
      flex-shrink: 0;
      margin-top: 2px;
    }

    &-text {
      font-size: 1.125rem;
      font-weight: 500;
      color: #991b1b;
      line-height: 1.7;
      margin: 0;
    }
  }

  &__approach {
    background: linear-gradient(135deg, #f3e8ff 0%, #e9d5ff 100%);
    border-radius: 16px;
    padding: 24px;
    margin: 24px 0;
    border: 1px solid #c4b5fd;

    &-title {
      font-size: 1.375rem;
      font-weight: 600;
      color: #6d28d9;
      margin: 0 0 12px 0;
    }

    &-text {
      font-size: 1.25rem;
      color: #6d28d9;
      line-height: 1.7;
      margin: 0;
    }
  }

  &__improvements {
    margin: 28px 0;

    &-title {
      font-size: 1.375rem;
      font-weight: 600;
      color: #1f2937;
      margin: 0 0 20px 0;
    }

    &-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 20px;

      @media (min-width: 640px) {
        grid-template-columns: repeat(2, 1fr);
      }

      @media (min-width: 1024px) {
        grid-template-columns: repeat(3, 1fr);
      }
    }
  }

  &__improvement {
    background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%);
    border-radius: 12px;
    padding: 20px;
    display: flex;
    align-items: center;
    gap: 16px;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 16px rgba(16, 185, 129, 0.15);
    }
  }

  &__improvement-icon {
    font-size: 1.5rem;
    flex-shrink: 0;
  }

  &__improvement-text {
    font-size: 1.125rem;
    color: #065f46;
    line-height: 1.6;
    margin: 0;
  }

  &__facts {
    margin: 28px 0;

    &-title {
      font-size: 1.375rem;
      font-weight: 600;
      color: #1f2937;
      margin: 0 0 20px 0;
    }

    &-list {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
  }

  &__fact {
    display: flex;
    align-items: flex-start;
    gap: 16px;
    padding: 20px;
    background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
    border-radius: 12px;
    border: 1px solid #93c5fd;

    &-number {
      width: 32px;
      height: 32px;
      background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: 600;
      font-size: 0.875rem;
      flex-shrink: 0;
    }

    &-text {
      font-size: 1.125rem;
      color: #1e40af;
      line-height: 1.6;
      margin: 0;
    }
  }

  &__timeline {
    background: white;
    border-radius: 20px;
    padding: 32px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
    margin-top: 40px;

    &-title {
      font-size: 1.75rem;
      font-weight: 700;
      color: #1f2937;
      text-align: center;
      margin: 0 0 32px 0;
    }

    &-track {
      position: relative;
      height: 120px;
      margin: 0 20px;
    }

    &-progress {
      position: absolute;
      top: 60px;
      left: 0;
      right: 0;
      height: 4px;
      background: linear-gradient(90deg, #f59e0b 0%, #8b5cf6 50%, #3b82f6 100%);
      border-radius: 2px;
    }

    &-milestones {
      position: relative;
      height: 100%;
    }
  }

  &__timeline-milestone {
    position: absolute;
    top: 0;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100px;
  }

  &__milestone-dot {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    margin-bottom: 12px;
    border: 4px solid white;
  }

  &__milestone-label {
    font-size: 1rem;
    font-weight: 600;
    color: #1f2937;
    text-align: center;
    margin-bottom: 8px;
  }

  &__milestone-year {
    font-size: 0.875rem;
    color: #6b7280;
    font-weight: 500;
  }

  &__timeline-description {
    text-align: center;
    margin-top: 40px;
    padding-top: 24px;
    border-top: 1px solid #e5e7eb;

    p {
      font-size: 1.25rem;
      color: #6b7280;
      font-weight: 500;
      margin: 0;
    }
  }

  &__conclusion {
    background: linear-gradient(135deg, #1f2937 0%, #111827 100%);
    border-radius: 20px;
    padding: 48px 32px;
    text-align: center;
    margin-top: 40px;

    &-content {
      max-width: 800px;
      margin: 0 auto;
    }

    &-title {
      font-size: 2rem;
      font-weight: 700;
      color: white;
      margin-bottom: 16px;
    }

    &-text {
      font-size: 1.25rem;
      color: #d1d5db;
      line-height: 1.8;
      margin: 0;
    }
  }

  /* Responsive */
  @media (max-width: 768px) {
    padding: 24px 16px;

    &__hero-title {
      font-size: 2rem;
      flex-direction: column;
      gap: 12px;

      &-icon {
        font-size: 2.5rem;
      }
    }

    &__hero-subtitle {
      font-size: 1.125rem;
    }

    &__key-points {
      padding: 24px;

      &-title {
        font-size: 1.5rem;
      }
    }

    &__point-text {
      font-size: 1rem;
    }

    &__section {
      padding: 24px;

      &-header {
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;
      }

      &-icon-wrapper {
        width: 80px;
        height: 80px;
      }

      &-title {
        font-size: 1.75rem;
      }

      &-subtitle {
        font-size: 1.125rem;
      }
    }

    &__section-content {
      font-size: 1.125rem;
    }

    &__timeline {
      padding: 24px;

      &-track {
        margin: 0;
        height: 100px;
      }

      &-milestone {
        width: 80px;
      }

      &-title {
        font-size: 1.5rem;
      }
    }

    &__conclusion {
      padding: 32px 24px;

      &-title {
        font-size: 1.75rem;
      }

      &-text {
        font-size: 1.125rem;
      }
    }
  }

  @media (max-width: 480px) {
    padding: 32px 0;

    &__hero-title {
      font-size: 1.75rem;
    }

    &__section {
      padding: 20px 16px;
      border-radius: 16px;

      &-icon-wrapper {
        width: 70px;
        height: 70px;
      }

      &-title {
        font-size: 1.5rem;
      }

      &-subtitle {
        font-size: 1rem;
      }
    }

    &__key-points,
    &__timeline,
    &__conclusion {
      border-radius: 16px;
    }

    &__key-points {
      padding: 20px;
    }

    &__point-card {
      padding: 20px;
    }

    &__conclusion {
      padding: 24px 16px;

      &-title {
        font-size: 1.5rem;
      }

      &-text {
        font-size: 1rem;
      }
    }
  }
}
</style>
