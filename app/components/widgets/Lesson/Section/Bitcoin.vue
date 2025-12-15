<script setup lang="ts">
import type { LessonSection } from '~/components/widgets/Lesson/model/types';
defineProps<{
  section: LessonSection;
  index: number;
}>();
// const sec1 = {
//   title: 'Bitcoin',
//   subtitle: 'Первое поколение блокчейна',
//   content:
//     'Bitcoin — это в принципе первый известный блокчейн. Он был создан для адресных переводов цифровой валюты, защищенных от регуляторов.',
//   points: [
//     {
//       icon: '🔑',
//       text:
//         'Использует реестр аккаунтов, идентифицируемых по уникальным публичным ключам',
//     },
//     {
//       icon: '📝',
//       text: 'Транзакции авторизуются с помощью криптографических подписей',
//     },
//     {
//       icon: '👥',
//       text: 'Поддерживает транзакции со множеством отправителей и получателей',
//     },
//     {
//       icon: '⚡',
//       text: 'Консенсус по схеме Proof-of-Work',
//     },
//     {
//       icon: '💻',
//       text:
//         'Имеется поддержка сценарного языка для сложных схем управления транзакциями',
//     },
//     {
//       icon: '🛡️',
//       text:
//         'Для защиты конфиденциальности предусмотрено создание новых аккаунтов для перевода средств',
//     },
//   ],
//   limitation: 'Ограничен в масштабировании',
//   gradient: 'orange',
// };
</script>

<template>
  <LessonSectionWrapper :index="index">
    <template #header>
      <LessonSectionHeader
        :title="section.title"
        :subtitle="section.subtitle"
        :gradient="section.gradient"
        :generation="index + 1"
      />
    </template>

    <p>{{ section.content }}</p>

    <PointsGrid v-if="section.points" :points="section.points" />

    <LessonAlert
      v-if="section.limitation"
      type="warning"
      :icon="'⚠️'"
      :text="section.limitation"
    />
  </LessonSectionWrapper>
</template>
