<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import { SORTED_SOFTWARE_COPYRIGHTS } from '@brand/softwareCopyrights';
import type { SoftwareCopyright } from '@brand/softwareCopyrights';

withDefaults(
  defineProps<{
    mode?: 'home' | 'page';
  }>(),
  {
    mode: 'page',
  },
);

const selectedCopyright = ref<SoftwareCopyright | null>(null);

const openPreview = (item: SoftwareCopyright): void => {
  if (!item.imageUrl) {
    return;
  }

  selectedCopyright.value = item;
};

const closePreview = (): void => {
  selectedCopyright.value = null;
};

const handleWindowKeydown = (event: KeyboardEvent): void => {
  if (event.key === 'Escape' && selectedCopyright.value) {
    closePreview();
  }
};

onMounted(() => {
  window.addEventListener('keydown', handleWindowKeydown);
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleWindowKeydown);
});
</script>

<template>
  <div class="copyright-grid" :class="`copyright-grid--${mode}`">
    <component
      v-for="(item, index) in SORTED_SOFTWARE_COPYRIGHTS"
      :is="item.imageUrl ? 'button' : 'article'"
      :key="item.id"
      class="copyright-card"
      :class="{ 'is-clickable': Boolean(item.imageUrl), 'is-featured': index === 0 }"
      :type="item.imageUrl ? 'button' : undefined"
      :aria-label="item.imageUrl ? `查看${item.name}证书原图` : undefined"
      @click="openPreview(item)"
    >
      <div class="copyright-card__head">
        <span class="copyright-card__tag">{{ index === 0 ? '最新登记' : '软件著作权' }}</span>
        <span class="copyright-card__version">{{ item.version }}</span>
      </div>
      <h3 class="copyright-card__title">{{ item.name }}</h3>
      <dl class="copyright-card__meta">
        <div class="copyright-card__meta-item">
          <dt>登记号</dt>
          <dd>{{ item.registrationNo }}</dd>
        </div>
        <div class="copyright-card__meta-item">
          <dt>证书号</dt>
          <dd>{{ item.certificateNo }}</dd>
        </div>
      </dl>
      <div class="copyright-card__footer">
        <span>{{ item.imageUrl ? '查看证书原图' : '成果信息' }}</span>
        <span v-if="item.imageUrl" aria-hidden="true">↗</span>
      </div>
      <span class="copyright-card__decor" aria-hidden="true">©</span>
    </component>
  </div>

  <Teleport to="body">
    <div
      v-if="selectedCopyright?.imageUrl"
      class="certificate-preview"
      role="dialog"
      aria-modal="true"
      :aria-label="`${selectedCopyright.name}证书预览`"
      @click.self="closePreview"
    >
      <div class="certificate-preview__panel">
        <button class="certificate-preview__close" type="button" aria-label="关闭证书预览" @click="closePreview">
          ×
        </button>
        <div class="certificate-preview__header">
          <div class="certificate-preview__eyebrow">软件著作权证书</div>
          <h3 class="certificate-preview__title">{{ selectedCopyright.name }}</h3>
          <p class="certificate-preview__meta">
            {{ selectedCopyright.version }} · {{ selectedCopyright.registrationNo }}
          </p>
        </div>
        <div class="certificate-preview__body">
          <img :src="selectedCopyright.imageUrl" :alt="`${selectedCopyright.name}证书原图`" />
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.copyright-grid {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.copyright-card {
  position: relative;
  display: grid;
  gap: 18px;
  min-height: 232px;
  height: 100%;
  padding: 28px;
  overflow: hidden;
  border-radius: 22px;
  border: 1px solid rgba(13, 94, 170, 0.12);
  background:
    radial-gradient(circle at top right, rgba(13, 94, 170, 0.08), transparent 28%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.98), rgba(244, 248, 252, 0.95));
  box-shadow: var(--shadow-sm);
  transition:
    transform 0.24s var(--ease-smooth),
    box-shadow 0.24s var(--ease-smooth),
    border-color 0.24s var(--ease-smooth);
  text-align: left;
}

.copyright-card.is-clickable:hover,
.copyright-card.is-clickable:focus-visible {
  transform: translateY(-4px);
  border-color: rgba(13, 94, 170, 0.22);
  box-shadow: var(--shadow-lg);
  outline: none;
}

.copyright-card.is-featured {
  border-color: rgba(181, 40, 47, 0.16);
  background:
    radial-gradient(circle at top right, rgba(181, 40, 47, 0.12), transparent 26%),
    linear-gradient(180deg, rgba(255, 250, 250, 0.98), rgba(247, 251, 255, 0.95));
}

.copyright-card__head {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.copyright-card__tag,
.copyright-card__version {
  display: inline-flex;
  align-items: center;
  min-height: 32px;
  padding: 0 12px;
  border-radius: 999px;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  white-space: nowrap;
}

.copyright-card__tag {
  background: rgba(181, 40, 47, 0.08);
  color: var(--secondary);
}

.copyright-card__version {
  background: rgba(13, 94, 170, 0.08);
  color: var(--accent);
}

.copyright-card__title {
  position: relative;
  z-index: 1;
  margin: 0;
  padding-right: 36px;
  font-size: 1.18rem;
  font-weight: 800;
  line-height: 1.55;
}

.copyright-card__meta {
  position: relative;
  z-index: 1;
  display: grid;
  gap: 14px;
  margin: 0;
}

.copyright-card__meta-item {
  display: grid;
  gap: 6px;
}

.copyright-card__meta dt {
  color: rgba(29, 45, 67, 0.66);
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.08em;
}

.copyright-card__meta dd {
  margin: 0;
  font-size: 0.92rem;
  font-weight: 600;
  line-height: 1.7;
}

.copyright-card__footer {
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  align-self: end;
  font-weight: 700;
  color: var(--accent);
}

.copyright-card__decor {
  position: absolute;
  right: -6px;
  bottom: -18px;
  color: rgba(13, 94, 170, 0.08);
  font-family: Georgia, serif;
  font-size: 5.6rem;
  line-height: 1;
  transform: rotate(-16deg);
  pointer-events: none;
}

.copyright-grid--home .copyright-card {
  min-height: 248px;
}

.certificate-preview {
  position: fixed;
  inset: 0;
  z-index: 120;
  display: grid;
  place-items: center;
  padding: 32px 20px;
  background: rgba(10, 24, 42, 0.72);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.certificate-preview__panel {
  position: relative;
  width: min(960px, 100%);
  max-height: min(88vh, 900px);
  padding: 24px;
  overflow: auto;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.98);
  box-shadow: var(--shadow-xl);
}

.certificate-preview__close {
  position: sticky;
  top: 0;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  margin-left: auto;
  border: 0;
  border-radius: 999px;
  background: rgba(16, 38, 63, 0.08);
  color: var(--foreground);
  font-size: 1.6rem;
  cursor: pointer;
}

.certificate-preview__header {
  margin-top: 8px;
}

.certificate-preview__eyebrow {
  color: var(--accent);
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.certificate-preview__title {
  margin: 10px 0 0;
  font-size: 1.5rem;
  line-height: 1.45;
}

.certificate-preview__meta {
  margin: 10px 0 0;
  color: var(--muted-foreground);
  line-height: 1.8;
}

.certificate-preview__body {
  margin-top: 22px;
  display: grid;
  place-items: center;
  padding: 24px;
  border-radius: 20px;
  overflow: hidden;
  background: linear-gradient(180deg, #f7fbff 0%, #edf4fb 100%);
}

.certificate-preview__body img {
  display: block;
  width: auto;
  max-width: 100%;
  max-height: calc(88vh - 240px);
  height: auto;
  object-fit: contain;
}

@media (max-width: 960px) {
  .copyright-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .certificate-preview {
    padding: 16px;
  }

  .certificate-preview__panel {
    padding: 18px;
    border-radius: 20px;
  }

  .certificate-preview__body {
    padding: 14px;
  }

  .certificate-preview__title {
    font-size: 1.2rem;
  }
}
</style>
