<script setup lang="ts">
import { computed } from 'vue';
import { RouterLink } from 'vue-router';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

const props = withDefaults(
  defineProps<{
    to?: string;
    href?: string;
    variant?: ButtonVariant;
    target?: string;
    ariaLabel?: string;
  }>(),
  {
    variant: 'primary',
    target: '_self',
    ariaLabel: undefined,
  },
);

const componentType = computed(() => {
  if (props.href) {
    return 'a';
  }

  if (props.to) {
    return RouterLink;
  }

  return 'button';
});

const isExternal = computed(() => {
  const link = props.href ?? props.to ?? '';
  return /^(https?:|mailto:)/.test(link);
});

const componentProps = computed(() => {
  if (props.href) {
    return {
      href: props.href,
      target: props.target,
      rel: isExternal.value ? 'noopener noreferrer' : undefined,
      'aria-label': props.ariaLabel,
    };
  }

  if (props.to) {
    return {
      to: props.to,
      'aria-label': props.ariaLabel,
    };
  }

  return {
    type: 'button',
    'aria-label': props.ariaLabel,
  };
});
</script>

<template>
  <component :is="componentType" class="app-button" :class="`app-button--${variant}`" v-bind="componentProps">
    <span class="app-button__label">
      <slot />
    </span>
    <span class="app-button__arrow" aria-hidden="true">↗</span>
  </component>
</template>

<style scoped>
.app-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-height: 56px;
  padding: 0 22px;
  border: 0;
  border-radius: var(--radius-md);
  font-family: var(--font-body);
  font-size: 0.98rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  transition:
    transform 0.2s ease-out,
    background-color 0.2s ease-out,
    color 0.2s ease-out,
    border-color 0.2s ease-out;
}

.app-button:hover,
.app-button:focus-visible {
  transform: scale(1.05);
}

.app-button:focus-visible {
  outline: none;
  box-shadow: 0 0 0 2px var(--accent), 0 0 0 6px var(--ring);
}

.app-button:active {
  transform: scale(0.98);
}

.app-button__arrow {
  font-size: 1rem;
  line-height: 1;
  transition: transform 0.2s ease-out;
}

.app-button:hover .app-button__arrow,
.app-button:focus-visible .app-button__arrow {
  transform: translate(2px, -2px);
}

.app-button--primary {
  color: var(--accent-foreground);
  background: var(--accent);
}

.app-button--primary:hover,
.app-button--primary:focus-visible {
  background: var(--accent-strong);
}

.app-button--secondary {
  color: var(--foreground);
  background: var(--muted);
}

.app-button--secondary:hover,
.app-button--secondary:focus-visible {
  background: #e5e7eb;
}

.app-button--ghost {
  min-height: 48px;
  padding-inline: 18px;
  color: var(--foreground);
  border: 4px solid var(--foreground);
  background: transparent;
}

.app-button--ghost:hover,
.app-button--ghost:focus-visible {
  color: white;
  background: var(--foreground);
}
</style>
