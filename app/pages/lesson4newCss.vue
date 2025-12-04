<script setup lang="ts">
const sections = ref([
  {
    title: 'Контракты: углубленное изучение',
    subtitle: 'Аккаунты и их устройство',
    icon: '⚙️',
    points: [
      'Аккаунт и контракт на нижнем структурном уровне в TON — это взаимозаменяемые понятия.',
      'Контракт состоит из данных, программного кода и баланса монет TON.',
      'Контракты могут получать сообщения, обрабатывать и отправлять их, а также изменять собственный стейт.',
    ],
    features: [
      {
        title: '📬 Адрес контракта',
        content:
          'У каждого контракта есть идентификатор, или адрес. Он представляет собой криптографический хеш от исходных данных и кода контракта.',
        explanation:
          'Вы вряд ли захотите менять адрес контракта при каждом изменении его стейта, так что адрес контракта определяется, исходя именно из его первоначального стейта, из того, каким он был создан.',
        icon: '🏷️',
      },
      {
        title: '⛺ Локальность данных',
        content: 'Вторая важная особенность контрактов — это их локальность.',
        explanation:
          'Все данные контракта полностью инкапсулированы, и с точки зрения программного кода каждый контракт может видеть только собственное хранилище и баланс. Он не может видеть стейт других контрактов.',
        benefit:
          'Любые изменения в контракте в рамках одной транзакции в контракте полностью независимы от изменений другого контракта в рамках другой транзакции. Это позволяет достигнуть неограниченной масштабируемости блокчейна TON.',
        icon: '🔒',
      },
    ],
    gradient: 'blue',
  },
  {
    title: 'Что можно делать с контрактами?',
    subtitle: 'Примеры использования',
    icon: '💡',
    question: 'Что вы можете создать с помощью контрактов?',
    examples: [
      {
        title: 'Аккаунты пользователей',
        description:
          'Контракты позволяют вам создавать аккаунты пользователей. Фактически, в TON каждый аккаунт пользователя — это кастомизированный контракт кошелька.',
        icon: '👛',
      },
      {
        title: 'Контракты с мультиподписью',
        description:
          'Контракты, управляемые более чем одним пользовательским кошельком.',
        icon: '👥',
      },
      {
        title: 'Крупные децентрализованные приложения',
        description: 'Создание сложных DApps на основе контрактов.',
        icon: '🏗️',
      },
    ],
    note: 'Контракты используются для создания сущностей, которые мы обычно не воспринимаем как контракты.',
    gradient: 'purple',
  },
  {
    title: 'Токены в TON',
    subtitle: 'Отдельные контракты с собственным стейтом',
    icon: '💰',
    content:
      'В TON любой токен, который вы можете отправлять, представляет собой отдельный контракт с собственным стейтом, определяющим некоторые параметры токена.',
    parameters: [
      {
        name: 'Владелец',
        description: 'Один из таких параметров — владелец.',
        icon: '👑',
      },
    ],
    process: {
      title: 'Как изменить владельца токена?',
      steps: [
        'Отправить токену сообщение, которое будет содержать нового владельца токена.',
        'Токен проверит, что у отправителя сообщения есть надлежащие права.',
        'Изменит владельца указанным образом.',
      ],
      icon: '🔄',
    },
    gradient: 'orange',
  },
  {
    title: 'Защита TON',
    subtitle: 'Плата за функционирование в сети',
    icon: '🛡️',
    content:
      'Чтобы защитить сеть от атак типа «отказ в обслуживании», все контракты должны платить за свое функционирование в сети.',
    components: [
      {
        title: 'Стоимость газа',
        icon: '⚡',
        points: [
          'Каждый раз при выполнении контракта вы работаете со стоимостью газа.',
          'Исполнение любой инструкции в виртуальной машине TON (TVM) можно оценить в абстрактных единицах — в газе.',
          'На уровне сети установлен такой параметр, как цена газа, который определяет, сколько TON вы должны заплатить за каждую инструкцию.',
          'Чем дольше работает ваша программа, тем выше будет стоимость газа, и она будет вычитаться из баланса контракта.',
          'Когда баланс вашего контракта опустится до нуля, его исполнение прекратится, и связанная транзакция завершится неудачей.',
          'Плата за газ гарантирует, что вы не увеличите нагрузку на сеть TON без оплаты этой нагрузки.',
        ],
      },
      {
        title: 'Аренда',
        icon: '⏳',
        points: [
          'TON взимает оплату — «аренду» — за каждый бит данных контракта каждую секунду его работы в сети.',
          'Эта сумма вычитается из баланса контракта.',
        ],
        warning:
          'При разработке смарт-контрактов нужно учитывать два важнейших параметра: стоимость газа для исполнения и аренду, которая будет выплачиваться на протяжении жизненного цикла контракта в сети.',
      },
    ],
    gradient: 'red',
  },
  {
    title: 'Замороженные контракты',
    subtitle: 'Что происходит при нехватке средств',
    icon: '❄️',
    content:
      'Если у контракта заканчиваются средства и он не может оплачивать аренду, то контракт замораживают.',
    process: [
      'Сеть выгрузит все данные контракта и заменит их криптографическим хешем последнего состояния контракта.',
      'В этом случае данные не будут утеряны: сеть оптимизирует хранилище и выгрузит ценные данные из своего хранилища валидаторам.',
    ],
    recovery: {
      title: 'Как восстановить контракт?',
      description:
        'Когда пользователь захочет заново запустить контракт, он должен будет предоставить свой снимок данных контракта, хеш которого совпадает с хешем, сохраненным в сети.',
      icon: '🔮',
    },
    gradient: 'cyan',
  },
]);

const keyPoints = ref([
  {
    text: 'Адрес контракта представляет собой криптографический хеш от исходных данных и кода контракта.',
    icon: '🔐',
  },
  {
    text: 'Все данные смарт-контрактов полностью инкапсулированы (изолированы друг от друга), и с точки зрения программного кода каждый контракт может видеть только собственное хранилище и баланс.',
    icon: '🏠',
  },
  {
    text: 'Токен, доступный для перевода в TON, представляет собой отдельный контракт с собственным стейтом, определяющим некоторые параметры токена.',
    icon: '💰',
  },
  {
    text: 'Смарт-контракты, по сути, представляют собой низкоуровневые «строительные блоки», с помощью которых можно создавать аккаунты-кошельки, аккаунты с мультиподписью, крупные децентрализованные приложения, уникальные токены и даже их коллекции.',
    icon: '🧱',
  },
  {
    text: 'TON взимает плату — «аренду» — за каждый бит данных контракта каждую секунду его работы в сети, и эта сумма вычитается из баланса контракта.',
    icon: '💸',
  },
]);

const summary = ref({
  title: 'Заключение',
  content:
    'Смарт-контракты в TON — это фундаментальные строительные блоки, которые обеспечивают безопасность, масштабируемость и гибкость экосистемы. Понимание их устройства, включая адресацию, изоляцию данных, систему оплаты и механизмы восстановления, является ключом к эффективной разработке в сети TON.',
});
</script>

<template>
  <div class="lesson-container">
    <!-- Hero Section -->
    <div class="lesson-hero">
      <h1 class="lesson-hero__title">
        <span class="lesson-hero__icon">🔧</span>
        Урок 4: Смарт-контракты TON
      </h1>
      <p class="lesson-hero__subtitle">
        Устройство, адресация, изоляция и экономика смарт-контрактов
      </p>
    </div>

    <!-- Key Points -->
    <section class="lesson-key-points">
      <div class="lesson-key-points__header">
        <div class="lesson-key-points__icon">📝</div>
        <h2 class="lesson-key-points__title">Краткие тезисы</h2>
      </div>
      <div class="lesson-key-points__content">
        <div class="key-points-container">
          <div
            v-for="(point, index) in keyPoints"
            :key="index"
            class="key-point-item"
          >
            <div class="key-point-icon">{{ point.icon }}</div>
            <div class="key-point-content">
              <div class="lesson-number lesson-number--circle-sm">
                {{ index + 1 }}
              </div>
              <p class="key-point-text">{{ point.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <div class="lesson-content">
      <!-- Contract Details -->
      <section
        v-for="(section, index) in sections"
        :key="index"
        class="lesson-section"
        :class="`contract-section--${index}`"
      >
        <!-- Section Header -->
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

        <!-- Content -->
        <p v-if="section.content" class="lesson-section__content">
          {{ section.content }}
        </p>

        <!-- Features -->
        <div v-if="section.features" class="features-section">
          <div
            v-for="(feature, featureIndex) in section.features"
            :key="featureIndex"
            class="lesson-card feature-card"
          >
            <div class="feature-header">
              <div class="feature-icon-wrapper gradient--blue">
                <span class="feature-icon">{{ feature.icon }}</span>
              </div>
              <h3 class="lesson-card__title">{{ feature.title }}</h3>
            </div>
            <div class="feature-content">
              <p class="lesson-card__text">{{ feature.content }}</p>
              <div
                v-if="feature.explanation"
                class="lesson-alert lesson-alert--info explanation-alert"
              >
                <div class="lesson-alert__icon">❓</div>
                <p class="lesson-alert__text">
                  {{ feature.explanation }}
                </p>
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

        <!-- Question -->
        <div v-if="section.question" class="lesson-question">
          <div class="lesson-question__icon">❓</div>
          <h3 class="lesson-question__text">{{ section.question }}</h3>
        </div>

        <!-- Examples -->
        <div v-if="section.examples" class="examples-section">
          <div class="lesson-grid lesson-grid--3">
            <div
              v-for="(example, exampleIndex) in section.examples"
              :key="exampleIndex"
              class="lesson-card example-card"
            >
              <div class="example-icon">{{ example.icon }}</div>
              <h4 class="example-title">{{ example.title }}</h4>
              <p class="example-description">
                {{ example.description }}
              </p>
            </div>
          </div>
        </div>

        <!-- Note -->
        <div v-if="section.note" class="lesson-alert lesson-alert--warning">
          <div class="lesson-alert__icon">💡</div>
          <p class="lesson-alert__text">{{ section.note }}</p>
        </div>

        <!-- Parameters -->
        <div v-if="section.parameters" class="parameters-section">
          <h3 class="parameters-title">Параметры токена:</h3>
          <div class="parameters-list">
            <div
              v-for="(param, paramIndex) in section.parameters"
              :key="paramIndex"
              class="lesson-card parameter-card"
            >
              <div class="parameter-icon">{{ param.icon }}</div>
              <div class="parameter-content">
                <h4 class="parameter-name">{{ param.name }}</h4>
                <p class="parameter-description">
                  {{ param.description }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Process -->
        <div v-if="section.process" class="lesson-example">
          <div class="process-header">
            <div class="process-icon">{{ section.process.icon }}</div>
            <h3 class="lesson-example__title">{{ section.process.title }}</h3>
          </div>
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

        <!-- Components -->
        <div v-if="section.components" class="components-section">
          <div
            v-for="(component, componentIndex) in section.components"
            :key="componentIndex"
            class="lesson-card component-card"
            :class="`component-card--${componentIndex}`"
          >
            <div class="component-header">
              <div class="component-icon">{{ component.icon }}</div>
              <h3 class="component-title">{{ component.title }}</h3>
            </div>
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

        <!-- Process List -->
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

        <!-- Recovery -->
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

      <!-- Development Considerations -->
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

      <!-- Summary -->
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
// Импортируем глобальные стили
@import '@/assets/css/global.scss';

.lesson-content {
  display: flex;
  flex-direction: column;
  gap: $spacing-3xl;
}

// Стили для контрактных секций
.contract-section {
  &--0 {
    border-top: 6px solid $color-primary;
  }

  &--1 {
    border-top: 6px solid $color-secondary;
  }

  &--2 {
    border-top: 6px solid $color-warning;
  }

  &--3 {
    border-top: 6px solid $color-danger;
  }

  &--4 {
    border-top: 6px solid $color-info;
  }
}

// Стили для ключевых точек
.key-points-container {
  display: flex;
  flex-direction: column;
  gap: $spacing-lg;
}

.key-point-item {
  display: flex;
  align-items: flex-start;
  gap: $spacing-lg;
  padding: $spacing-xl;
  background: white;
  border-radius: $border-radius-lg;
  box-shadow: $shadow-sm;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: $shadow-md;
  }
}

.key-point-icon {
  font-size: $font-size-4xl;
  flex-shrink: 0;
  margin-top: 4px;
}

.key-point-content {
  flex: 1;
  display: flex;
  align-items: flex-start;
  gap: $spacing-md;
}

.key-point-text {
  font-size: $font-size-lg;
  color: $color-text-medium;
  line-height: 1.6;
  margin: 0;
  flex: 1;
}

// Стили для features
.features-section {
  display: flex;
  flex-direction: column;
  gap: $spacing-lg;
  margin: $spacing-xl 0;
}

.feature-card {
  .feature-header {
    display: flex;
    align-items: center;
    gap: $spacing-md;
    margin-bottom: $spacing-md;
  }

  .feature-icon-wrapper {
    width: 60px;
    height: 60px;
    border-radius: $border-radius-md;
    @include flex-center;
  }

  .feature-icon {
    font-size: $font-size-2xl;
    color: white;
  }

  .lesson-card__title {
    font-size: $font-size-xl;
  }

  .feature-content {
    margin-top: $spacing-md;
  }
}

.explanation-alert {
  margin-top: $spacing-md;
}

// Стили для примеров
.examples-section {
  margin: $spacing-xl 0;
}

.example-card {
  text-align: center;
  padding: $spacing-xl;

  .example-icon {
    font-size: $font-size-4xl;
    margin-bottom: $spacing-md;
  }

  .example-title {
    font-size: $font-size-lg;
    font-weight: 700;
    color: $color-text-dark;
    margin: 0 0 $spacing-sm 0;
  }

  .example-description {
    font-size: $font-size-base;
    color: $color-text-medium;
    line-height: 1.6;
    margin: 0;
  }
}

// Стили для параметров
.parameters-section {
  margin: $spacing-xl 0;
}

.parameters-title {
  font-size: $font-size-xl;
  font-weight: 600;
  color: $color-text-dark;
  margin: 0 0 $spacing-lg 0;
}

.parameters-list {
  display: flex;
  flex-direction: column;
  gap: $spacing-md;
}

.parameter-card {
  display: flex;
  align-items: center;
  gap: $spacing-md;
  padding: $spacing-lg;

  .parameter-icon {
    font-size: $font-size-3xl;
    flex-shrink: 0;
  }

  .parameter-content {
    flex: 1;
  }

  .parameter-name {
    font-size: $font-size-lg;
    font-weight: 600;
    color: #065f46;
    margin: 0 0 $spacing-xs 0;
  }

  .parameter-description {
    font-size: $font-size-base;
    color: #065f46;
    line-height: 1.6;
    margin: 0;
  }
}

// Стили для process
.process-header {
  display: flex;
  align-items: center;
  gap: $spacing-md;
  margin-bottom: $spacing-lg;
}

.process-icon {
  font-size: $font-size-3xl;
}

// Стили для components
.components-section {
  display: flex;
  flex-direction: column;
  gap: $spacing-lg;
  margin: $spacing-xl 0;
}

.component-card {
  padding: $spacing-xl;

  &--0 {
    border-left: 4px solid $color-primary;
  }

  &--1 {
    border-left: 4px solid $color-danger;
  }

  .component-header {
    display: flex;
    align-items: center;
    gap: $spacing-md;
    margin-bottom: $spacing-md;
  }

  .component-icon {
    font-size: $font-size-4xl;
  }

  .component-title {
    font-size: $font-size-xl;
    font-weight: 700;
    color: $color-text-dark;
    margin: 0;
  }
}

// Стили для process list
.process-list-section {
  margin: $spacing-lg 0;

  .process-list-title {
    font-size: $font-size-xl;
    font-weight: 600;
    color: $color-text-dark;
    margin: 0 0 $spacing-md 0;
  }
}

// Стили для recovery
.recovery-content {
  width: 100%;

  .recovery-title {
    font-size: $font-size-xl;
    font-weight: 600;
    color: #0e7490;
    margin: 0 0 $spacing-xs 0;
  }

  .recovery-description {
    font-size: $font-size-lg;
    color: #0e7490;
    line-height: 1.7;
    margin: 0;
  }
}

// Стили для considerations
.considerations-section {
  background: white;
  border-radius: $border-radius-xl;
  padding: $spacing-3xl;
  box-shadow: $shadow-md;
  margin-top: $spacing-xl;
}

.considerations-title {
  font-size: $font-size-3xl;
  font-weight: 700;
  color: $color-text-dark;
  text-align: center;
  margin: 0 0 $spacing-3xl 0;
}

.consideration-card {
  text-align: center;
  padding: $spacing-xl;

  .consideration-icon {
    font-size: $font-size-4xl;
    margin-bottom: $spacing-md;
  }

  .consideration-title {
    font-size: $font-size-lg;
    font-weight: 700;
    color: $color-text-dark;
    margin: 0 0 $spacing-sm 0;
  }

  .consideration-text {
    font-size: $font-size-base;
    color: $color-text-medium;
    line-height: 1.6;
    margin: 0;
  }
}

// Адаптивные стили
@media (max-width: 768px) {
  .key-point-item {
    padding: $spacing-lg;
    flex-direction: column;
    gap: $spacing-md;
  }

  .key-point-content {
    width: 100%;
  }

  .lesson-section__header {
    flex-direction: column;
    align-items: flex-start;
    gap: $spacing-lg;
  }

  .lesson-section__icon-wrapper {
    width: 70px;
    height: 70px;
  }

  .lesson-icon--large {
    font-size: $font-size-2xl;
  }

  .lesson-section__title {
    font-size: $font-size-2xl;
  }

  .lesson-section__subtitle {
    font-size: $font-size-lg;
  }

  .feature-card {
    .feature-header {
      flex-direction: column;
      align-items: flex-start;
      gap: $spacing-sm;
    }
  }

  .example-card,
  .consideration-card {
    padding: $spacing-lg;
  }

  .considerations-section {
    padding: $spacing-xl;
  }

  .considerations-title {
    font-size: $font-size-2xl;
    margin-bottom: $spacing-xl;
  }
}

@media (max-width: 480px) {
  .key-point-item {
    padding: $spacing-md;
  }

  .key-point-text {
    font-size: $font-size-base;
  }

  .lesson-section {
    padding: $spacing-lg $spacing-md;
    border-radius: $border-radius-lg;

    &__title {
      font-size: $font-size-xl;
    }

    &__subtitle {
      font-size: $font-size-base;
    }
  }

  .lesson-section__icon-wrapper {
    width: 60px;
    height: 60px;
  }

  .lesson-icon--large {
    font-size: $font-size-xl;
  }

  .lesson-grid--3 {
    grid-template-columns: 1fr;
  }

  .considerations-section {
    border-radius: $border-radius-lg;
    padding: $spacing-lg;
  }

  .considerations-title {
    font-size: $font-size-xl;
  }
}
</style>
