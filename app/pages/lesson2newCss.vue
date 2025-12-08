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
    gradient: 'blue',
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
    gradient: 'green',
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
    gradient: 'purple',
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
    gradient: 'orange',
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
    gradient: 'red',
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
    gradient: 'cyan',
  },
  {
    title: 'Задержки в обработке транзакций',
    content:
      'Проведение транзакций занимает около 10–12 секунд, по 5–6 секунд в рабочей и мастер-сети.',
    points: [
      'Проведение цепочек сообщений может занимать больше времени.',
      'Первоначальные транзакции уже определяют последующие результаты, что облегчает подтверждение каждого шага.',
    ],
    gradient: 'purple',
  },
]);

const summary = ref({
  title: 'Основные тезисы',
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
  <div class="lesson-container lesson-2">
    <!-- Hero Section -->
    <div class="lesson-hero">
      <h1 class="lesson-hero__title">
        <span class="lesson-hero__icon">🔧</span>
        Урок 2: Архитектура TON
      </h1>
      <p class="lesson-hero__subtitle">
        Техническое устройство и принципы работы блокчейна TON
      </p>
    </div>

    <!-- Summary -->
    <section class="lesson-key-points">
      <div class="lesson-key-points__header">
        <div class="lesson-key-points__icon">📌</div>
        <h2 class="lesson-key-points__title">{{ summary.title }}</h2>
      </div>
      <div class="lesson-key-points__content">
        <div class="summary-points">
          <div
            v-for="(point, index) in summary.points"
            :key="index"
            class="summary-point"
          >
            <div class="lesson-number lesson-number--circle-sm">
              {{ index + 1 }}
            </div>
            <p class="summary-point-text">{{ point }}</p>
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
      >
        <!-- Section Header -->
        <div class="lesson-section__header">
          <div
            class="lesson-section__icon-wrapper"
            :class="`gradient--${section.gradient}`"
          >
            <div class="lesson-number lesson-number--square">
              {{ index + 1 }}
            </div>
          </div>
          <div class="lesson-section__title-wrapper">
            <h2 class="lesson-section__title">{{ section.title }}</h2>
          </div>
        </div>

        <!-- Basic Content -->
        <p v-if="section.content" class="lesson-section__content">
          {{ section.content }}
        </p>

        <!-- Points List -->
        <div v-if="section.points" class="section-points">
          <ul class="lesson-list lesson-list--unordered">
            <li
              v-for="(point, pointIndex) in section.points"
              :key="pointIndex"
              class="lesson-list__item"
            >
              {{ point }}
            </li>
          </ul>
        </div>

        <!-- Features -->
        <div v-if="section.features" class="features-section">
          <div
            v-for="(feature, featureIndex) in section.features"
            :key="featureIndex"
            class="lesson-card feature-card"
          >
            <div class="feature-header">
              <span class="lesson-icon lesson-icon--medium">{{
                feature.icon
              }}</span>
              <h3 class="lesson-card__title">{{ feature.title }}</h3>
            </div>
            <p v-if="feature.text" class="lesson-card__text">
              {{ feature.text }}
            </p>
            <ul v-if="feature.items" class="lesson-list lesson-list--arrow">
              <li
                v-for="(item, itemIndex) in feature.items"
                :key="itemIndex"
                class="lesson-list__item"
              >
                {{ item }}
              </li>
            </ul>
          </div>
        </div>

        <!-- Guarantees -->
        <div v-if="section.guarantees" class="guarantees-section">
          <div
            v-for="(guarantee, guaranteeIndex) in section.guarantees"
            :key="guaranteeIndex"
            class="lesson-alert"
            :class="
              guarantee.icon === '❌'
                ? 'lesson-alert--danger'
                : 'lesson-alert--success'
            "
          >
            <div class="lesson-alert__icon">{{ guarantee.icon }}</div>
            <p class="lesson-alert__text">{{ guarantee.text }}</p>
          </div>
        </div>

        <!-- Items (Message/Transaction) -->
        <div v-if="section.items" class="lesson-grid lesson-grid--2">
          <div
            v-for="(item, itemIndex) in section.items"
            :key="itemIndex"
            class="lesson-card item-card"
          >
            <div class="item-header">
              <span class="lesson-icon lesson-icon--large">{{
                item.icon
              }}</span>
              <h3 class="lesson-card__title">{{ item.type }}</h3>
            </div>
            <p class="lesson-card__text">{{ item.definition }}</p>
          </div>
        </div>

        <!-- Example -->
        <div v-if="section.example" class="lesson-example">
          <h3 class="lesson-example__title">
            Пример последовательности действий:
          </h3>
          <ol class="lesson-example__steps">
            <li
              v-for="(step, stepIndex) in section.example.steps"
              :key="stepIndex"
              class="lesson-example__step"
            >
              <span class="lesson-example__number">{{ stepIndex + 1 }}</span>
              {{ step }}
            </li>
          </ol>
          <div class="lesson-alert lesson-alert--warning">
            <div class="lesson-alert__icon">❗</div>
            <p class="lesson-alert__text">{{ section.example.warning }}</p>
          </div>
          <div v-if="section.example.question" class="lesson-question">
            <div class="lesson-question__icon">❓</div>
            <p class="lesson-question__text">{{ section.example.question }}</p>
          </div>
        </div>

        <!-- Definition -->
        <div v-if="section.definition" class="lesson-definition">
          <div class="lesson-definition__header">
            <span class="lesson-definition__icon">{{
              section.definition.icon
            }}</span>
            <h3 class="lesson-definition__title">
              {{ section.definition.term }}
            </h3>
          </div>
          <p class="lesson-definition__text">
            {{ section.definition.explanation }}
          </p>
        </div>

        <!-- Note -->
        <div
          v-if="section.note"
          class="lesson-alert lesson-alert--info note-alert"
        >
          <div class="lesson-alert__icon">📎</div>
          <p class="lesson-alert__text">{{ section.note }}</p>
        </div>

        <!-- Levels (Master/Work) -->
        <div v-if="section.levels" class="lesson-grid lesson-grid--2">
          <div
            v-for="(level, levelIndex) in section.levels"
            :key="levelIndex"
            class="lesson-card level-card"
          >
            <h3 class="level-card__title">{{ level.name }}</h3>
            <p class="level-description">{{ level.description }}</p>
            <ul class="lesson-list level-properties">
              <li
                v-for="(property, propertyIndex) in level.properties"
                :key="propertyIndex"
                class="lesson-list__item"
              >
                {{ property }}
              </li>
            </ul>
          </div>
        </div>

        <!-- Points List (for delays section) -->
        <div
          v-if="
            section.points &&
            !section.features &&
            !section.guarantees &&
            !section.items &&
            !section.example &&
            !section.definition &&
            !section.levels
          "
          class="section-points"
        >
          <ul class="lesson-list lesson-list--unordered">
            <li
              v-for="(point, pointIndex) in section.points"
              :key="pointIndex"
              class="lesson-list__item"
            >
              {{ point }}
            </li>
          </ul>
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
.lesson-2 {
  .lesson-number--square {
    background: transparent;
  }
}

.lesson-content {
  display: flex;
  flex-direction: column;
  gap: $spacing-3xl;
  .level-card {
    &__title {
      margin-bottom: 1.1em;
      font-size: 1.3em;
    }
  }
}

.lesson-key-points__content {
  padding-left: 0;
}

.features-section,
.guarantees-section,
.section-points {
  display: flex;
  flex-direction: column;
  gap: $spacing-lg;
  margin: $spacing-lg 0;
}

.feature-card .feature-header,
.item-card .item-header,
.level-card .level-description {
  display: flex;
  align-items: center;
  gap: $spacing-sm;
  margin-bottom: $spacing-md;
}

.level-properties {
  margin-top: $spacing-md;
}

.note-alert {
  margin: $spacing-lg 0;
}

@media (max-width: 768px) {
  .summary-point {
    gap: $spacing-sm;
  }
  .summary-point-text {
    font-size: $font-size-base;
  }
  .features-section,
  .guarantees-section {
    gap: 0;
  }
  .feature-card,
  .item-card,
  .level-card {
    padding: $spacing-lg;
  }
}

@media (max-width: 480px) {
  .summary-point {
    flex-direction: column;
    gap: $spacing-xs;
  }
  .lesson-number--circle-sm {
    align-self: flex-start;
  }
  .summary-point-text {
    font-size: $font-size-base;
  }
}
</style>
