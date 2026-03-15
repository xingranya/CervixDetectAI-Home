type ParsedScalar = string | boolean;

const FRONTMATTER_DELIMITER = '---';

const stripQuotes = (value: string): string => {
  if (
    (value.startsWith('"') && value.endsWith('"')) ||
    (value.startsWith("'") && value.endsWith("'"))
  ) {
    return value.slice(1, -1);
  }

  return value;
};

const parseScalar = (rawValue: string): ParsedScalar => {
  const value = stripQuotes(rawValue.trim());

  if (value === 'true') {
    return true;
  }

  if (value === 'false') {
    return false;
  }

  return value;
};

export const parseFrontmatter = (
  source: string,
  filePath: string,
): { attributes: Record<string, ParsedScalar>; body: string } => {
  if (!source.startsWith(FRONTMATTER_DELIMITER)) {
    throw new Error(`新闻内容缺少 frontmatter：${filePath}`);
  }

  const endIndex = source.indexOf(`\n${FRONTMATTER_DELIMITER}`, FRONTMATTER_DELIMITER.length);
  if (endIndex === -1) {
    throw new Error(`新闻内容 frontmatter 未闭合：${filePath}`);
  }

  const rawAttributes = source
    .slice(FRONTMATTER_DELIMITER.length, endIndex)
    .trim()
    .split('\n')
    .filter(Boolean);

  const attributes: Record<string, ParsedScalar> = {};

  rawAttributes.forEach((line) => {
    const separatorIndex = line.indexOf(':');
    if (separatorIndex === -1) {
      throw new Error(`frontmatter 格式无效：${filePath} -> ${line}`);
    }

    const key = line.slice(0, separatorIndex).trim();
    const value = line.slice(separatorIndex + 1).trim();

    if (!key) {
      throw new Error(`frontmatter 键名不能为空：${filePath}`);
    }

    attributes[key] = parseScalar(value);
  });

  const body = source.slice(endIndex + `\n${FRONTMATTER_DELIMITER}`.length).trim();

  return { attributes, body };
};
