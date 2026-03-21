<script setup lang="ts">
import { computed } from 'vue';
import { RouterLink } from 'vue-router';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'gradient';

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
  position: relative;
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
  cursor: pointer;
  overflow: hidden;
  transition:
    transform 0.2s var(--ease-smooth),
    background-color 0.2s var(--ease-smooth),
    color 0.2s var(--ease-smooth),
    border-color 0.2s var(--ease-smooth),
    box-shadow 0.3s var(--ease-smooth);
}

.app-button::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, transparent 50%);
  opacity: 0;
  transition: opacity 0.3s var(--ease-smooth);
  pointer-events: none;
}

.app-button:hover::before,
.app-button:focus-visible::before {
  opacity: 1;
}

.app-button:hover,
.app-button:focus-visible {
  transform: translateY(-2px);
}

.app-button:focus-visible {
  outline: none;
  box-shadow: 0 0 0 2px var(--accent), 0 0 0 6px var(--ring);
}

.app-button:active {
  transform: translateY(0);
}

.app-button__arrow {
  font-size: 1rem;
  line-height: 1;
  transition: transform 0.2s var(--ease-spring);
}

.app-button:hover .app-button__arrow,
.app-button:focus-visible .app-button__arrow {
  transform: translate(2px, -2px);
}

.app-button--primary {
  color: var(--accent-foreground);
  background: var(--accent);
  box-shadow: var(--shadow-accent);
}

.app-button--primary:hover,
.app-button--primary:focus-visible {
  background: var(--accent-strong);
  box-shadow: var(--shadow-accent-lg), var(--shadow-glow-sm);
}

.app-button--gradient {
  color: white;
  background: var(--gradient-primary);
  box-shadow: var(--shadow-accent);
}

.app-button--gradient:hover,
.app-button--gradient:focus-visible {
  box-shadow: var(--shadow-accent-lg), var(--shadow-glow);
}

.app-button--secondary {
  color: var(--foreground);
  border: 1px solid var(--card-border-strong);
  background: rgba(255, 255, 255, 0.92);
}

.app-button--secondary:hover,
.app-button--secondary:focus-visible {
  background: white;
  border-color: rgba(13, 94, 170, 0.2);
  box-shadow: var(--shadow-md);
}

.app-button--ghost {
  min-height: 48px;
  padding-inline: 18px;
  color: var(--foreground);
  border: 2px solid var(--foreground);
  background: transparent;
}

.app-button--ghost::before {
  display: none;
}

.app-button--ghost:hover,
.app-button--ghost:focus-visible {
  color: white;
  background: var(--foreground);
  box-shadow: var(--shadow-lg);
}
</style>
