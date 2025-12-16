export interface ServiceLink {
  label: string;
  url: string;
}

export interface Service {
  name: string;
  category: string;
  shortDescription: string;
  description: string;
  links: ServiceLink[];
  logo: string;
}

export const services: Service[] = [
  {
    name: 'Telegram Wallet (Wallet)',
    category: 'Wallets',
    shortDescription:
      'Официальный некастодиальный кошелёк, интегрированный в Telegram для управления активами TON.',
    description:
      'Этот кошелёк позволяет пользователям покупать криптовалюту за фиат, совершать беспроцентные переводы другим пользователям Telegram и получать доступ к TON Space для управления Toncoin, Jettons и коллекционными предметами; он поддерживает плавное взаимодействие с Web3-приложениями и имеет функции конвертации криптовалюты в фиат.',
    links: [{ label: 'ton.org', url: 'https://ton.org' }],
    logo: '/img/logo/map/wallet_tg_logo.jpg',
  },
  {
    name: 'TON DNS',
    category: 'Infrastructure',
    shortDescription:
      'Децентрализованная система имен для присвоения читаемых имён кошелькам, контрактам или сайтам.',
    description:
      'Аналогично ENS, TON DNS преобразует имена типа "alice.ton" в идентификаторы с годовой платой около 0,015 TON; интегрирован в кошельки типа Tonkeeper и поддерживает аукционы доменов.',
    links: [{ label: 'ton.org', url: 'https://dns.ton.org/' }],
    logo: '/img/logo/map/TON_DNS_logo.svg',
  },
  {
    name: 'TON Storage',
    category: 'Infrastructure',
    shortDescription:
      'Децентрализованное P2P хранилище файлов, использующее технологию типа торрентов.',
    description:
      'TON Storage выступает как "децентрализованный Amazon S3" для хранения данных блокчейна и файлов, позволяя пользователям создавать "Bags" через смарт-контракты; поддерживает хостинг TON сайтов.',
    links: [
      {
        label: 'ton.org',
        url: 'https://docs.ton.org/foundations/services#ton-storage',
      },
    ],
    logo: '/img/logo/map/TON_Storage_logo.png',
  },
  {
    name: 'TON Proxy',
    category: 'Infrastructure',
    shortDescription:
      'Сетевая служба для анонимного доступа, скрывая IP-адреса в экосистеме TON.',
    description:
      'TON Proxy обеспечивает косвенные подключения для конфиденциальности, поддерживая .ton сайты и создавая анонимную сеть типа I2P; пользователи могут запускать прокси-узлы для получения дохода.',
    links: [
      {
        label: 'ton.org',
        url: 'https://docs.ton.org/foundations/services#ton-proxy',
      },
    ],
    logo: '/img/logo/map/TON_ICON.png',
  },
  {
    name: 'TON Payments',
    category: 'Infrastructure',
    shortDescription:
      'Платформа для микроплатежей с офф-чейн каналами для транзакций с низкой комиссией.',
    description:
      'Интегрированная в Telegram бота @wallet, TON Payments облегчает P2P и торговые платежи, аналогично Lightning Network; поддерживает будущие расширения вроде многоканальных микроплатежей с комиссиями.',
    links: [
      {
        label: 'ton.org',
        url: 'https://docs.ton.org/foundations/services#ton-payments',
      },
    ],
    logo: '/img/logo/map/Cryptopay.svg',
  },
  {
    name: 'Cross-Chain Bridges',
    category: 'Infrastructure',
    shortDescription:
      'Протоколы для переноса активов между блокчейнами TON, Ethereum и Solana.',
    description:
      'Layerswap обеспечивает плавные переводы криптовалют между экосистемами, а XP.NETWORK фокусируется на переносе NFT через 30+ сетей; эти инструменты улучшают интероперабельность.',
    links: [
      { label: 'ton.org', url: 'https://docs.ton.org/ecosystem/bridges' },
    ],
    logo: '/img/logo/map/TON_ICON.png',
  },
  {
    name: 'DeDust',
    category: 'DeFi',
    shortDescription:
      'Крупнейший AMM DEX на TON для свопов активов и кросс-чейн бриджинга.',
    description:
      'DeDust имеет TVL почти $379M, предлагает ликвидностные пулы, стейкинг с APR до 150% и трекер портфеля; работает на токене SCALE, взимает 0.4% комиссии и поддерживает торговлю мем-токенами.',
    links: [{ label: 'dedust.io', url: 'https://app.dedust.io/' }],
    logo: '/img/logo/map/dedust_logo.png',
  },
  {
    name: 'STON.fi',
    category: 'DeFi',
    shortDescription:
      'Пермишнлесс AMM DEX, интегрированный с кошельками TON для свопов и предоставления ликвидности.',
    description:
      'С TVL более $305M, STON.fi поддерживает кросс-чейн свопы, фарминг до 83% APR и управление через токен STON; интегрирован с EVAA для объединённых свопов и кредитования.',
    links: [{ label: 'ston.fi', url: 'https://ston.fi/' }],
    logo: '/img/logo/map/stonfi_logo.png',
  },
  {
    name: 'Tonstakers',
    category: 'DeFi',
    shortDescription:
      'Ведущий протокол ликвидного стейкинга на TON для получения вознаграждений с производным tsTON.',
    description:
      'Tonstakers имеет самый высокий TVL с более чем $260M в стейкинге, предлагает 3%+ APR без локапов; имеет открытый исходный код, аудирован Certik и позволяет использовать tsTON в DeFi.',
    links: [{ label: 'coingecko', url: 'https://coingecko.com' }],
    logo: '/img/logo/map/wallet_tg_logo.jpg',
  },
  {
    name: 'EVAA Protocol',
    category: 'DeFi',
    shortDescription:
      'Интегрированный в Telegram кредитный протокол для займа и кредитования активов TON.',
    description:
      'Инкубированный TON Starter, EVAA обеспечивает плавное кредитование с интеграциями типа STON.fi для комбинированных свопов; фокусируется на удобном DeFi внутри Telegram.',
    links: [{ label: 'gate.com', url: 'https://gate.com' }],
    logo: '/img/logo/map/wallet_tg_logo.jpg',
  },
  {
    name: 'Ethena',
    category: 'DeFi',
    shortDescription: 'Протокол доходных стейблкоинов с USDe и tsUSDe на TON.',
    description:
      'Ethena предлагает до 20% APY через кампании, с предложением $193.9M и образовательными хабами; интегрирует обучающие стимулы для вовлечения пользователей.',
    links: [{ label: 'ton.org', url: 'https://ton.org' }],
    logo: '/img/logo/map/wallet_tg_logo.jpg',
  },
  {
    name: 'TON Builders',
    category: 'dev',
    shortDescription: 'Протокол доходных стейблкоинов с USDe и tsUSDe на TON.',
    description:
      'Ethena предлагает до 20% APY через кампании, с предложением $193.9M и образовательными хабами; интегрирует обучающие стимулы для вовлечения пользователей.',
    links: [
      {
        label: 'ton.org',
        url: 'https://builders.ton.org/founder/support-programs',
      },
    ],
    logo: '/img/logo/map/nest_logo.svg',
  },
  {
    name: 'TON Nest',
    category: 'dev',
    shortDescription: 'Протокол доходных стейблкоинов с USDe и tsUSDe на TON.',
    description:
      'Ethena предлагает до 20% APY через кампании, с предложением $193.9M и образовательными хабами; интегрирует обучающие стимулы для вовлечения пользователей.',
    links: [
      {
        label: 'ton.org',
        url: 'https://builders.ton.org/opportunities/ton-nest?tab=overview',
      },
    ],
    logo: '/img/logo/map/nest_logo.svg',
  },
];
