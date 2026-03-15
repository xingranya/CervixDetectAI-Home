<script setup lang="ts">
import { siteConfig } from '@/config/site';
import AppButton from '@/components/common/AppButton.vue';
import ContactCard from '@/components/common/ContactCard.vue';
import SectionBadge from '@/components/common/SectionBadge.vue';
import PageHero from '@/components/layout/PageHero.vue';
</script>

<template>
  <div>
    <PageHero
      badge="Contact"
      title="欢迎就产品能力、应用场景与合作方式进行沟通。"
      description="如需了解平台部署、功能配置或项目合作信息，可通过以下方式与我们联系。"
    />

    <section class="section section-blue-tint">
      <div class="container">
        <div v-reveal class="contact-head">
          <SectionBadge label="Touchpoints" />
          <h2 class="section-title">提供清晰、稳定的联系渠道，便于业务咨询与后续沟通。</h2>
        </div>
        <div class="contact-grid">
          <ContactCard
            v-reveal
            title="技术与商务邮箱"
            :value="siteConfig.contact.email"
            description="适用于产品咨询、合作沟通、资料索取与问题反馈。"
            link="mailto:support@hpvsc.icu"
          />
          <ContactCard
            v-reveal="'80ms'"
            title="平台地址"
            :value="siteConfig.siteUrl"
            description="便于查看平台入口、项目主页与公开信息。"
            :link="siteConfig.siteUrl"
          />
          <ContactCard
            v-reveal="'160ms'"
            title="项目仓库"
            value="GitHub / xingranya"
            description="用于查看公开资料、版本说明与项目文档。"
            link="https://github.com/xingranya/CervixDetectAI"
          />
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container consult-layout">
        <div v-reveal>
          <SectionBadge label="Consultation" pulse />
          <h2 class="section-title">建议在沟通时说明机构类型与关注重点，便于更高效对接。</h2>
          <p class="section-description">
            如能同步说明使用场景、部署计划与关注模块，将有助于更准确地提供对应资料与沟通建议。
          </p>
        </div>
        <div v-reveal="'120ms'" class="consult-card">
          <div class="consult-item"><strong>机构类型：</strong>妇幼、门诊、基层筛查、专科等</div>
          <div class="consult-item"><strong>关注模块：</strong>AI 分析、报告、随访、通知或订阅</div>
          <div class="consult-item"><strong>沟通方式：</strong>邮件交流、资料发送与产品介绍</div>
          <div class="consult-actions">
            <AppButton href="mailto:support@hpvsc.icu?subject=CervixDetectAI%20%E9%A2%84%E7%BA%A6%E6%BC%94%E7%A4%BA">
              发送咨询邮件
            </AppButton>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--compact">
      <div class="container" v-reveal>
        <div class="contact-summary">
          <h2 class="contact-summary__title">联系信息</h2>
          <p class="contact-summary__text">
            联系邮箱：{{ siteConfig.contact.email }}<br />
            地址信息：{{ siteConfig.contact.address }}<br />
            备案号：{{ siteConfig.filingNumber }}
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.contact-head {
  display: grid;
  gap: 10px;
}

.contact-grid {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin-top: 34px;
}

.consult-layout {
  display: grid;
  gap: 28px;
  align-items: start;
  grid-template-columns: minmax(0, 1fr) minmax(320px, 0.9fr);
}

.consult-card {
  padding: 30px;
  border-radius: 20px;
  border: 1px solid rgba(59, 130, 246, 0.12);
  background: var(--surface-slate);
}

.consult-item {
  line-height: 1.85;
  color: var(--muted-foreground);
}

.consult-item + .consult-item {
  margin-top: 14px;
}

.consult-item strong {
  color: var(--foreground);
}

.consult-actions {
  margin-top: 22px;
}

.contact-summary {
  padding: 34px;
  border-radius: 20px;
  border: 1px solid rgba(59, 130, 246, 0.12);
  background: white;
}

.contact-summary__title {
  margin: 0;
  font-size: 1.7rem;
}

.contact-summary__text {
  margin: 16px 0 0;
  color: var(--muted-foreground);
  line-height: 1.9;
}

@media (max-width: 1080px) {
  .consult-layout,
  .contact-grid {
    grid-template-columns: 1fr;
  }
}
</style>
