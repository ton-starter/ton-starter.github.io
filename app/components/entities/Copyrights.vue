<script setup lang="ts"></script>

<template>
  <div class="copyrights-line show-flex flex-between">
    <el-text size="large">
      <span> © 2025 TON Starter Guide. </span> &nbsp; &nbsp; &nbsp;
    </el-text>
    <el-text size="small">
      <NuxtLink
        to="https://github.com/ton-starter/ton-starter.github.io"
        target="_blank"
      >
        &nbsp; &lt;<IconGithub />/&gt; &nbsp;
      </NuxtLink>
    </el-text>
    <el-row>
      <el-link href="/el-playground-demo" type="primary">
        <ElIconElementPlus /> element-plus-demo
      </el-link>
    </el-row>
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
