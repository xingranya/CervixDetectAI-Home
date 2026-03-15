import { marked } from 'marked';
import { parseFrontmatter } from '@/lib/frontmatter';
import type { NewsArticle, NewsFrontmatter } from '@/types/site';

const requiredFields: Array<keyof NewsFrontmatter> = [
  'title',
  'slug',
  'excerpt',
  'publishedAt',
  'cover',
  'category',
];

const newsModules = import.meta.glob('../../content/news/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
}) as Record<string, string>;

const toReadingMinutes = (content: string): number => {
  const plainText = content.replace(/[#*_>`-]/g, ' ').replace(/\s+/g, ' ').trim();
  const words = plainText.length;
  return Math.max(1, Math.round(words / 260));
};

const normalizeArticle = (filePath: string, rawSource: string): NewsArticle => {
  const { attributes, body } = parseFrontmatter(rawSource, filePath);

  requiredFields.forEach((field) => {
    if (typeof attributes[field] !== 'string' || String(attributes[field]).trim().length === 0) {
      throw new Error(`新闻 frontmatter 缺少必填字段 ${field}：${filePath}`);
    }
  });

  const article = attributes as unknown as NewsFrontmatter;
  const html = marked.parse(body, { async: false }) as string;

  return {
    ...article,
    featured: Boolean(attributes.featured),
    content: body,
    html,
    readingMinutes: toReadingMinutes(body),
  };
};

export const newsArticles: NewsArticle[] = Object.entries(newsModules)
  .map(([filePath, rawSource]) => normalizeArticle(filePath, rawSource))
  .sort((left, right) => right.publishedAt.localeCompare(left.publishedAt));

const slugSet = new Set<string>();
newsArticles.forEach((article) => {
  if (slugSet.has(article.slug)) {
    throw new Error(`新闻 slug 重复：${article.slug}`);
  }

  slugSet.add(article.slug);
});

export const getFeaturedNews = (count: number): NewsArticle[] => {
  const featuredArticles = newsArticles.filter((article) => article.featured);
  return featuredArticles.slice(0, count);
};

export const getNewsArticleBySlug = (slug: string): NewsArticle | undefined => {
  return newsArticles.find((article) => article.slug === slug);
};
