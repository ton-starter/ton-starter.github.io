<script setup lang="ts">
const sections = ref([
  {
    title: 'Что такое TON?',
    content:
      'TON — это платформа для децентрализованных приложений, объединяющая пользователей, валидаторов и разработчиков самих приложений. Это больше, чем просто блокчейн.',
    icon: '🚀',
    gradient: 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)',
  },
  {
    title: 'Три стороны блокчейна TON',
    content: 'Блокчейн TON объединяет три стороны:',
    list: [
      'пользователи, владеющие ассетами в TON;',
      'валидаторы, управляющие консенсусом сети;',
      'разработчики приложений, предоставляющие сервисы на основе сети.',
    ],
    icon: '⚖️',
    gradient: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
  },
]);

const services = ref([
  {
    type: 'Кастодиальные',
    definition:
      'сервисы, управляемые той же стороной, что несется ответственность за средства, размещенные на этих сервисах.',
    example:
      'Онлайн-биржи обычно являются кастодиальными, поскольку им нужно использовать средства с кошельков для того, чтобы гарантировать заявленный обмен.',
    warning:
      'По этой причине онлайн-биржи здесь представляют риск, поскольку злоумышленники могут взломать их и украсть средства без возможности восстановления.',
    color: 'red',
    icon: '🔐',
  },
  {
    type: 'Некастодиальные',
    definition:
      'сервисы, которые не хранят средства пользователей и оставляют их полностью под контролем владельцев.',
    warning:
      'Поскольку все средства остаются в распоряжении пользователей, взламывать системы становится сложнее.',
    color: 'green',
    icon: '🛡️',
  },
]);

const apps = ref([
  {
    type: 'Централизованные',
    definition: 'приложения, работающие на сервере.',
    icon: '🏢',
  },
  {
    type: 'Децентрализованные',
    definition:
      'приложения не требуют наличия сервера, а запускаются напрямую на смарт-контракте блокчейна.',
    icon: '🔗',
  },
]);

const blockchainTools = ref([
  {
    title: 'Смарт-контракты',
    description: 'лежат в основе:',
    items: [
      { name: 'децентрализованных бирж', icon: '💱' },
      {
        name: 'токенов:',
        icon: '🎁',
        subitems: ['валют', 'коллекционных токенов', 'служебных токенов'],
      },
      { name: 'аукционов', icon: '📈' },
      { name: 'доменных имен', icon: '🌐' },
    ],
    gradient: 'linear-gradient(135deg, #f97316 0%, #eab308 100%)',
  },
]);

const ecosystem = ref({
  title: 'Экосистема TON',
  content:
    'объединяет кошельки, обменники, трейдеров и пользователей, взаимодействующих через смарт-контракты.',
  elements: ['👛 Кошельки', '💱 Обменники', '📊 Трейдеры', '👥 Пользователи'],
});
</script>

<template>
  <div class="article">
    <!-- Hero Section -->
    <div class="article__hero">
      <h1 class="article__hero-title">
        <span class="article__hero-icon">⚡</span>
        Быстрое руководство по экосистеме TON
      </h1>
      <p class="article__hero-subtitle">
        Урок 1: Архитектура, сервисы и возможности
      </p>
    </div>

    <!-- Main Content -->
    <div class="article__content">
      <!-- Introduction Section -->
      <section class="article__section article__section--intro">
        <div class="article__section-header">
          <div
            class="article__icon"
            :style="{ background: sections[0].gradient }"
          >
            <span class="article__icon-text">{{ sections[0].icon }}</span>
          </div>
          <h2 class="article__section-title">{{ sections[0].title }}</h2>
        </div>
        <p class="article__section-content article__section-content--large">
          {{ sections[0].content }}
        </p>
      </section>

      <!-- Three Sides of TON -->
      <section class="article__section">
        <div class="article__section-header">
          <div
            class="article__icon"
            :style="{ background: sections[1].gradient }"
          >
            <span class="article__icon-text">{{ sections[1].icon }}</span>
          </div>
          <h2 class="article__section-title">{{ sections[1].title }}</h2>
        </div>
        <p class="article__section-content">{{ sections[1].content }}</p>
        <div class="article__sides">
          <div
            v-for="(item, index) in sections[1].list"
            :key="index"
            class="article__side-card"
          >
            <div class="article__side-number">{{ index + 1 }}</div>
            <p class="article__side-text">{{ item }}</p>
          </div>
        </div>
      </section>

      <!-- Services Comparison -->
      <section class="article__section">
        <h2 class="article__section-title article__section-title--center">
          Типы сервисов
        </h2>
        <div class="article__services">
          <div
            v-for="(service, index) in services"
            :key="index"
            class="article__service article__service--red"
            :class="`article__service--${service.color}`"
          >
            <div class="article__service-header">
              <span class="article__service-icon">{{ service.icon }}</span>
              <h3 class="article__service-type">{{ service.type }}</h3>
            </div>
            <p class="article__service-definition">{{ service.definition }}</p>
            <div v-if="service.example" class="article__example">
              <div class="article__example-label">Пример:</div>
              <p class="article__example-text">{{ service.example }}</p>
            </div>
            <div class="article__warning">
              <div class="article__warning-label">⚠️ Важно:</div>
              <p class="article__warning-text">{{ service.warning }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Apps Comparison -->
      <section class="article__section">
        <h2 class="article__section-title article__section-title--center">
          Типы приложений
        </h2>
        <div class="article__apps">
          <div v-for="(app, index) in apps" :key="index" class="article__app">
            <div class="article__app-header">
              <span class="article__app-icon">{{ app.icon }}</span>
              <h3 class="article__app-type">{{ app.type }}</h3>
            </div>
            <p class="article__app-definition">{{ app.definition }}</p>
          </div>
        </div>
      </section>

      <!-- Blockchain Tools -->
      <section class="article__section">
        <div
          v-for="tool in blockchainTools"
          :key="tool.title"
          class="article__tools"
        >
          <div class="article__section-header">
            <div class="article__icon" :style="{ background: tool.gradient }">
              <span class="article__icon-text">💎</span>
            </div>
            <h2 class="article__section-title">{{ tool.title }}</h2>
          </div>
          <p class="article__section-content">{{ tool.description }}</p>
          <div class="article__tool-items">
            <div
              v-for="(item, index) in tool.items"
              :key="index"
              class="article__tool-item"
            >
              <div class="article__tool-icon">{{ item.icon }}</div>
              <h4 class="article__tool-name">{{ item.name }}</h4>
              <ul v-if="item.subitems" class="article__subitems">
                <li
                  v-for="(subitem, subIndex) in item.subitems"
                  :key="subIndex"
                  class="article__subitem"
                >
                  {{ subitem }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Conclusion -->
      <section class="article__conclusion">
        <div class="article__conclusion-content">
          <h2 class="article__conclusion-title">{{ ecosystem.title }}</h2>
          <p class="article__conclusion-text">{{ ecosystem.content }}</p>
          <div class="article__ecosystem">
            <div
              v-for="(element, index) in ecosystem.elements"
              :key="index"
              class="article__ecosystem-item"
            >
              <div class="article__ecosystem-icon">
                {{ element.split(' ')[0] }}
              </div>
              <span class="article__ecosystem-label">{{
                element.substring(2)
              }}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style lang="scss">
.article {
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
      gap: 12px;
    }

    &-icon {
      font-size: 3rem;
    }

    &-subtitle {
      font-size: 1.25rem;
      color: #6b7280;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  &__section {
    background: white;
    border-radius: 24px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
    padding: 32px;
    transition: box-shadow 0.3s ease;

    &:hover {
      box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
    }

    &--intro {
      border-left: 6px solid #3b82f6;
    }

    &-header {
      display: flex;
      align-items: center;
      gap: 16px;
      margin-bottom: 24px;
    }

    &-title {
      font-size: 1.3rem;
      font-weight: 700;
      color: #1f2937;
      margin: 0;

      &--center {
        text-align: center;
        margin-bottom: 32px;
      }
    }

    &-content {
      font-size: 1.125rem;
      color: #374151;
      line-height: 1.8;
      margin: 0;

      &--large {
        font-size: 1.25rem;
      }
    }
  }

  &__icon {
    width: 56px;
    height: 56px;
    flex: 0 0 56px;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

    &-text {
      font-size: 1.3rem;
    }
  }

  &__sides {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
    margin-top: 24px;

    @media (min-width: 768px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  &__side-card {
    background: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%);
    border-radius: 16px;
    padding: 24px;
    border: 1px solid #e5e7eb;
    transition: all 0.3s ease;

    &:hover {
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.08);
      transform: translateY(-2px);
    }
  }

  &__side-number {
    width: 36px;
    height: 36px;
    background: linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: bold;
    margin-bottom: 16px;
  }

  &__side-text {
    font-size: 1.125rem;
    color: #4b5563;
    margin: 0;
    line-height: 1.6;
  }

  &__services {
    display: grid;
    grid-template-columns: 1fr;
    gap: 24px;

    @media (min-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  &__service {
    border-radius: 16px;
    padding: 24px;
    border-width: 2px;
    border-style: solid;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.02);
    }

    &--red {
      border-color: #fecaca;
      background-color: #fef2f2;
    }

    &--green {
      border-color: #bbf7d0;
      background-color: #f0fdf4;
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

    &-type {
      font-size: 1.5rem;
      font-weight: 700;
      color: #1f2937;
      margin: 0;
    }

    &-definition {
      font-size: 1.125rem;
      color: #4b5563;
      line-height: 1.7;
      margin-bottom: 20px;
    }
  }

  &__example {
    background: rgba(255, 255, 255, 0.5);
    border-radius: 12px;
    padding: 16px;
    margin-bottom: 16px;

    &-label {
      font-weight: 600;
      color: #1f2937;
      margin-bottom: 8px;
    }

    &-text {
      font-size: 1rem;
      color: #4b5563;
      line-height: 1.6;
      margin: 0;
    }
  }

  &__warning {
    background: rgba(254, 243, 199, 0.5);
    border: 1px solid #fbbf24;
    border-radius: 12px;
    padding: 16px;

    &-label {
      font-weight: 600;
      color: #92400e;
      margin-bottom: 8px;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    &-text {
      font-size: 1rem;
      color: #92400e;
      line-height: 1.6;
      margin: 0;
    }
  }

  &__apps {
    display: grid;
    grid-template-columns: 1fr;
    gap: 24px;

    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  &__app {
    background: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%);
    border-radius: 16px;
    padding: 24px;
    border: 1px solid #e5e7eb;
    transition: all 0.3s ease;

    &:hover {
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.08);
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

    &-type {
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

  &__tool-items {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
    margin-top: 32px;

    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 1024px) {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  &__tool-item {
    background: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%);
    border-radius: 16px;
    padding: 24px;
    text-align: center;
    border: 1px solid #e5e7eb;
    transition: all 0.3s ease;

    &:hover {
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.08);
      transform: translateY(-2px);
    }
  }

  &__tool-icon {
    font-size: 2.5rem;
    margin-bottom: 16px;
  }

  &__tool-name {
    font-size: 1.125rem;
    font-weight: 600;
    color: #1f2937;
    margin-bottom: 16px;
  }

  &__subitems {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  &__subitem {
    font-size: 0.875rem;
    color: #6b7280;
    padding: 4px 0;
  }

  &__conclusion {
    background: linear-gradient(135deg, #1f2937 0%, #111827 100%);
    border-radius: 24px;
    padding: 48px 32px;
    text-align: center;

    &-content {
      max-width: 800px;
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
      line-height: 1.8;
      margin-bottom: 32px;
    }
  }

  &__ecosystem {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;

    @media (min-width: 768px) {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  &__ecosystem-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }

  &__ecosystem-icon {
    font-size: 2.5rem;
    margin-bottom: 8px;
  }

  &__ecosystem-label {
    color: #d1d5db;
    font-size: 1rem;
  }

  /* Responsive */
  @media (max-width: 640px) {
    padding: 32px 0;

    &__hero-title {
      font-size: 1.3rem;
      flex-direction: column;
      gap: 8px;
    }

    &__hero-icon {
      font-size: 2.1rem;
    }

    &__app-icon {
      font-size: 1.3rem;
    }

    &__section {
      padding: 24px 26px;

      &-title {
        font-size: 1.45rem;
      }

      &-content {
        font-size: 0.9rem;

        &--large {
          font-size: 1rem;
        }
      }
      .article__service-icon {
        font-size: 1.5rem;
      }
      .article__service-type {
        font-size: 1.1rem;
      }
      .article__service-definition {
        font-size: 0.9rem;
      }
      .article__app-type {
        font-size: 1.1rem;
      }
    }

    &__conclusion {
      padding: 32px 16px;

      &-title {
        font-size: 1.3rem;
      }

      &-text {
        font-size: 1.125rem;
      }
    }
  }
}
</style>
