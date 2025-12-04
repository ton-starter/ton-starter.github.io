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
    gradient: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
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
    gradient: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
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
    gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
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
    gradient: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
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
    gradient: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)',
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
  <div class="lesson">
    <!-- Hero Section -->
    <div class="lesson__hero">
      <h1 class="lesson__hero-title">
        <span class="lesson__hero-icon">🔧</span>
        Урок 4: Смарт-контракты TON
      </h1>
      <p class="lesson__hero-subtitle">
        Устройство, адресация, изоляция и экономика смарт-контрактов
      </p>
    </div>

    <!-- Key Points -->
    <section class="lesson__key-points">
      <div class="lesson__key-points-header">
        <div class="lesson__key-points-icon">📝</div>
        <h2 class="lesson__key-points-title">Краткие тезисы</h2>
      </div>
      <div class="lesson__key-points-content">
        <div class="lesson__points-container">
          <div
            v-for="(point, index) in keyPoints"
            :key="index"
            class="lesson__key-point"
          >
            <div class="lesson__key-point-icon">{{ point.icon }}</div>
            <div class="lesson__key-point-content">
              <div class="lesson__key-point-number">{{ index + 1 }}</div>
              <p class="lesson__key-point-text">{{ point.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <div class="lesson__content">
      <!-- Contract Details -->
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
            <span class="lesson__section-icon">{{ section.icon }}</span>
          </div>
          <div class="lesson__section-title-wrapper">
            <h2 class="lesson__section-title">{{ section.title }}</h2>
            <h3 class="lesson__section-subtitle">{{ section.subtitle }}</h3>
          </div>
        </div>

        <!-- Points List -->
        <div v-if="section.points" class="lesson__section-points">
          <ul class="lesson__points-list">
            <li
              v-for="(point, pointIndex) in section.points"
              :key="pointIndex"
              class="lesson__point-item"
            >
              {{ point }}
            </li>
          </ul>
        </div>

        <!-- Content -->
        <p v-if="section.content" class="lesson__section-content">
          {{ section.content }}
        </p>

        <!-- Features -->
        <div v-if="section.features" class="lesson__features">
          <div
            v-for="(feature, featureIndex) in section.features"
            :key="featureIndex"
            class="lesson__feature"
          >
            <div class="lesson__feature-header">
              <div class="lesson__feature-icon-wrapper">
                <span class="lesson__feature-icon">{{ feature.icon }}</span>
              </div>
              <h3 class="lesson__feature-title">{{ feature.title }}</h3>
            </div>
            <div class="lesson__feature-content">
              <p class="lesson__feature-text">{{ feature.content }}</p>
              <div
                v-if="feature.explanation"
                class="lesson__feature-explanation"
              >
                <div class="lesson__explanation-icon">❓</div>
                <p class="lesson__explanation-text">
                  {{ feature.explanation }}
                </p>
              </div>
              <div v-if="feature.benefit" class="lesson__feature-benefit">
                <div class="lesson__benefit-icon">✅</div>
                <p class="lesson__benefit-text">{{ feature.benefit }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Question -->
        <div v-if="section.question" class="lesson__question">
          <div class="lesson__question-icon">❓</div>
          <h3 class="lesson__question-text">{{ section.question }}</h3>
        </div>

        <!-- Examples -->
        <div v-if="section.examples" class="lesson__examples">
          <div class="lesson__examples-grid">
            <div
              v-for="(example, exampleIndex) in section.examples"
              :key="exampleIndex"
              class="lesson__example-card"
            >
              <div class="lesson__example-icon">{{ example.icon }}</div>
              <h4 class="lesson__example-title">{{ example.title }}</h4>
              <p class="lesson__example-description">
                {{ example.description }}
              </p>
            </div>
          </div>
        </div>

        <!-- Note -->
        <div v-if="section.note" class="lesson__note">
          <div class="lesson__note-icon">💡</div>
          <p class="lesson__note-text">{{ section.note }}</p>
        </div>

        <!-- Parameters -->
        <div v-if="section.parameters" class="lesson__parameters">
          <h3 class="lesson__parameters-title">Параметры токена:</h3>
          <div class="lesson__parameters-list">
            <div
              v-for="(param, paramIndex) in section.parameters"
              :key="paramIndex"
              class="lesson__parameter"
            >
              <div class="lesson__parameter-icon">{{ param.icon }}</div>
              <div class="lesson__parameter-content">
                <h4 class="lesson__parameter-name">{{ param.name }}</h4>
                <p class="lesson__parameter-description">
                  {{ param.description }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Process -->
        <div v-if="section.process" class="lesson__process">
          <div class="lesson__process-header">
            <div class="lesson__process-icon">{{ section.process.icon }}</div>
            <h3 class="lesson__process-title">{{ section.process.title }}</h3>
          </div>
          <ol class="lesson__process-steps">
            <li
              v-for="(step, stepIndex) in section.process.steps"
              :key="stepIndex"
              class="lesson__process-step"
            >
              <span class="lesson__step-number">{{ stepIndex + 1 }}</span>
              {{ step }}
            </li>
          </ol>
        </div>

        <!-- Components -->
        <div v-if="section.components" class="lesson__components">
          <div
            v-for="(component, componentIndex) in section.components"
            :key="componentIndex"
            class="lesson__component"
            :class="`lesson__component--${componentIndex}`"
          >
            <div class="lesson__component-header">
              <div class="lesson__component-icon">{{ component.icon }}</div>
              <h3 class="lesson__component-title">{{ component.title }}</h3>
            </div>
            <ul class="lesson__component-points">
              <li
                v-for="(point, pointIndex) in component.points"
                :key="pointIndex"
                class="lesson__component-point"
              >
                {{ point }}
              </li>
            </ul>
            <div v-if="component.warning" class="lesson__component-warning">
              <div class="lesson__warning-icon">⚠️</div>
              <p class="lesson__warning-text">{{ component.warning }}</p>
            </div>
          </div>
        </div>

        <!-- Process List -->
        <div v-if="section.process" class="lesson__process-list">
          <h3 class="lesson__process-list-title">Процесс заморозки:</h3>
          <ul class="lesson__process-items">
            <li
              v-for="(item, itemIndex) in section.process"
              :key="itemIndex"
              class="lesson__process-item"
            >
              {{ item }}
            </li>
          </ul>
        </div>

        <!-- Recovery -->
        <div v-if="section.recovery" class="lesson__recovery">
          <div class="lesson__recovery-header">
            <div class="lesson__recovery-icon">{{ section.recovery.icon }}</div>
            <h3 class="lesson__recovery-title">{{ section.recovery.title }}</h3>
          </div>
          <p class="lesson__recovery-description">
            {{ section.recovery.description }}
          </p>
        </div>
      </section>

      <!-- Development Considerations -->
      <section class="lesson__considerations">
        <h2 class="lesson__considerations-title">
          🧠 Что важно при разработке
        </h2>
        <div class="lesson__considerations-grid">
          <div class="lesson__consideration">
            <div class="lesson__consideration-icon">⚡</div>
            <h3 class="lesson__consideration-title">Стоимость газа</h3>
            <p class="lesson__consideration-text">
              Учитывайте стоимость исполнения инструкций в TVM. Каждая операция
              расходует газ, который оплачивается из баланса контракта.
            </p>
          </div>
          <div class="lesson__consideration">
            <div class="lesson__consideration-icon">⏳</div>
            <h3 class="lesson__consideration-title">Аренда данных</h3>
            <p class="lesson__consideration-text">
              Планируйте бюджет для оплаты хранения данных. Каждый бит данных
              требует постоянной оплаты "аренды".
            </p>
          </div>
          <div class="lesson__consideration">
            <div class="lesson__consideration-icon">💰</div>
            <h3 class="lesson__consideration-title">Баланс контракта</h3>
            <p class="lesson__consideration-text">
              Следите за балансом контракта. Недостаток средств приведет к
              заморозке и остановке работы.
            </p>
          </div>
        </div>
      </section>

      <!-- Summary -->
      <section class="lesson__summary">
        <div class="lesson__summary-content">
          <h2 class="lesson__summary-title">{{ summary.title }}</h2>
          <p class="lesson__summary-text">{{ summary.content }}</p>
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

  &__points-container {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  &__key-point {
    display: flex;
    align-items: flex-start;
    gap: 20px;
    padding: 24px;
    background: white;
    border-radius: 16px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
    }
  }

  &__key-point-icon {
    font-size: 2rem;
    flex-shrink: 0;
    margin-top: 4px;
  }

  &__key-point-content {
    flex: 1;
    display: flex;
    align-items: flex-start;
    gap: 16px;
  }

  &__key-point-number {
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

  &__key-point-text {
    font-size: 1.125rem;
    color: #4b5563;
    line-height: 1.6;
    margin: 0;
    flex: 1;
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
      border-top: 6px solid #3b82f6;
    }

    &--1 {
      border-top: 6px solid #8b5cf6;
    }

    &--2 {
      border-top: 6px solid #f59e0b;
    }

    &--3 {
      border-top: 6px solid #ef4444;
    }

    &--4 {
      border-top: 6px solid #06b6d4;
    }

    &-header {
      display: flex;
      align-items: flex-start;
      gap: 24px;
      margin-bottom: 28px;
      padding-bottom: 24px;
      border-bottom: 2px solid #f3f4f6;
    }

    &-icon-wrapper {
      width: 80px;
      height: 80px;
      border-radius: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15);
    }

    &-icon {
      font-size: 2.5rem;
      color: white;
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

  &__section-points {
    margin: 20px 0;
  }

  &__points-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  &__point-item {
    font-size: 1.125rem;
    color: #4b5563;
    line-height: 1.6;
    padding-left: 32px;
    position: relative;

    &::before {
      content: '•';
      position: absolute;
      left: 0;
      color: #3b82f6;
      font-size: 2rem;
      top: -8px;
    }
  }

  &__section-content {
    font-size: 1.25rem;
    color: #4b5563;
    line-height: 1.8;
    margin: 0 0 28px 0;
  }

  &__features {
    display: flex;
    flex-direction: column;
    gap: 32px;
    margin: 28px 0;
  }

  &__feature {
    background: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%);
    border-radius: 16px;
    padding: 28px;
    border: 1px solid #e5e7eb;

    &-header {
      display: flex;
      align-items: center;
      gap: 16px;
      margin-bottom: 20px;
    }

    &-icon-wrapper {
      width: 60px;
      height: 60px;
      border-radius: 16px;
      background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    &-icon {
      font-size: 1.5rem;
      color: white;
    }

    &-title {
      font-size: 1.5rem;
      font-weight: 700;
      color: #1f2937;
      margin: 0;
    }

    &-content {
      padding-left: 76px;
    }

    &-text {
      font-size: 1.125rem;
      color: #4b5563;
      line-height: 1.7;
      margin: 0 0 16px 0;
    }
  }

  &__feature-explanation,
  &__feature-benefit {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    padding: 16px;
    border-radius: 12px;
    margin-top: 16px;
  }

  &__feature-explanation {
    background: rgba(219, 234, 254, 0.5);
    border: 1px solid #93c5fd;
  }

  &__feature-benefit {
    background: rgba(220, 252, 231, 0.5);
    border: 1px solid #86efac;
  }

  &__explanation-icon,
  &__benefit-icon {
    font-size: 1.25rem;
    flex-shrink: 0;
    margin-top: 2px;
  }

  &__explanation-text,
  &__benefit-text {
    font-size: 1.125rem;
    color: #4b5563;
    line-height: 1.6;
    margin: 0;
  }

  &__question {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 24px;
    background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
    border-radius: 12px;
    margin: 24px 0;
    border: 1px solid #93c5fd;

    &-icon {
      font-size: 1.5rem;
      flex-shrink: 0;
    }

    &-text {
      font-size: 1.375rem;
      font-weight: 600;
      color: #1e40af;
      margin: 0;
    }
  }

  &__examples {
    margin: 24px 0;
  }

  &__examples-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 24px;

    @media (min-width: 768px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  &__example-card {
    background: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%);
    border-radius: 16px;
    padding: 24px;
    text-align: center;
    border: 1px solid #e5e7eb;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
    }
  }

  &__example-icon {
    font-size: 2.5rem;
    margin-bottom: 16px;
  }

  &__example-title {
    font-size: 1.25rem;
    font-weight: 700;
    color: #1f2937;
    margin: 0 0 12px 0;
  }

  &__example-description {
    font-size: 1rem;
    color: #4b5563;
    line-height: 1.6;
    margin: 0;
  }

  &__note {
    display: flex;
    align-items: flex-start;
    gap: 16px;
    padding: 20px;
    background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
    border-radius: 12px;
    margin: 24px 0;
    border: 1px solid #fbbf24;

    &-icon {
      font-size: 1.5rem;
      flex-shrink: 0;
      margin-top: 2px;
    }

    &-text {
      font-size: 1.125rem;
      font-weight: 500;
      color: #92400e;
      line-height: 1.6;
      margin: 0;
    }
  }

  &__parameters {
    margin: 24px 0;

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

  &__parameter {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 20px;
    background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
    border-radius: 12px;
    border: 1px solid #86efac;

    &-icon {
      font-size: 1.5rem;
      flex-shrink: 0;
    }

    &-content {
      flex: 1;
    }

    &-name {
      font-size: 1.125rem;
      font-weight: 600;
      color: #065f46;
      margin: 0 0 8px 0;
    }

    &-description {
      font-size: 1rem;
      color: #065f46;
      line-height: 1.6;
      margin: 0;
    }
  }

  &__process {
    background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
    border-radius: 16px;
    padding: 24px;
    margin: 24px 0;

    &-header {
      display: flex;
      align-items: center;
      gap: 16px;
      margin-bottom: 20px;
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

    &-steps {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    &-step {
      display: flex;
      align-items: flex-start;
      gap: 16px;
      font-size: 1.125rem;
      color: #4b5563;
      line-height: 1.6;
    }

    &-step-number {
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
  }

  &__components {
    display: flex;
    flex-direction: column;
    gap: 32px;
    margin: 28px 0;
  }

  &__component {
    background: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%);
    border-radius: 16px;
    padding: 28px;
    border: 1px solid #e5e7eb;

    &--0 {
      border-left: 4px solid #3b82f6;
    }

    &--1 {
      border-left: 4px solid #ef4444;
    }

    &-header {
      display: flex;
      align-items: center;
      gap: 16px;
      margin-bottom: 20px;
    }

    &-icon {
      font-size: 2rem;
    }

    &-title {
      font-size: 1.5rem;
      font-weight: 700;
      color: #1f2937;
      margin: 0;
    }

    &-points {
      list-style: none;
      padding: 0 0 0 24px;
      margin: 0 0 20px 0;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    &-point {
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

    &-warning {
      display: flex;
      align-items: flex-start;
      gap: 12px;
      padding: 20px;
      background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
      border-radius: 12px;
      border: 1px solid #fbbf24;

      &-icon {
        font-size: 1.25rem;
        flex-shrink: 0;
        margin-top: 2px;
      }

      &-text {
        font-size: 1.125rem;
        color: #92400e;
        line-height: 1.6;
        margin: 0;
      }
    }
  }

  &__recovery {
    background: linear-gradient(135deg, #ecfeff 0%, #cffafe 100%);
    border-radius: 16px;
    padding: 24px;
    margin: 24px 0;
    border: 1px solid #67e8f9;

    &-header {
      display: flex;
      align-items: center;
      gap: 16px;
      margin-bottom: 16px;
    }

    &-icon {
      font-size: 2rem;
    }

    &-title {
      font-size: 1.375rem;
      font-weight: 600;
      color: #0e7490;
      margin: 0;
    }

    &-description {
      font-size: 1.125rem;
      color: #0e7490;
      line-height: 1.7;
      margin: 0;
    }
  }

  &__considerations {
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

    &-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 24px;

      @media (min-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
      }
    }
  }

  &__consideration {
    background: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%);
    border-radius: 16px;
    padding: 24px;
    text-align: center;
    border: 1px solid #e5e7eb;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
    }

    &-icon {
      font-size: 2.5rem;
      margin-bottom: 16px;
    }

    &-title {
      font-size: 1.25rem;
      font-weight: 700;
      color: #1f2937;
      margin: 0 0 12px 0;
    }

    &-text {
      font-size: 1rem;
      color: #4b5563;
      line-height: 1.6;
      margin: 0;
    }
  }

  &__summary {
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

    &__key-point {
      padding: 20px;
      flex-direction: column;
      gap: 16px;
    }

    &__key-point-content {
      width: 100%;
    }

    &__section {
      padding: 24px;

      &-header {
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;
      }

      &-icon-wrapper {
        width: 70px;
        height: 70px;
      }

      &-icon {
        font-size: 2rem;
      }

      &-title {
        font-size: 1.75rem;
      }

      &-subtitle {
        font-size: 1.125rem;
      }
    }

    &__feature-content {
      padding-left: 0;
    }

    &__examples-grid {
      grid-template-columns: 1fr;
    }

    &__considerations-grid {
      grid-template-columns: 1fr;
    }

    &__summary {
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
        width: 60px;
        height: 60px;
      }

      &-icon {
        font-size: 1.75rem;
      }

      &-title {
        font-size: 1.5rem;
      }
    }

    &__key-points,
    &__considerations,
    &__summary {
      border-radius: 16px;
    }

    &__key-points {
      padding: 20px;
    }

    &__summary {
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
