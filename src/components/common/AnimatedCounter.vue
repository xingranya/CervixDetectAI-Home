<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue';

interface Props {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  decimals?: number;
}

const props = withDefaults(defineProps<Props>(), {
  suffix: '',
  prefix: '',
  duration: 2000,
  decimals: 0
});

const displayValue = ref(0);
const elementRef = ref<HTMLElement | null>(null);
const isAnimating = ref(false);
let observer: IntersectionObserver | null = null;

const animateValue = (start: number, end: number, duration: number) => {
  const startTime = performance.now();

  const step = (currentTime: number) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    const easeOutQuart = 1 - Math.pow(1 - progress, 4);
    const currentValue = start + (end - start) * easeOutQuart;

    displayValue.value = Number(currentValue.toFixed(props.decimals));

    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      isAnimating.value = false;
    }
  };

  requestAnimationFrame(step);
};

const startAnimation = () => {
  if (isAnimating.value) return;
  isAnimating.value = true;
  animateValue(0, props.value, props.duration);
};

onMounted(() => {
  if (elementRef.value) {
    observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          startAnimation();
          observer?.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(elementRef.value);
  }
});

onUnmounted(() => {
  observer?.disconnect();
});

watch(() => props.value, () => {
  displayValue.value = 0;
});
</script>

<template>
  <span ref="elementRef" class="animated-counter">
    {{ prefix }}{{ displayValue.toLocaleString() }}{{ suffix }}
  </span>
</template>

<style scoped>
.animated-counter {
  font-variant-numeric: tabular-nums;
}
</style>
