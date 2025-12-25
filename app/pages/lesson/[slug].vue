<script setup lang="ts">
const slug = useRoute().params.slug;
const { data: lesson } = await useAsyncData(`lesson-${slug}`, () => {
  return queryCollection('lessons').first();
});

console.log('lesson', lesson.value);
useSeoMeta({
  title: lesson.value?.title,
  description: lesson.value?.description,
});
</script>

<template>
  <ContentRenderer v-if="lesson" :value="lesson" />
  <div v-else>Lesson not found</div>
</template>

<style scoped>
.html-content {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  line-height: 1.6;
}

blockquote {
  border-left: 4px solid #ccc;
  padding-left: 15px;
  margin-left: 0;
  color: #666;
  font-style: italic;
}
</style>
