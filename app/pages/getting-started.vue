<script setup lang="ts"></script>

<template>
  <section class="step">
    <h2>Шаг 0. Ознакомься с документацией</h2>
    <h3>Быстрое руководство по экосистеме TON</h3>
    <ul>
      <li><nuxt-link :to="`/lesson1`">Урок 1</nuxt-link></li>
      <li><nuxt-link :to="`/lesson2`">Урок 2</nuxt-link></li>
      <li><nuxt-link :to="`/lesson3`">Урок 3</nuxt-link></li>
      <li><nuxt-link :to="`/lesson4`">Урок 4</nuxt-link></li>
    </ul>

    <h2>Шаг 1. Установи TON Wallet</h2>
    <p>
      Скачай TON Wallet из официального источника и создай новый кошелёк.
      Сохрани секретные слова безопасно.
    </p>
    <a class="btn" href="https://ton.org/wallets" target="_blank">
      Установить Wallet
    </a>
  </section>

  <section class="step">
    <h2>Шаг 2. Пополни баланс</h2>
    <p>
      Купи TON на бирже или получи от друга. Переведи монеты на свой кошелёк TON
      для начала.
    </p>
  </section>

  <section class="step">
    <h2>Шаг 3. Изучи приложения TON</h2>
    <p>
      Используй DeFi, NFT, Games и другие DApps. Проверь проекты в TON Apps.
    </p>
    <a class="btn" href="https://ton.app/" target="_blank"> Открыть ton.app </a>
  </section>

  <section class="step">
    <h2>Шаг 4. Безопасность и сообщества</h2>
    <p>
      Береги seed-фразы, используй официальные ресурсы и присоединяйся к
      сообществам TON в Telegram.
    </p>
  </section>
</template>

<style lang="scss"></style>
