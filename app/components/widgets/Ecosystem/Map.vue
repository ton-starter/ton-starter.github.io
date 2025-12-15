<template>
  <div class="ecosystem-services">
    <h2 class="section-title">Экосистема TON</h2>
    <p class="section-subtitle">Ключевые сервисы и инструменты</p>

    <div class="services-grid">
      <div v-for="service in services" :key="service.id" class="service-card">
        <a
          :href="service.link"
          target="_blank"
          rel="noopener noreferrer"
          class="service-link"
        >
          <div class="service-logo">
            <img
              v-if="service.logo"
              :src="service.logo"
              :alt="service.name"
              loading="lazy"
            />
            <div v-else class="logo-placeholder">
              {{ service.initials }}
            </div>
          </div>
          <div class="service-info">
            <h3 class="service-name">{{ service.name }}</h3>
            <p class="service-description">{{ service.description }}</p>
            <el-tag
              v-if="service.category"
              size="small"
              :type="getTagType(service.category)"
              class="service-category"
            >
              {{ service.category }}
            </el-tag>
          </div>
          <div class="service-arrow">
            <i class="el-icon-right" />
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
// Данные сервисов экосистемы TON
const services = [
  {
    id: 1,
    name: 'Toncoin',
    description: 'Нативный токен сети TON',
    category: 'Блокчейн',
    link: 'https://ton.org/toncoin',
    logo: 'https://ton.org/download/ton_symbol.svg',
    initials: 'TON',
  },
  {
    id: 2,
    name: 'TON DNS',
    description: 'Доменные имена в сети TON',
    category: 'Инфраструктура',
    link: 'https://dns.ton.org/',
    logo: null,
    initials: 'DNS',
  },
  {
    id: 3,
    name: 'Tonkeeper',
    description: 'Некастодиальный кошелёк',
    category: 'Кошелёк',
    link: 'https://tonkeeper.com/',
    logo: 'https://tonkeeper.com/favicon.ico',
    initials: 'TK',
  },
  {
    id: 4,
    name: 'STON.fi',
    description: 'Децентрализованная биржа (DEX)',
    category: 'DeFi',
    link: 'https://ston.fi/',
    logo: 'https://ston.fi/favicon.ico',
    initials: 'SF',
  },
  {
    id: 5,
    name: 'Getgems',
    description: 'NFT-маркетплейс',
    category: 'NFT',
    link: 'https://getgems.io/',
    logo: null,
    initials: 'GG',
  },
  {
    id: 6,
    name: 'TON Play',
    description: 'Игровая платформа',
    category: 'Игры',
    link: 'https://tonplay.io/',
    logo: null,
    initials: 'TP',
  },
  {
    id: 7,
    name: 'Telegram Wallet',
    description: 'Кошелёк в Telegram',
    category: 'Кошелёк',
    link: 'https://t.me/wallet',
    logo: 'https://telegram.org/img/t_logo.svg',
    initials: 'TW',
  },
  {
    id: 8,
    name: 'DeDust.io',
    description: 'DEX с ликвидными пулами',
    category: 'DeFi',
    link: 'https://dedust.io/',
    logo: null,
    initials: 'DD',
  },
  {
    id: 9,
    name: 'TON Storage',
    description: 'Децентрализованное хранилище',
    category: 'Инфраструктура',
    link: 'https://ton.org/storage',
    logo: null,
    initials: 'TS',
  },
  {
    id: 10,
    name: 'Megaton Finance',
    description: 'AMM DEX и yield farming',
    category: 'DeFi',
    link: 'https://megaton.fi/',
    logo: null,
    initials: 'MF',
  },
  {
    id: 11,
    name: 'TON App',
    description: 'Каталог dApps',
    category: 'Инструменты',
    link: 'https://ton.app/',
    logo: null,
    initials: 'TA',
  },
  {
    id: 12,
    name: 'TON Dev Tools',
    description: 'Инструменты разработчика',
    category: 'Инструменты',
    link: 'https://ton.org/develop',
    logo: null,
    initials: 'TD',
  },
];

// Функция для определения типа тега по категории
const getTagType = (category) => {
  const types = {
    Блокчейн: 'info',
    Кошелёк: 'success',
    DeFi: 'warning',
    NFT: 'danger',
    Инфраструктура: '',
    Игры: 'success',
    Инструменты: 'info',
  };
  return types[category] || '';
};
</script>

<style lang="scss" scoped>
.ecosystem-services {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  .section-title {
    font-size: 2rem;
    font-weight: 700;
    color: #0088cc;
    margin-bottom: 0.5rem;
    text-align: center;
  }

  .section-subtitle {
    font-size: 1rem;
    color: #666;
    margin-bottom: 2rem;
    text-align: center;
  }
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
}

.service-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  height: 100%;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 136, 204, 0.15);
    border-color: #0088cc;

    .service-arrow {
      opacity: 1;
      transform: translateX(4px);
    }
  }

  .service-link {
    display: flex;
    align-items: center;
    padding: 1.25rem;
    text-decoration: none;
    color: inherit;
    height: 100%;
    min-height: 120px;
  }
}

.service-logo {
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  border-radius: 10px;
  background: linear-gradient(135deg, #0088cc, #00b8ff);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  overflow: hidden;

  img {
    width: 70%;
    height: 70%;
    object-fit: contain;
  }

  .logo-placeholder {
    color: white;
    font-weight: 600;
    font-size: 0.9rem;
  }
}

.service-info {
  flex: 1;
  min-width: 0; // Для правильной работы с overflow

  .service-name {
    font-size: 1.1rem;
    font-weight: 600;
    color: #1a1a1a;
    margin-bottom: 0.25rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .service-description {
    font-size: 0.875rem;
    color: #666;
    margin-bottom: 0.5rem;
    line-height: 1.4;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .service-category {
    font-size: 0.7rem;
  }
}

.service-arrow {
  flex-shrink: 0;
  color: #0088cc;
  opacity: 0.6;
  transition: all 0.3s ease;
  margin-left: 0.5rem;
}
</style>
