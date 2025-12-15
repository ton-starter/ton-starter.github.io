<script setup lang="ts"></script>

<template>
  <div class="copyrights-line show-flex flex-between">
    <span> © 2025 TON Starter Guide. </span> &nbsp; &nbsp; &nbsp;
    <a
      href="https://github.com/ton-starter/ton-starter.github.io/"
      target="_blank"
      rel="noopener noreferrer"
    >
      &lt; <IconGithub /> /&gt;
    </a>
  </div>
</template>

<style lang="scss">
.copyrights-line {
  width: 100%;

  z-index: 1500;
  position: relative;
  a {
    color: darkgray;
  }
  svg {
    height: 1.1em;
  }
}
</style>
