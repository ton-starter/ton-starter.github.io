<script setup lang="ts"></script>

<template>
  <div class="main-app-block map">
    <NuxtLink to="/" class="backlink"> 🔙 </NuxtLink>
    <slot />
  </div>
</template>

<style lang="scss">
.map {
  overflow: hidden;
  .backlink {
    background: transparent;
    color: #3498db;
    text-decoration: none;
    position: absolute;
    top: 0;
    left: 0;
    font-size: 2.5rem;
    padding: 32px 32px 12px;
    font-weight: 500;
    cursor: pointer;

    width: min-content;
    z-index: 1500;
  }
}
</style>
