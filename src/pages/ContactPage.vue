<script setup lang="ts">
import { siteConfig } from '@/config/site';
import AppButton from '@/components/common/AppButton.vue';
import ContactCard from '@/components/common/ContactCard.vue';
import SectionBadge from '@/components/common/SectionBadge.vue';
import PageHero from '@/components/layout/PageHero.vue';
import HospitalPartners from '@/components/common/HospitalPartners.vue';

const contactNotes = [
  '请说明单位或机构名称、联系人姓名及联系方式，便于及时回复。',
  '如需项目介绍、合作材料或公开资料，请注明具体用途和所需内容。',
  '如遇平台使用问题，建议附上相关页面信息或问题截图，便于快速处理。',
];
</script>

<template>
  <div>
    <PageHero
      badge="联系我们"
      title="合作咨询、资料获取与平台访问可在此快速完成。"
      :description="`如需了解${siteConfig.projectName}相关信息，发起合作沟通，获取公开资料，或直接进入平台使用系统服务，可通过以下入口快速访问。`"
    />

    <section class="section section-blue-tint">
      <div class="container">
        <div v-reveal class="contact-head">
          <SectionBadge label="联系渠道" />
          <h2 class="section-title">官方联系与平台入口已统一开放。</h2>
          <p class="section-description">官网提供邮件联系、官网访问与平台登录入口，便于合作沟通、资料获取和系统使用。</p>
        </div>
        <div class="contact-grid">
          <ContactCard
            v-reveal
            title="官方邮箱"
            :value="siteConfig.contact.email"
            description="适用于合作咨询、资料申请、平台问题反馈及其他对外沟通事项。"
            link="mailto:support@hpvsc.icu"
            link-label="发送邮件"
          />
          <ContactCard
            v-reveal="'80ms'"
            title="官方网站"
            value="home.hpvsc.icu"
            description="用于查看项目介绍、研究方向、成果信息、新闻动态与公开资料。"
            :link="siteConfig.siteUrl"
            link-label="访问官网"
          />
          <ContactCard
            v-reveal="'160ms'"
            title="平台入口"
            value="进入 HPVSC 平台"
            description="直接进入平台登录页，访问系统功能与相关业务服务。"
            :link="siteConfig.loginUrl"
            link-label="进入平台"
          />
          <ContactCard
            v-reveal="'240ms'"
            title="项目问卷"
            value="参与调查问卷"
            description="欢迎填写项目调查问卷，帮助我们持续优化研究方向、平台体验与公开服务。"
            link="https://wj.qq.com/s2/25214446/3453/"
            link-label="立即填写"
          />
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container consult-layout">
        <div v-reveal>
          <SectionBadge label="来信说明" pulse />
          <h2 class="section-title">简要说明需求，我们会尽快与您对接。</h2>
          <p class="section-description">
            如涉及合作事项、资料申请或平台问题，建议在邮件中附上基本信息和具体需求，便于我们更快完成处理与回复。
          </p>
        </div>
        <div v-reveal="'120ms'" class="consult-card">
          <div v-for="item in contactNotes" :key="item" class="consult-item">{{ item }}</div>
          <div class="consult-actions">
            <AppButton :href="siteConfig.loginUrl" target="_blank">
              进入平台
            </AppButton>
            <AppButton
              href="mailto:support@hpvsc.icu?subject=%E5%AE%98%E7%BD%91%E5%92%A8%E8%AF%A2"
              variant="secondary"
            >
              邮件联系
            </AppButton>
            <AppButton
              href="https://wj.qq.com/s2/25214446/3453/"
              target="_blank"
              variant="secondary"
            >
              填写问卷
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
            联系地址：{{ siteConfig.contact.address }}<br />
            备案号：{{ siteConfig.filingNumber }}
          </p>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div v-reveal class="contact-head">
          <SectionBadge label="合作医院" />
          <h2 class="section-title">已合作医疗机构，持续增加中。</h2>
          <p class="section-description">覆盖筛查、诊疗与科研等多种应用场景，提供宫颈智能影像辅助诊断服务。</p>
        </div>
        <div v-reveal="'120ms'">
          <HospitalPartners :hospitals="siteConfig.hospitals" />
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
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
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
  border: 1px solid rgba(13, 94, 170, 0.12);
  background: var(--surface-slate);
}

.consult-item {
  line-height: 1.9;
  color: var(--muted-foreground);
}

.consult-item + .consult-item {
  margin-top: 14px;
}

.consult-actions {
  margin-top: 22px;
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
}

.contact-summary {
  padding: 34px;
  border-radius: 20px;
  border: 1px solid rgba(13, 94, 170, 0.12);
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

@media (max-width: 640px) {
  .contact-grid {
    margin-top: 26px;
  }

  .consult-card,
  .contact-summary {
    padding: 22px 18px;
    border-radius: 18px;
  }

  .consult-actions {
    display: grid;
    gap: 12px;
  }

  .consult-actions :deep(.app-button) {
    width: 100%;
    min-height: 50px;
  }

  .contact-summary__title {
    font-size: 1.42rem;
  }

  .contact-summary__text {
    margin-top: 12px;
    line-height: 1.8;
  }
}
</style>
