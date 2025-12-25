<script setup lang="ts">
const slug = useRoute().params.slug;
const { data: lesson } = await useAsyncData(`lesson-${slug}`, () => {
  return queryCollection('lessons').first();
});

console.log('lessonValue', lesson.value);
useSeoMeta({
  title: lesson.value?.title,
  description: lesson.value?.description,
});
</script>

<template>
  <ContentRenderer v-if="lesson" :value="lesson" class="default-lesson" />
  <div v-else>Lesson not found</div>
</template>

<style lang="scss">
.default-lesson {
  // Базовые стили
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1rem;
  font-family:
    -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue',
    Arial, sans-serif;
  line-height: 1.6;
  color: #333;
  background-color: #fff;

  // Типографика
  & h1 {
    font-size: 2.5rem;
    font-weight: 700;
    line-height: 1.2;
    margin: 2rem 0 1.5rem;
    color: #1a1a1a;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid #f0f0f0;

    &::before {
      content: '';
      display: inline-block;
      margin-right: 0.5rem;
    }
  }

  & h2 {
    font-size: 1.8rem;
    font-weight: 600;
    line-height: 1.3;
    margin: 2rem 0 1rem;
    color: #2c3e50;
    padding-top: 0.5rem;

    & a {
      color: inherit;
      text-decoration: none;

      &:hover {
        color: #3498db;
      }
    }
  }

  & h3 {
    font-size: 1.4rem;
    font-weight: 600;
    line-height: 1.4;
    margin: 1.5rem 0 1rem;
    color: #34495e;

    & a {
      color: inherit;
      text-decoration: none;

      &:hover {
        color: #3498db;
      }
    }
  }

  & p {
    margin: 1rem 0;
    font-size: 1.1rem;
    line-height: 1.7;
    color: #2d3748;

    & em {
      font-style: italic;
      color: #4a5568;
    }

    & strong {
      font-weight: 600;
      color: #2d3748;
    }
  }

  // Блоки цитат
  & blockquote {
    margin: 1.5rem 0;
    padding: 1.5rem;
    background-color: #f8fafc;
    border-left: 4px solid #3498db;
    border-radius: 4px;

    & p {
      margin: 0.5rem 0;
      font-size: 1.1rem;
      color: #2d3748;

      &:first-child {
        margin-top: 0;
      }

      &:last-child {
        margin-bottom: 0;
      }
    }

    & ul {
      margin: 0.5rem 0;
      padding-left: 1.5rem;
    }

    & li {
      margin: 0.3rem 0;
      color: #4a5568;
    }

    & strong {
      color: #2c3e50;
      font-weight: 600;
    }

    & em {
      font-style: italic;
      color: #4a5568;
    }
  }

  // Списки
  & ul {
    margin: 1rem 0;
    padding-left: 1.5rem;

    & li {
      display: list-item;
      margin: 0.5rem 0;
      font-size: 1.1rem;
      line-height: 1.6;
      color: #2d3748;
      position: relative;

      &::marker {
        color: #3498db;
      }

      & ul {
        margin: 0.5rem 0;
        padding-left: 1rem;
      }
    }
  }

  // Эмодзи и декоративные элементы
  & [id*='конспект'] h1::before {
    content: '📚 ';
  }

  & blockquote p:has(> strong:contains('Токенизация'))::before {
    content: '📗 ';
    margin-right: 0.3rem;
  }

  &
    blockquote
    p:has(
      > strong:contains('В TON взаимозаменяемые токены можно масштабировать')
    )::before {
    content: '📙 ';
    margin-right: 0.3rem;
  }

  & blockquote p:has(> strong:contains('NFT'))::before {
    content: '🎨 ';
    margin-right: 0.3rem;
  }

  & blockquote p:contains('🎉 Важная особенность')::before {
    content: '🎉 ';
    margin-right: 0.3rem;
  }

  & li:contains('💸')::before,
  & li:contains('💎')::before,
  & li:contains('📚')::before {
    margin-right: 0.5rem;
  }

  // Специфичные селекторы для улучшения читаемости
  & > *:first-child {
    margin-top: 0;
  }

  & > *:last-child {
    margin-bottom: 0;
  }

  // Адаптивность
  @media (max-width: 768px) {
    padding: 1.5rem 0.75rem;

    & h1 {
      font-size: 2rem;
      margin: 1.5rem 0 1rem;
    }

    & h2 {
      font-size: 1.5rem;
      margin: 1.5rem 0 0.75rem;
    }

    & h3 {
      font-size: 1.2rem;
      margin: 1.25rem 0 0.75rem;
    }

    & p,
    & li {
      font-size: 1rem;
    }

    & blockquote {
      padding: 1.25rem;
      margin: 1.25rem 0;
    }
  }

  @media (max-width: 480px) {
    padding: 1rem 0.5rem;

    & h1 {
      font-size: 1.75rem;
    }

    & h2 {
      font-size: 1.3rem;
    }

    & h3 {
      font-size: 1.1rem;
    }
  }
}
</style>
