<script setup lang="ts">
import { siteConfig } from '@/config/site';
import { SORTED_SOFTWARE_COPYRIGHTS } from '@brand/softwareCopyrights';
import AppButton from '@/components/common/AppButton.vue';
import CopyrightGrid from '@/components/common/CopyrightGrid.vue';
import SectionBadge from '@/components/common/SectionBadge.vue';

interface TeamMember {
  name: string;
  specialty?: string;
  role: string;
  bio: string;
  avatar: string;
}

const teamMembers: TeamMember[] = [
  {
    name: '覃美君',
    specialty: '计算机科学与技术专业',
    role: '项目负责人',
    avatar: 'https://img1.tucang.cc/api/image/show/c83bbfa1a189b9df8210c960b5975710',
    bio: '负责整体规划与团队指导，专业基础扎实。曾获国家励志奖学金、一等奖学金，获全国大学生计算机设计大赛二等奖、湖北省中华职业教育创新创业大赛三等奖。',
  },
  {
    name: '李伟明',
    specialty: '计算机科学与技术专业',
    role: '技术研发',
    avatar: 'https://img1.tucang.cc/api/image/show/cabdfca52c50e4f9901d67f089622e2f',
    bio: '参与团队运营与技术研发工作，协助团队协调与项目实施。曾获三等奖学金，获全国大学生计算机设计大赛二等奖。',
  },
  {
    name: '邓刘星',
    specialty: '临床医学专业',
    role: '技术研发',
    avatar: 'https://img1.tucang.cc/api/image/show/f55d9b0cb14e994f5876b327d199010d',
    bio: '负责产品相关技术研发，参与产品技术实现与优化，技术基础扎实。曾获三等奖学金。',
  },
  {
    name: '徐果',
    specialty: '财务管理专业',
    role: '财务运营',
    avatar: 'https://img1.tucang.cc/api/image/show/df46ea85a083c5c5ff97f3d3222eac81',
    bio: '负责团队财务与运营相关工作。曾获全国高校科学营湖北优秀营员、湖北省物理实验竞赛一等奖、CMAU 市场研究与商业策划大赛优秀市场研究员、亚太地区数学建模大赛三等奖，拥有论文成果和专利。',
  },
  {
    name: '汪雪菲',
    specialty: '电子商务专业',
    role: '团队运营',
    avatar: 'https://img1.tucang.cc/api/image/show/c114fea87fed6804c8d99d9e85882129',
    bio: '负责团队运营相关工作。曾获“恒企杯”湖北大学生会计技能大赛一等奖、学院一等奖学金、国家励志奖学金、中国国际大学生创新大赛湖北赛区银奖。',
  },
];

const advisors: TeamMember[] = [
  {
    name: '刘华',
    role: '首席顾问',
    avatar: 'https://img1.tucang.cc/api/image/show/9b0711132d240152d75c5f012b9150e4',
    bio: '武汉大学人民医院东院妇科副主任医师，擅长妇科内分泌疾病诊治及妇科腹腔镜相关手术。主持湖北省自然科学基金项目 1 项，参与科研项目 5 项，以第一作者或通讯作者发表 SCI 论文 4 篇、中文核心论文 5 篇，获湖北省科技进步三等奖，并获武汉大学人民医院“医师节医疗菁英”等荣誉。',
  },
  {
    name: '陈燕',
    role: '技术顾问',
    avatar: 'https://img1.tucang.cc/api/image/show/63764991ece43a66a3a8d5a98eceb23d',
    bio: '荆州市中心医院副主任医师、妇科一病区副主任，妇科肿瘤学硕士，毕业于华中科技大学同济医学院临床医学本硕连读专业，从事妇产科临床工作十余年，发表医学学术论文十余篇。擅长妇科生殖道炎症、妇科内分泌、妊娠相关疾病及妇科良恶性肿瘤诊治，并熟练开展妇科腹腔镜微创手术。',
  },
];

const teamVisual = {
  image: 'https://img1.tucang.cc/api/image/show/b678123835221cdd7df87d2df784bb2b',
  alt: '云端智诊团队标识图',
};

const overviewItems = [
  {
    title: '跨学科复合团队',
    description:
      '核心成员来自医学、计算机科学与技术、财务管理和电子商务等专业，覆盖妇科病理、深度学习、软件工程、用户体验和市场推广等方向。',
  },
  {
    title: '导师与专家支持',
    description:
      '已邀请医学与人工智能领域专家担任技术顾问和临床指导，为模型科学性、可解释性和临床适配性提供专业支持。',
  },
  {
    title: '敏捷创新与运营效率',
    description:
      '团队组织结构精简、协作效率高，能够快速响应需求变化，并将更多精力投入产品研发、临床验证和服务完善。',
  },
  {
    title: '专利与技术积累',
    description:
      '已围绕图像预处理、人工势场分割和多模态融合等核心方向完成知识产权布局，为后续应用推广与成果保护打下基础。',
  },
];

const overviewStats = [
  { label: '诊断准确率', value: '93%+' },
  { label: '合作方向', value: `${siteConfig.cooperationDirections.length} 个重点方向` },
  { label: '已登记软著', value: `${SORTED_SOFTWARE_COPYRIGHTS.length} 项` },
];
</script>

<template>
  <div>
    <section class="section section-blue-tint section--about-top">
      <div class="container">
        <div class="about-hero-card" v-reveal>
          <div class="about-hero-card__main">
            <SectionBadge label="团队简介" />
            <h1 class="about-hero-card__title">让更多女性在合适的时间、合适的地点，获得科学精准且操作便捷的筛查服务。</h1>
            <p class="about-hero-card__description">
              团队聚焦宫颈癌筛查相关工作，通过深度学习模型对细胞图像进行高效判读，并结合 HPV 检测与临床信息进行多模态融合分析，
              努力降低传统人工判读带来的主观误差。系统同时提供报告生成等功能，帮助医务人员更高效地完成复核与结果确认。
            </p>
            <div class="about-hero-card__actions">
              <AppButton :href="siteConfig.loginUrl" target="_blank">进入平台</AppButton>
              <AppButton to="/contact" variant="secondary">联系团队</AppButton>
            </div>
          </div>

          <aside class="about-hero-card__aside" v-reveal="'120ms'">
            <div class="about-hero-card__visual">
              <img :src="teamVisual.image" :alt="teamVisual.alt" />
            </div>
            <div class="about-hero-card__stats">
              <div v-for="item in overviewStats" :key="item.label" class="about-hero-card__stat">
                <span>{{ item.label }}</span>
                <strong>{{ item.value }}</strong>
              </div>
            </div>
            <div class="about-hero-card__quote">
              <div class="about-hero-card__label">经营理念</div>
              <p>技术驱动、服务先行、合作共赢。以创新为根基，以患者为中心，以伙伴为桥梁，共创数字健康新未来。</p>
            </div>
          </aside>
        </div>
      </div>
    </section>

    <section v-if="teamMembers.length > 0" class="section section--compact-top">
      <div class="container">
        <div v-reveal class="about-head">
          <SectionBadge label="团队成员" />
          <h2 class="section-title">团队成员介绍</h2>
          <p class="section-description">
            核心成员覆盖项目规划、技术研发、财务运营和团队运营等方向，共同参与项目建设与日常工作。
          </p>
        </div>
        <div class="team-members team-members--compact">
          <article
            v-for="(member, index) in teamMembers"
            :key="member.name"
            v-reveal="`${index * 80}ms`"
            class="team-member-card"
          >
            <div class="team-member-card__avatar">
              <img :src="member.avatar" :alt="member.name" />
            </div>
            <div class="team-member-card__content">
              <div class="team-member-card__meta">
                <h3>{{ member.name }}</h3>
                <div class="team-member-card__role">{{ member.role }}</div>
                <div v-if="member.specialty" class="team-member-card__specialty">{{ member.specialty }}</div>
              </div>
              <div class="team-member-card__divider"></div>
              <div class="team-member-card__body">
                <div class="team-member-card__label">成员简介</div>
                <p>{{ member.bio }}</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="section section-blue-tint section--compact-top">
      <div class="container">
        <div class="about-meta-layout">
          <div v-reveal>
            <div class="about-head">
              <SectionBadge label="团队优势" />
              <h2 class="section-title">从技术研发到临床应用，团队具备完整的协作基础。</h2>
              <p class="section-description">
                团队成员与顾问覆盖医学、算法、软件、运营和推广等多个方向，可共同参与项目研发、应用验证与成果转化。
              </p>
            </div>
            <div class="about-grid">
              <article
                v-for="(item, index) in overviewItems"
                :key="item.title"
                v-reveal="`${index * 80}ms`"
                class="about-card"
              >
                <div class="about-card__index">{{ `0${index + 1}` }}</div>
                <h3>{{ item.title }}</h3>
                <p>{{ item.description }}</p>
              </article>
            </div>
          </div>

          <div v-if="advisors.length > 0" v-reveal="'120ms'">
            <div class="about-head">
              <SectionBadge label="顾问支持" />
              <h2 class="section-title">顾问团队介绍</h2>
              <p class="section-description">
                顾问团队来自临床一线与专业医疗机构，为项目研究、平台应用和业务实践提供专业指导。
              </p>
            </div>
            <div class="team-members team-members--advisors">
              <article
                v-for="(member, index) in advisors"
                :key="member.name"
                v-reveal="`${index * 80}ms`"
                class="team-member-card team-member-card--advisor"
              >
                <div class="team-member-card__avatar team-member-card__avatar--advisor">
                  <img :src="member.avatar" :alt="member.name" />
                </div>
                <div class="team-member-card__content">
                  <div class="team-member-card__meta">
                    <h3>{{ member.name }}</h3>
                    <div class="team-member-card__role">{{ member.role }}</div>
                  </div>
                  <div class="team-member-card__divider"></div>
                  <div class="team-member-card__body">
                    <div class="team-member-card__label">专家简介</div>
                    <p>{{ member.bio }}</p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-blue-tint">
      <div class="container">
        <div v-reveal class="about-head">
          <SectionBadge label="软件著作权" />
          <h2 class="section-title">已登记的软件著作权与相关成果信息。</h2>
          <p class="section-description">
            已登记的软件著作权覆盖智能阅片、云服务平台与辅助筛查等方向，可查看项目成果与相关信息。
          </p>
        </div>
        <div class="about-copyrights" v-reveal="'120ms'">
          <CopyrightGrid mode="page" />
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.section--about-top {
  padding-top: 42px;
}

.section--compact-top {
  padding-top: 42px;
}

.about-hero-card {
  display: grid;
  gap: 26px;
  align-items: stretch;
  grid-template-columns: minmax(0, 1.2fr) minmax(420px, 0.8fr);
  padding: 34px;
  border-radius: 28px;
  border: 1px solid rgba(13, 94, 170, 0.12);
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.98), rgba(245, 249, 253, 0.96));
  box-shadow: var(--shadow-md);
}

.about-hero-card__main {
  display: grid;
  gap: 20px;
}

.about-hero-card__title {
  margin: 0;
  max-width: 860px;
  font-family: var(--font-display);
  font-size: clamp(2.3rem, 3.5vw, 4.1rem);
  line-height: 1.18;
}

.about-hero-card__description {
  margin: 0;
  max-width: 780px;
  color: var(--muted-foreground);
  font-size: 1.02rem;
  line-height: 1.9;
}

.about-hero-card__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
}

.about-hero-card__aside {
  display: grid;
  gap: 16px;
}

.about-hero-card__visual {
  overflow: hidden;
  border-radius: 18px;
  border: 1px solid rgba(13, 94, 170, 0.1);
  background: linear-gradient(180deg, rgba(247, 251, 255, 0.96), rgba(239, 246, 252, 0.96));
}

.about-hero-card__visual img {
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;
}

.about-hero-card__stats {
  display: grid;
  gap: 12px;
}

.about-hero-card__stat {
  display: grid;
  gap: 6px;
  padding: 14px 16px;
  border-radius: 16px;
  background: rgba(244, 248, 252, 0.9);
}

.about-hero-card__stat span {
  color: var(--muted-foreground);
  font-size: 0.84rem;
  font-weight: 600;
}

.about-hero-card__stat strong {
  font-size: 1rem;
  line-height: 1.6;
}

.about-hero-card__quote {
  padding: 16px 18px;
  border-radius: 16px;
  background: rgba(13, 94, 170, 0.05);
}

.about-hero-card__label {
  color: var(--accent);
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.12em;
}

.about-hero-card__quote p {
  margin: 10px 0 0;
  color: var(--foreground);
  line-height: 1.85;
}

.about-meta-layout {
  display: grid;
  gap: 24px;
  grid-template-columns: minmax(0, 1.08fr) minmax(360px, 0.92fr);
}

.about-grid {
  display: grid;
  gap: 18px;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  margin-top: 24px;
}

.about-card {
  position: relative;
  padding: 28px 24px;
  border-radius: 18px;
  border: 1px solid rgba(13, 94, 170, 0.1);
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.98), rgba(244, 248, 252, 0.96));
  box-shadow: var(--shadow-sm);
}

.about-card__index {
  color: rgba(13, 94, 170, 0.18);
  font-family: var(--font-display);
  font-size: 2rem;
  font-weight: 800;
  line-height: 1;
}

.about-card h3 {
  margin: 18px 0 0;
  font-size: 1.22rem;
  color: var(--accent);
}

.about-card p {
  margin: 14px 0 0;
  color: var(--muted-foreground);
  line-height: 1.9;
}

.about-head {
  display: grid;
  gap: 10px;
}

.team-members {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin-top: 24px;
}

.team-members--compact {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.team-members--advisors {
  grid-template-columns: 1fr;
  margin-top: 24px;
}

.team-member-card {
  display: grid;
  grid-template-columns: 128px minmax(0, 1fr);
  gap: 20px;
  align-items: start;
  padding: 24px;
  border-radius: 20px;
  border: 1px solid rgba(13, 94, 170, 0.1);
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.98), rgba(245, 249, 253, 0.96));
  box-shadow: var(--shadow-sm);
  transition:
    transform 0.22s var(--ease-smooth),
    box-shadow 0.22s var(--ease-smooth),
    border-color 0.22s var(--ease-smooth);
}

.team-member-card:hover {
  transform: translateY(-4px);
  border-color: rgba(13, 94, 170, 0.18);
  box-shadow: var(--shadow-md);
}

.team-member-card--advisor {
  grid-template-columns: 120px minmax(0, 1fr);
  gap: 20px;
  align-items: start;
}

.team-member-card__content {
  display: grid;
  gap: 12px;
}

.team-member-card__avatar {
  overflow: hidden;
  aspect-ratio: 4 / 5;
  border-radius: 14px;
  border: 1px solid rgba(13, 94, 170, 0.1);
  background: linear-gradient(180deg, #f8fbff 0%, #eef4fa 100%);
}

.team-member-card__avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.team-member-card__avatar--advisor {
  aspect-ratio: 4 / 5;
}

.team-member-card__meta {
  display: grid;
  align-content: start;
}

.team-member-card__meta h3 {
  margin: 0;
  font-size: 1.18rem;
  color: var(--foreground);
}

.team-member-card__role {
  margin-top: 10px;
  display: inline-flex;
  align-items: center;
  min-height: 32px;
  width: fit-content;
  padding: 0 12px;
  border-radius: 999px;
  background: rgba(13, 94, 170, 0.08);
  color: var(--accent);
  font-size: 0.86rem;
  font-weight: 700;
}

.team-member-card__specialty {
  margin-top: 8px;
  color: var(--muted-foreground);
  font-size: 0.88rem;
  font-weight: 600;
}

.team-member-card__divider {
  height: 1px;
  background: rgba(13, 94, 170, 0.1);
}

.team-member-card__label {
  color: var(--accent);
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.08em;
}

.team-member-card__body p {
  margin: 8px 0 0;
  color: var(--muted-foreground);
  font-size: 0.94rem;
  line-height: 1.8;
}

.about-copyrights {
  margin-top: 24px;
}

@media (max-width: 1080px) {
  .about-hero-card,
  .about-meta-layout,
  .about-grid,
  .team-members {
    grid-template-columns: 1fr;
  }

  .team-members--compact {
    grid-template-columns: 1fr;
  }

  .team-member-card,
  .team-member-card--advisor {
    grid-template-columns: 1fr;
  }
}
</style>
