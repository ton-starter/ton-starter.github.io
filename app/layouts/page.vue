<script setup lang="ts"></script>

<template>
  <div class="main-app-block">
    <NuxtLink to="/" class="backlink"> 🔙 </NuxtLink>

    <main class="container">
      <slot />
    </main>
    <FooterDefault />
  </div>
</template>

<style lang="scss">
.backlink {
  background: transparent;
  color: #3498db;
  text-decoration: none;
  position: absolute;
  top: 0;
  left: 0;
  font-size: 2.5rem;
  padding: 32px 24px 12px;
  font-weight: 500;
  cursor: pointer;
  width: min-content;
}
</style>
