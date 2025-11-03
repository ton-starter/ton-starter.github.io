export interface FooterLink {
  name: string;
  url: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export const footerLinks: FooterColumn[] = [
  {
    title: 'Документы',
    links: [
      {
        name: 'Оферта',
        url: '/articles/dogovor-oferta-polzovatelya-nft-platformy',
      },
      { name: 'Процесс оплаты', url: '/articles/informatsiya-ob-oplate' },
      {
        name: 'Правила сервиса',
        url: '/articles/pravila-ispolzovaniya-sayta',
      },
      {
        name: 'Обработка данных',
        url: '/articles/obrabotka-personalnykh-dannykh',
      },
    ],
  },
  {
    title: 'О компании',
    links: [
      { name: 'Партнеры', url: '/#partners' },
      { name: 'Пресса о нас', url: '/#press' },
    ],
  },
];
