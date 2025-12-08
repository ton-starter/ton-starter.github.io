<script setup lang="ts">
defineProps<{ icon?: string }>();
</script>
<template>
  <div v-if="icon">{{ icon }}</div>
</template>
