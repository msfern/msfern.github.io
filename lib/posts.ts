import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  sample: boolean;
  content: string;
};

const postsDirectory = path.join(process.cwd(), 'content/blog');

const isPostFrontmatter = (
  data: Record<string, unknown>,
): data is {
  title: string;
  date: string;
  excerpt: string;
  sample: boolean;
} =>
  typeof data.title === 'string' &&
  typeof data.date === 'string' &&
  typeof data.excerpt === 'string' &&
  typeof data.sample === 'boolean';

export const getPostSlugs = (): string[] =>
  fs
    .readdirSync(postsDirectory)
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => fileName.replace(/\.md$/, ''));

export const getPostBySlug = (slug: string): Post => {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  if (!isPostFrontmatter(data)) {
    throw new Error(`Invalid frontmatter in ${slug}.md`);
  }

  return {
    slug,
    title: data.title,
    date: data.date,
    excerpt: data.excerpt,
    sample: data.sample,
    content: content.trim(),
  };
};

export const getPosts = (): Post[] =>
  getPostSlugs()
    .map((slug) => getPostBySlug(slug))
    .sort((a, b) => (a.date < b.date ? 1 : -1));

export const formatPostDate = (date: string): string =>
  new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${date}T00:00:00Z`));
