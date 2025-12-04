<script setup lang="ts">
const sections = ref([
  {
    title: 'Блокчейн и изменения стейтов',
    content:
      'Блокчейн TON работает как реестр изменения стейтов аккаунтов сети. Смарт-контракты TON тоже можно считать аккаунтами.',
    points: [
      'у аккаунтов есть свои хранилища;',
      'у аккаунтов есть свои уникальные адреса;',
      'каждый аккаунт имеет свой баланс монет TON;',
      'аккаунты хранят программный код.',
    ],
    features: [
      {
        icon: '⚡',
        title: 'Функциональность контрактов',
        items: [
          'могут изменять данные, в том числе исходный код контрактов;',
          'могут осуществлять перевод токенов;',
          'могут отправлять сообщения другим контрактам.',
        ],
      },
      {
        icon: '👀',
        title: 'Изоляция контрактов',
        text: 'Контракты не могут видеть никакие другие объекты в сети, кроме себя самих. Изоляция контрактов друг от друга гарантирует неограниченную масштабируемость TON.',
      },
      {
        icon: '🌐',
        title: 'Аналогия с интернетом',
        text: 'Смарт-контракты в TON подобны компьютерам в сети Интернет. Чтобы использовать состояние какого-либо контракта, другой контракт должен отправить ему сообщения. Возможно, позже он получит желаемый ответ.',
      },
    ],
    gradient: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
  },
  {
    title: 'Гарантии со стороны блокчейна',
    content: 'Блокчейн предоставляет вам как разработчику ряд гарантий:',
    guarantees: [
      {
        icon: '✅',
        text: 'Вы сможете определить адрес любого входящего сообщения и быть уверены, что за этим адресом скрывается определенный код, которому вы можете доверять.',
      },
      {
        icon: '✅',
        text: 'Блокчейн-сеть гарантирует доставку сообщений, но не гарантирует время, которое займет эта доставка.',
      },
      {
        icon: '❌',
        text: 'Цепочка сообщений может охватить множество шардов и потребовать много блоков для финализации, поэтому не стоит надеяться на конкретное время доставки сообщения.',
      },
    ],
    gradient: 'linear-gradient(135deg, #10b981 0%, #047857 100%)',
  },
  {
    title: 'Сообщения и транзакции',
    items: [
      {
        icon: '✉️',
        type: 'Сообщение',
        definition:
          'события, происходящие между контрактами. Сообщение отправляет небольшое количество монет и некоторые данные на адрес контракта.',
      },
      {
        icon: '💎',
        type: 'Транзакция',
        definition:
          'активность в рамках самого контракта, в которую входит запуск ноды контракта, обновление состояния контракта и создание новых сообщений.',
      },
    ],
    gradient: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
  },
  {
    title: 'Микроблокчейн контрактов',
    content:
      'Блокчейн, по сути, представляет собой лишь структуру данных. Чтобы изменить ее, необходим сигнал извне.',
    example: {
      steps: [
        'Пользователь нажимает кнопку в кошельке',
        'Кошелек создает сообщение для определенного смарт-контракта.',
        'Кошелек отправляет это сообщение валидаторам, которые применяют его к смарт-контракту.',
      ],
      warning:
        'Каждый контракт имеет собственные транзакции, а значит, у каждого контракта есть и свой собственный микроблокчейн. Это полезно, поскольку так сеть может обрабатывать и подтверждать транзакции независимо друг от друга.',
      question:
        'Как мы отправляем эти сообщения и как предотвратить двойные траты?',
    },
    gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
  },
  {
    title: 'Двойные траты и консенсус',
    definition: {
      icon: '💵',
      term: 'Двойная трата',
      explanation:
        'расход одной и той же цифровой валюты два раза и более в пользу различных сервисов.',
    },
    points: [
      'Консенсус предотвращает двойные траты со стороны валидаторов.',
      'Используется консенсус Proof-of-Stake, в рамках которого валидаторы размещают свои залоги.',
      'Недопустимое поведение ведет к штрафам.',
      'В блокчейне TON группу валидаторов можно шардировать.',
    ],
    note: 'Если нагрузка на систему и число аккаунтов растет, группы валидаторов можно разделить на подгруппы. TON позволяет организовать шардинг на любых уровнях, вплоть до отдельных контрактов, в зависимости от актуальной нагрузки.',
    gradient: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
  },
  {
    title: 'Двухуровневый блокчейн в TON',
    content: 'В TON блокчейн имеет два уровня:',
    levels: [
      {
        name: 'Мастер-сеть',
        properties: [
          'Ее нельзя шардировать.',
          'Она имеет высокие комиссии.',
          'Ее нельзя масштабировать.',
          'Она содержит лишь конфигурацию сети и снимки всех подсетей от разных групп валидаторов.',
        ],
        description:
          'Когда все группы валидаторов достигают соглашения в своих сегментах сети, они записывают состояние аккаунтов в мастер-сети — центральном нешардируемом блокчейне, где участвует каждый валидатор.',
      },
      {
        name: 'Рабочая сеть',
        properties: [
          'Виртуальна',
          'Обеспечивает возможности шардинга всех включенных аккаунтов',
          'Позволяет разделение и объединение в шардчейны',
        ],
        description:
          'Рабочая сеть виртуальна — так она обеспечивает возможности шардинга всех включенных аккаунтов вплоть до отдельного аккаунта, их разделения и объединения в шардчейны.',
      },
    ],
    gradient: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)',
  },
  {
    title: 'Задержки в обработке транзакций',
    content:
      'Проведение транзакций занимает около 10–12 секунд, по 5–6 секунд в рабочей и мастер-сети.',
    points: [
      'Проведение цепочек сообщений может занимать больше времени.',
      'Первоначальные транзакции уже определяют последующие результаты, что облегчает подтверждение каждого шага.',
    ],
    gradient: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
  },
]);

const summary = ref({
  title: 'Краткая выжимка',
  points: [
    'TON — это реестр изменений стейтов, что является более широкой концепцией по сравнению с реестром переводов.',
    'В блокчейне TON нельзя мгновенно получить стейт другого контракта. Это возможно только через сообщения, поскольку TON является асинхронной системой.',
    'Сеть TON гарантирует, что каждое сообщение будет доставлено, но не гарантирует время доставки.',
    'Каждый контракт имеет собственный микроблокчейн.',
    'Обеспечиваемый валидаторами консенсус гарантирует, что сообщения рано или поздно будут доставлены, что они не повторятся и двойная трата средств будет исключена.',
  ],
});

const conclusion = ref({
  title: 'Заключение',
  content:
    'TON использует блокчейн-архитектуру, где каждый смарт-контракт представляет собой изолированный аккаунт с данными и программным кодом. Механизмы консенсуса предотвращают проблемы, например, двойные траты. Несмотря на некоторые задержки, транзакции подтверждаются сравнительно быстро.',
});
</script>

<template>
  <div class="lesson">
    <!-- Hero Section -->
    <div class="lesson__hero">
      <h1 class="lesson__hero-title">
        <span class="lesson__hero-icon">🔧</span>
        Урок 2: Архитектура TON
      </h1>
      <p class="lesson__hero-subtitle">
        Техническое устройство и принципы работы блокчейна TON
      </p>
    </div>

    <!-- Summary -->
    <section class="lesson__summary">
      <div class="lesson__summary-header">
        <div class="lesson__summary-icon">📌</div>
        <h2 class="lesson__summary-title">{{ summary.title }}</h2>
      </div>
      <div class="lesson__summary-content">
        <ul class="lesson__summary-list">
          <li
            v-for="(point, index) in summary.points"
            :key="index"
            class="lesson__summary-item"
          >
            <div class="lesson__summary-point">
              <span class="lesson__summary-bullet">{{ index + 1 }}</span>
              {{ point }}
            </div>
          </li>
        </ul>
      </div>
    </section>

    <!-- Main Content -->
    <div class="lesson__content">
      <!-- Sections -->
      <section
        v-for="(section, index) in sections"
        :key="index"
        class="lesson__section"
      >
        <!-- Section Header -->
        <div class="lesson__section-header">
          <div
            class="lesson__section-icon-wrapper"
            :style="{ background: section.gradient }"
          >
            <span class="lesson__section-number">{{ index + 1 }}</span>
          </div>
          <h2 class="lesson__section-title">{{ section.title }}</h2>
        </div>

        <!-- Basic Content -->
        <p v-if="section.content" class="lesson__section-content">
          {{ section.content }}
        </p>

        <!-- Points List -->
        <div v-if="section.points" class="lesson__points">
          <ul class="lesson__points-list">
            <li
              v-for="(point, pointIndex) in section.points"
              :key="pointIndex"
              class="lesson__points-item"
            >
              {{ point }}
            </li>
          </ul>
        </div>

        <!-- Features -->
        <div v-if="section.features" class="lesson__features">
          <div
            v-for="(feature, featureIndex) in section.features"
            :key="featureIndex"
            class="lesson__feature"
          >
            <div class="lesson__feature-header">
              <span class="lesson__feature-icon">{{ feature.icon }}</span>
              <h3 class="lesson__feature-title">{{ feature.title }}</h3>
            </div>
            <p v-if="feature.text" class="lesson__feature-text">
              {{ feature.text }}
            </p>
            <ul v-if="feature.items" class="lesson__feature-list">
              <li
                v-for="(item, itemIndex) in feature.items"
                :key="itemIndex"
                class="lesson__feature-item"
              >
                {{ item }}
              </li>
            </ul>
          </div>
        </div>

        <!-- Guarantees -->
        <div v-if="section.guarantees" class="lesson__guarantees">
          <div
            v-for="(guarantee, guaranteeIndex) in section.guarantees"
            :key="guaranteeIndex"
            class="lesson__guarantee"
          >
            <span class="lesson__guarantee-icon">{{ guarantee.icon }}</span>
            <p class="lesson__guarantee-text">{{ guarantee.text }}</p>
          </div>
        </div>

        <!-- Items (Message/Transaction) -->
        <div v-if="section.items" class="lesson__items">
          <div
            v-for="(item, itemIndex) in section.items"
            :key="itemIndex"
            class="lesson__item"
          >
            <div class="lesson__item-header">
              <span class="lesson__item-icon">{{ item.icon }}</span>
              <h3 class="lesson__item-title">{{ item.type }}</h3>
            </div>
            <p class="lesson__item-definition">{{ item.definition }}</p>
          </div>
        </div>

        <!-- Example -->
        <div v-if="section.example" class="lesson__example">
          <h3 class="lesson__example-title">
            Пример последовательности действий:
          </h3>
          <ol class="lesson__example-steps">
            <li
              v-for="(step, stepIndex) in section.example.steps"
              :key="stepIndex"
              class="lesson__example-step"
            >
              <span class="lesson__example-number">{{ stepIndex + 1 }}</span>
              {{ step }}
            </li>
          </ol>
          <div class="lesson__example-warning">
            <div class="lesson__warning-icon">❗</div>
            <p class="lesson__warning-text">{{ section.example.warning }}</p>
          </div>
          <div v-if="section.example.question" class="lesson__example-question">
            <div class="lesson__question-icon">❓</div>
            <p class="lesson__question-text">{{ section.example.question }}</p>
          </div>
        </div>

        <!-- Definition -->
        <div v-if="section.definition" class="lesson__definition">
          <div class="lesson__definition-header">
            <span class="lesson__definition-icon">{{
              section.definition.icon
            }}</span>
            <h3 class="lesson__definition-title">
              {{ section.definition.term }}
            </h3>
          </div>
          <p class="lesson__definition-text">
            {{ section.definition.explanation }}
          </p>
        </div>

        <!-- Note -->
        <div v-if="section.note" class="lesson__note">
          <div class="lesson__note-icon">📎</div>
          <p class="lesson__note-text">{{ section.note }}</p>
        </div>

        <!-- Levels (Master/Work) -->
        <div v-if="section.levels" class="lesson__levels">
          <div
            v-for="(level, levelIndex) in section.levels"
            :key="levelIndex"
            class="lesson__level"
          >
            <h3 class="lesson__level-title">{{ level.name }}</h3>
            <p class="lesson__level-description">{{ level.description }}</p>
            <ul class="lesson__level-properties">
              <li
                v-for="(property, propertyIndex) in level.properties"
                :key="propertyIndex"
                class="lesson__level-property"
              >
                {{ property }}
              </li>
            </ul>
          </div>
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

  &__summary {
    background: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%);
    border-radius: 20px;
    padding: 32px;
    margin-bottom: 40px;
    border: 2px solid #e5e7eb;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);

    &-header {
      display: flex;
      align-items: center;
      gap: 16px;
      margin-bottom: 24px;
    }

    &-icon {
      font-size: 2.5rem;
    }

    &-title {
      font-size: 1.75rem;
      font-weight: 700;
      color: #1f2937;
      margin: 0;
    }

    &-content {
      padding-left: 8px;
    }

    &-list {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    &-item {
      margin: 0;
    }

    &-point {
      display: flex;
      align-items: flex-start;
      gap: 16px;
      font-size: 1.125rem;
      color: #4b5563;
      line-height: 1.7;
    }

    &-bullet {
      width: 28px;
      height: 28px;
      background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: 600;
      font-size: 0.875rem;
      flex-shrink: 0;
      margin-top: 2px;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  &__section {
    background: white;
    border-radius: 20px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
    padding: 32px;
    transition: all 0.3s ease;

    &:hover {
      box-shadow: 0 12px 28px rgba(0, 0, 0, 0.1);
    }

    &-header {
      display: flex;
      align-items: center;
      gap: 20px;
      margin-bottom: 24px;
      padding-bottom: 20px;
      border-bottom: 2px solid #f3f4f6;
    }

    &-icon-wrapper {
      width: 60px;
      height: 60px;
      border-radius: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }

    &-number {
      font-size: 1.75rem;
      font-weight: 700;
      color: white;
    }

    &-title {
      font-size: 1.75rem;
      font-weight: 700;
      color: #1f2937;
      margin: 0;
    }

    &-content {
      font-size: 1.125rem;
      color: #4b5563;
      line-height: 1.7;
      margin: 0 0 24px 0;
    }
  }

  &__points {
    margin: 20px 0;

    &-list {
      list-style: none;
      padding: 0 0 0 24px;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    &-item {
      font-size: 1.125rem;
      color: #4b5563;
      line-height: 1.6;
      position: relative;
      padding-left: 28px;

      &::before {
        content: '•';
        position: absolute;
        left: 0;
        color: #3b82f6;
        font-size: 1.5rem;
        top: -2px;
      }
    }
  }

  &__features {
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin: 24px 0;
  }

  &__feature {
    background: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%);
    border-radius: 16px;
    padding: 24px;
    border: 1px solid #e5e7eb;

    &-header {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 16px;
    }

    &-icon {
      font-size: 2rem;
    }

    &-title {
      font-size: 1.375rem;
      font-weight: 600;
      color: #1f2937;
      margin: 0;
    }

    &-text {
      font-size: 1.125rem;
      color: #4b5563;
      line-height: 1.7;
      margin: 0;
    }

    &-list {
      list-style: none;
      padding: 0;
      margin: 16px 0 0 0;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    &-item {
      font-size: 1.125rem;
      color: #4b5563;
      line-height: 1.6;
      padding-left: 24px;
      position: relative;

      &::before {
        content: '→';
        position: absolute;
        left: 0;
        color: #10b981;
        font-weight: 600;
      }
    }
  }

  &__guarantees {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: 24px 0;
  }

  &__guarantee {
    display: flex;
    align-items: flex-start;
    gap: 16px;
    padding: 20px;
    border-radius: 12px;
    background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
    border: 1px solid #bbf7d0;

    &-icon {
      font-size: 1.5rem;
      flex-shrink: 0;
      margin-top: 2px;
    }

    &-text {
      font-size: 1.125rem;
      color: #166534;
      line-height: 1.7;
      margin: 0;
    }

    &:nth-child(3) {
      background: linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%);
      border-color: #fecaca;

      .lesson__guarantee-text {
        color: #991b1b;
      }
    }
  }

  &__items {
    display: grid;
    grid-template-columns: 1fr;
    gap: 24px;
    margin: 24px 0;

    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  &__item {
    background: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%);
    border-radius: 16px;
    padding: 24px;
    border: 1px solid #e5e7eb;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
    }

    &-header {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 16px;
    }

    &-icon {
      font-size: 2.5rem;
    }

    &-title {
      font-size: 1.5rem;
      font-weight: 700;
      color: #1f2937;
      margin: 0;
    }

    &-definition {
      font-size: 1.125rem;
      color: #4b5563;
      line-height: 1.7;
      margin: 0;
    }
  }

  &__example {
    background: linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%);
    border-radius: 16px;
    padding: 24px;
    margin: 24px 0;
    border: 1px solid #fbbf24;

    &-title {
      font-size: 1.375rem;
      font-weight: 600;
      color: #92400e;
      margin: 0 0 20px 0;
    }

    &-steps {
      list-style: none;
      padding: 0;
      margin: 0 0 20px 0;
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    &-step {
      display: flex;
      align-items: flex-start;
      gap: 16px;
      font-size: 1.125rem;
      color: #92400e;
      line-height: 1.6;
    }

    &-number {
      width: 32px;
      height: 32px;
      background: #92400e;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: 600;
      font-size: 0.875rem;
      flex-shrink: 0;
    }
  }

  &__example-warning,
  &__example-question {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    padding: 16px;
    border-radius: 12px;
    margin-top: 16px;
  }

  &__example-warning {
    background: rgba(254, 226, 226, 0.5);
    border: 1px solid #fecaca;
  }

  &__example-question {
    background: rgba(219, 234, 254, 0.5);
    border: 1px solid #93c5fd;
  }

  &__warning-icon,
  &__question-icon {
    font-size: 1.5rem;
    flex-shrink: 0;
  }

  &__warning-text,
  &__question-text {
    font-size: 1.125rem;
    color: #4b5563;
    line-height: 1.7;
    margin: 0;
  }

  &__definition {
    background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
    border-radius: 16px;
    padding: 24px;
    margin: 24px 0;
    border: 1px solid #93c5fd;

    &-header {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 16px;
    }

    &-icon {
      font-size: 2.5rem;
    }

    &-title {
      font-size: 1.5rem;
      font-weight: 700;
      color: #1e40af;
      margin: 0;
    }

    &-text {
      font-size: 1.125rem;
      color: #1e40af;
      line-height: 1.7;
      margin: 0;
    }
  }

  &__note {
    display: flex;
    align-items: flex-start;
    gap: 16px;
    padding: 20px;
    background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
    border-radius: 12px;
    margin: 20px 0;
    border: 1px solid #cbd5e1;

    &-icon {
      font-size: 1.5rem;
      flex-shrink: 0;
      margin-top: 2px;
    }

    &-text {
      font-size: 1.125rem;
      color: #475569;
      line-height: 1.7;
      margin: 0;
    }
  }

  &__levels {
    display: grid;
    grid-template-columns: 1fr;
    gap: 32px;
    margin: 24px 0;

    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  &__level {
    background: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%);
    border-radius: 16px;
    padding: 24px;
    border: 1px solid #e5e7eb;

    &-title {
      font-size: 1.5rem;
      font-weight: 700;
      color: #1f2937;
      margin: 0 0 12px 0;
    }

    &-description {
      font-size: 1.125rem;
      color: #4b5563;
      line-height: 1.7;
      margin: 0 0 16px 0;
    }

    &-properties {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    &-property {
      font-size: 1rem;
      color: #6b7280;
      padding-left: 24px;
      position: relative;
      line-height: 1.6;

      &::before {
        content: '—';
        position: absolute;
        left: 0;
        color: #8b5cf6;
        font-weight: 600;
      }
    }
  }

  &__conclusion {
    background: linear-gradient(135deg, #1f2937 0%, #111827 100%);
    border-radius: 20px;
    padding: 48px 32px;
    text-align: center;
    margin-top: 24px;

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

    &__summary {
      padding: 24px;

      &-title {
        font-size: 1.5rem;
      }

      &-point {
        font-size: 1rem;
      }
    }

    &__section {
      padding: 24px;

      &-title {
        font-size: 1.5rem;
      }

      &-content {
        font-size: 1rem;
      }

      &-icon-wrapper {
        width: 50px;
        height: 50px;
      }

      &-number {
        font-size: 1.5rem;
      }
    }

    &__points-item,
    &__feature-text,
    &__feature-item,
    &__guarantee-text,
    &__item-definition,
    &__example-step,
    &__warning-text,
    &__question-text,
    &__definition-text,
    &__note-text,
    &__level-description {
      font-size: 1rem;
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

      &-title {
        font-size: 1.3rem;
      }

      &-icon-wrapper {
        width: 44px;
        height: 44px;
      }

      &-number {
        font-size: 1.25rem;
      }
    }

    &__summary {
      border-radius: 16px;
      padding: 20px;

      &-title {
        font-size: 1.3rem;
      }
    }

    &__conclusion {
      border-radius: 16px;
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
