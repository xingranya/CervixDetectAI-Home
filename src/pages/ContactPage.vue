<script setup lang="ts">
import { siteConfig } from '@/config/site';
import AppButton from '@/components/common/AppButton.vue';
import ContactCard from '@/components/common/ContactCard.vue';
import SectionBadge from '@/components/common/SectionBadge.vue';
import PageHero from '@/components/layout/PageHero.vue';

const contactNotes = [
  '请在邮件中简要说明单位名称、联系人信息和沟通事项。',
  '如需资料支持，可注明所需材料名称与使用场景，便于及时准备。',
  `如涉及合作交流，请同步说明${siteConfig.cooperationDirections.join('、')}等方向的初步需求，以便进一步对接。`,
];
</script>

<template>
  <div>
    <PageHero
      badge="联系我们"
      :title="`欢迎围绕${siteConfig.cooperationDirections.join('、')}等方向开展沟通。`"
      :description="`如需了解${siteConfig.brandName}、${siteConfig.projectName}、建设成果、合作方式或相关服务信息，可通过以下方式与我们联系，我们将及时回复。`"
    />

    <section class="section section-blue-tint">
      <div class="container">
        <div v-reveal class="contact-head">
          <SectionBadge label="联系渠道" />
          <h2 class="section-title">提供稳定、清晰、统一的官方联系渠道。</h2>
          <p class="section-description">团队当前以官方邮箱为主要沟通方式，用于承接{{ siteConfig.cooperationDirections.join('、') }}等相关咨询、资料申请、业务交流和问题反馈。</p>
        </div>
        <div class="contact-grid">
          <ContactCard
            v-reveal
            title="官方邮箱"
            :value="siteConfig.contact.email"
            description="适用于合作咨询、资料索取、业务交流与相关问题反馈。"
            link="mailto:support@hpvsc.icu"
          />
          <ContactCard
            v-reveal="'80ms'"
            title="官方网站"
            :value="siteConfig.siteUrl"
            description="用于查看团队概况、研究方向、成果信息和项目动态等公开信息。"
            :link="siteConfig.siteUrl"
          />
          <ContactCard
            v-reveal="'160ms'"
            title="平台入口"
            value="云端系统访问入口"
            description="用于访问相关业务系统入口，便于官网展示与平台服务相互衔接。"
            :link="siteConfig.loginUrl"
          />
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container consult-layout">
        <div v-reveal>
          <SectionBadge label="沟通说明" pulse />
          <h2 class="section-title">建议来信时提供必要信息，便于高效完成沟通对接。</h2>
          <p class="section-description">
            为提高沟通效率，建议在来信中简要说明单位背景、合作事项或资料需求，团队将根据具体内容及时进行回复与处理。
          </p>
        </div>
        <div v-reveal="'120ms'" class="consult-card">
          <div v-for="item in contactNotes" :key="item" class="consult-item">{{ item }}</div>
          <div class="consult-actions">
            <AppButton href="mailto:support@hpvsc.icu?subject=%E4%BA%91%E7%AB%AF%E6%99%BA%E8%AF%8A%E5%9B%A2%E9%98%9F%E5%90%88%E4%BD%9C%E5%92%A8%E8%AF%A2">
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
            联系地址：{{ siteConfig.contact.address }}<br />
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
</style>
