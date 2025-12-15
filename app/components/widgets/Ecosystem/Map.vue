<script setup lang="ts">
import { services, type Service } from '~~/data/mapServices';

const selectedService = ref(null);
const dialogVisible = ref(false);

const openDialog = (service: Service) => {
  selectedService.value = service;
  dialogVisible.value = true;
};

const getInitials = (name: string): string => {
  return name
    .split(' ')
    .map((word) => word[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
};

const servicesWithPositions = services.map((service, index) => {
  const category = service.category.toLowerCase();
  let start, rowStart;

  switch (category) {
    case 'infrastructure':
      start = 46 + (index % 3); // 46, 47, 48
      rowStart = 1 + Math.floor(index / 3); // 1, 2
      break;
    case 'defi':
      start = 63 + (index % 2); // 63, 64
      rowStart = 7 + Math.floor(index / 2); // 7, 8
      break;
    default:
      start = index % 10;
      rowStart = Math.floor(index / 10);
  }

  return {
    ...service,
    gridColumn: `${start} / ${start + 1}`,
    gridRow: `${rowStart} / ${rowStart + 1}`,
  };
});
</script>

<template>
  <div class="ecosystem-table">
    <div id="drag-area" ref="dragArea" v-gsap.draggable.bounds="'body'">
      <div class="grid-container">
        <div v-for="n in 90" :key="n" class="grid-item">
          {{ n }}
        </div>
        <div
          v-for="service in servicesWithPositions"
          :key="service.name"
          class="service-card grid-item"
          :style="{
            'grid-column': service.gridColumn,
            'grid-row': service.gridRow,
          }"
        >
          <div
            class="service-header clickable"
            @click.native="openDialog(service)"
          >
            <div class="service-logo">
              <div class="logo-placeholder">
                {{ getInitials(service.name) }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <el-dialog v-model="dialogVisible" title="" width="500">
      <div v-if="selectedService">
        <h3>{{ selectedService.name }}</h3>
        <p>{{ selectedService.shortDescription }}</p>
        <div class="service-links">
          <a
            v-for="(link, index) in selectedService.links"
            :key="index"
            :href="link.url"
            target="_blank"
            rel="noopener noreferrer"
            class="service-link"
          >
            {{ link.label }}
          </a>
        </div>

        <div class="service-info">
          <span class="service-category">{{ selectedService.category }}</span>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<style lang="scss">
.ecosystem-table {
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
    cursor: pointer;
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
  display: none; /* Скрываем описание */
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
  min-width: 200vw;
  min-height: 200vh;
  background: #f0f0f0;
  overflow: hidden;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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

.clickable {
  pointer-events: auto;
}

.service-logo.clickable,
.service-logo.clickable * {
  touch-action: auto !important;
}
</style>
