<script setup lang="ts">
defineProps<{
  label: string;
  iconLeft?: string;
  iconRight?: string;
  fullWidth?: boolean;
  large?: boolean;
  disabled?: boolean;
}>();

defineEmits<{
  click: [];
}>();
</script>

<template>
  <button
    class="white-button"
    :class="{
      'white-button--full': fullWidth,
      'white-button--large': large,
      'white-button--disabled': disabled,
    }"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <span class="white-button__content">
      <span v-if="iconLeft" class="white-button__icon-left">{{
        iconLeft
      }}</span>
      <span class="white-button__text">{{ label }}</span>
      <span v-if="iconRight" class="white-button__icon-right">{{
        iconRight
      }}</span>
    </span>
  </button>
</template>

<style lang="scss">
.white-button {
  background: white;
  color: #1f2937;
  border: none;
  padding: 18px 40px;
  font-size: 1.125rem;
  font-weight: 600;
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-family: inherit;
  position: relative;
  overflow: hidden;

  &:active:not(:disabled) {
    transform: translateY(0);
    box-shadow: 0 6px 12px rgba(255, 255, 255, 0.15);
  }

  &:focus:not(:disabled) {
    outline: none;
    box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.3);
  }

  &--full {
    width: 100%;
  }

  &--large {
    padding: 20px 48px;
    font-size: 1.25rem;
    border-radius: 20px;
  }

  &--disabled {
    opacity: 0.6;
    cursor: not-allowed;

    &:hover {
      background: white;
      transform: none;
      box-shadow: none;
    }
  }

  &__content {
    display: flex;
    align-items: center;
    gap: 12px;
    position: relative;
    z-index: 1;
  }

  &__icon-left,
  &__icon-right {
    font-size: 1.5rem;
    line-height: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__icon-left {
    margin-right: 4px;
  }

  &__icon-right {
    margin-left: 4px;
  }

  &__text {
    white-space: nowrap;
  }

  /* Темная тема (опционально) */
  @media (prefers-color-scheme: dark) {
    &:not(:disabled) {
      background: rgba(255, 255, 255, 0.95);
      color: #111827;
    }
  }

  /* Responsive */
  @media (max-width: 768px) {
    padding: 16px 32px;
    font-size: 1rem;

    &--large {
      padding: 18px 40px;
      font-size: 1.125rem;
    }
  }

  @media (max-width: 480px) {
    padding: 14px 28px;
    font-size: 0.875rem;

    &__icon-left,
    &__icon-right {
      font-size: 1.25rem;
    }

    &--large {
      padding: 16px 36px;
      font-size: 1rem;
    }
  }
}
</style>
