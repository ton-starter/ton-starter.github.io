<script setup lang="ts">
import { services } from '~~/data/mapServices';

// Ссылка на область, которую можно перетаскивать
const dragArea = ref(null);

const getInitials = (name: string): string => {
  return name
    .split(' ')
    .map((word) => word[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
};
</script>

<template>
  <div class="ecosystem-table">
    <!--
      v-gsap.add.fromTo="{ scale: 1 }"
      v-gsap.add.to="{ opacity: 3 }" 
        -->
    <div id="drag-area" ref="dragArea" v-gsap.draggable.bounds="'body'">
      <div class="grid-container">
        <div v-for="n in 90" :key="n" class="grid-item">
          {{ n }}
        </div>
        <div
          v-for="service in services"
          :key="service.name"
          class="service-card grid-item"
        >
          <div class="service-header">
            <div class="service-logo">
              <div class="logo-placeholder">
                {{ getInitials(service.name) }}
              </div>
            </div>
            <div class="service-info">
              <h3 class="service-name">{{ service.name }}</h3>
              <span class="service-category">{{ service.category }}</span>
            </div>
          </div>

          <p class="short-description">{{ service.shortDescription }}</p>

          <div class="service-links">
            <a
              v-for="(link, index) in service.links"
              :key="index"
              :href="link.url"
              target="_blank"
              rel="noopener noreferrer"
              class="service-link"
            >
              {{ link.label }}
            </a>
          </div>
        </div>

        <!-- другие элементы -->
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.ecosystem-table {
  font-family:
    -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;

  h2 {
    color: #0088cc;
    margin-bottom: 30px;
    font-size: 28px;
    font-weight: 600;
  }
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 20px;
}

.service-card {
  background: #fff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
  border: 1px solid #e5e7eb;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
}

.service-header {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 15px;
}

.service-logo {
  .logo-placeholder {
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, #0088cc, #00aaff);
    color: white;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 18px;
  }
}

.service-info {
  flex: 1;

  .service-name {
    margin: 0;
    font-size: 18px;
    font-weight: 600;
    color: #1f2937;
  }

  .service-category {
    display: inline-block;
    padding: 4px 8px;
    background: #f3f4f6;
    color: #6b7280;
    border-radius: 6px;
    font-size: 12px;
    font-weight: 500;
    margin-top: 4px;
  }
}

.short-description {
  color: #4b5563;
  line-height: 1.5;
  margin: 15px 0;
  font-size: 14px;
  min-height: 60px;
}

.service-links {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 15px;
  border-top: 1px solid #e5e7eb;
  padding-top: 15px;
}

.service-link {
  display: inline-block;
  padding: 6px 12px;
  background: #f0f9ff;
  color: #0088cc;
  text-decoration: none;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 500;
  transition: all 0.2s ease;
  border: 1px solid #bae6fd;

  &:hover {
    background: #0088cc;
    color: white;
    border-color: #0088cc;
  }
}

#drag-area {
  width: 200vw;
  height: 150vh;
  background: #f0f0f0;
  overflow: hidden;
  // position: absolute;
  // top: 50%;
  // left: 50%;
  // transform: translate(-50%, -50%);
  // cursor: grab;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(10, 1fr);
  gap: 10px;
  width: 100%;
  height: 100%;
  padding: 30vh 30vw;
}

.grid-item {
  background: #ccc;
  padding: 10px;
  text-align: center;
  border-radius: 5px;
}

#drag-area:active {
  cursor: grabbing;
  background: #0088cc;
}

.Dot {
  background-color: green;
}
</style>
