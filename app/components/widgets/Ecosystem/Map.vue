<script setup lang="ts">
import { services, type Service } from '~~/data/mapServices';

// Функция для позиционирования сервисов по категориям
const getServicesWithPositions = (): (Service & {
  gridColumn: string;
  gridRow: string;
  gridIndex: number;
})[] => {
  // Группируем сервисы по категориям
  const groupedByCategory = services.reduce(
    (acc, service) => {
      const category = service.category.toLowerCase();
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(service);
      return acc;
    },
    {} as Record<string, Service[]>,
  );

  // Определяем зоны для каждой категории (островки)
  const categoryZones: Record<
    string,
    {
      startRow: number;
      startCol: number;
      width: number;
      height: number;
    }
  > = {
    // Wallets - в левом верхнем углу (3x3 блок)
    wallets: {
      startRow: 1,
      startCol: 1,
      width: 3,
      height: 3,
    },
    // Infrastructure - в правом верхнем углу (4x4 блок)
    infrastructure: {
      startRow: 1,
      startCol: 6,
      width: 3,
      height: 3,
    },
    // Defi - в левом нижнем углу (4x4 блок)
    defi: {
      startRow: 6,
      startCol: 1,
      width: 3,
      height: 3,
    },
    // Для других категорий можно добавить другие зоны
    dev: {
      startRow: 8,
      startCol: 7,
      width: 2,
      height: 2,
    },
  };

  const result: (Service & {
    gridColumn: string;
    gridRow: string;
    gridIndex: number;
  })[] = [];
  const occupiedCells = new Set<string>();

  // Заполняем сетку для каждой категории
  for (const [category, categoryServices] of Object.entries(
    groupedByCategory,
  )) {
    const zone = categoryZones[category] || {
      startRow: 1,
      startCol: 1,
      width: 3,
      height: 3,
    };

    // Вычисляем позиции внутри зоны с учетом уже занятых ячеек
    let _placedCount = 0;
    const maxAttempts = zone.width * zone.height;
    let attempts = 0;

    // Пытаемся разместить все сервисы категории
    for (const service of categoryServices) {
      let placed = false;

      // Проверяем все ячейки в зоне
      for (let row = 0; row < zone.height && !placed; row++) {
        for (let col = 0; col < zone.width && !placed; col++) {
          attempts++;
          if (attempts > maxAttempts * 2) break; // Защита от бесконечного цикла

          const cellRow = zone.startRow + row;
          const cellCol = zone.startCol + col;
          const cellKey = `${cellRow}-${cellCol}`;

          // Если ячейка свободна, занимаем её
          if (!occupiedCells.has(cellKey) && cellRow <= 10 && cellCol <= 10) {
            // Вычисляем индекс ячейки в сетке 10x10 (от 1 до 100)
            const gridIndex = (cellRow - 1) * 10 + cellCol;

            result.push({
              ...service,
              gridColumn: `${cellCol} / ${cellCol + 1}`,
              gridRow: `${cellRow} / ${cellRow + 1}`,
              gridIndex: gridIndex,
            });

            occupiedCells.add(cellKey);
            _placedCount++;
            placed = true;
          }
        }
      }
      _placedCount = 0;
      // Если не удалось разместить, пробуем найти любую свободную ячейку
      if (!placed) {
        for (let i = 1; i <= 100; i++) {
          const row = Math.floor((i - 1) / 10) + 1;
          const col = ((i - 1) % 10) + 1;
          const cellKey = `${row}-${col}`;

          if (!occupiedCells.has(cellKey)) {
            result.push({
              ...service,
              gridColumn: `${col} / ${col + 1}`,
              gridRow: `${row} / ${row + 1}`,
              gridIndex: i,
            });

            occupiedCells.add(cellKey);
            break;
          }
        }
      }
    }
  }

  // Сортируем по позиции в сетке для правильного порядка отрисовки
  return result.sort((a, b) => a.gridIndex - b.gridIndex);
};

const servicesWithPositions = getServicesWithPositions();

// Вспомогательные функции для стилизации зон
const isWalletsZone = (n: number): boolean => {
  const row = Math.floor((n - 1) / 10) + 1;
  const col = ((n - 1) % 10) + 1;
  return row >= 1 && row <= 3 && col >= 1 && col <= 3;
};

const isInfrastructureZone = (n: number): boolean => {
  const row = Math.floor((n - 1) / 10) + 1;
  const col = ((n - 1) % 10) + 1;
  return row >= 1 && row <= 4 && col >= 6 && col <= 9;
};

const isDefiZone = (n: number): boolean => {
  const row = Math.floor((n - 1) / 10) + 1;
  const col = ((n - 1) % 10) + 1;
  return row >= 6 && row <= 9 && col >= 1 && col <= 4;
};

const isDevZone = (n: number): boolean => {
  const row = Math.floor((n - 1) / 10) + 1;
  const col = ((n - 1) % 10) + 1;
  return row >= 8 && row <= 10 && col >= 7 && col <= 9;
};

const getInitials = (name: string): string => {
  return name
    .split(' ')
    .map((word) => word[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
};

const selectedService = ref(null);
const dialogVisible = ref(false);

const openDialog = (service: Service) => {
  console.log('Open dialog for:', service.name);
  selectedService.value = service;
  dialogVisible.value = true;
};
</script>

<template>
  <div class="ecosystem-table">
    <div id="drag-area" ref="dragArea" v-gsap.draggable.bounds="'body'">
      <div class="grid-container">
        <!-- Сетка 10x10 -->
        <div
          v-for="n in 100"
          :key="n"
          class="grid-item"
          :class="{
            'wallets-zone': isWalletsZone(n),
            'infrastructure-zone': isInfrastructureZone(n),
            'defi-zone': isDefiZone(n),
            'dev-zone': isDevZone(n),
          }"
        >
          <!-- <span class="cell-number">{{ n }}</span> -->
        </div>
        <div
          v-for="service in servicesWithPositions"
          :key="service.name"
          class="service-card grid-item"
          :style="{
            'grid-column': service.gridColumn,
            'grid-row': service.gridRow,
          }"
          :class="`category-${service.category.toLowerCase()}`"
        >
          <div class="service-header clickable" @click="openDialog(service)">
            <div class="service-logo">
              <div v-if="service.logo" class="logo-wrapper">
                <img :src="`${service.logo}`" :alt="`${service.name}`" />
              </div>
              <div v-else class="logo-placeholder">
                {{ getInitials(service.name) }}
              </div>
            </div>
            <span> {{ service.name }}</span>
            <!-- <div class="service-badge">
              {{ service.category }}
            </div> -->
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
  box-shadow: none;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
  border: 1px solid #e5e7eb;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }
}

.service {
  &-header {
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 10px 15px;
  }
  &-logo {
    .logo-wrapper {
      height: 50px;
      width: 50px;
      @include flex-center;
      img {
        max-width: 100%;
      }
    }
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
  &-info {
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
  background: transparent;
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
  gap: 0;
  width: 100%;
  height: 100%;
  padding: 30vh 30vw;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    background: url('/img/logo/map/back_400x400.jpg') no-repeat center center /
      auto;

    opacity: 0.3;
  }
}

.grid-item {
  background: transparent;
  padding: 10px;
  text-align: center;
  &.service-card {
    background-color: #f9f9f9;
  }
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
