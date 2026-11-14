import type { Metadata } from 'next';
import Link from 'next/link';
import { SectionHeading } from '@/components/section-heading';
import { site } from '@/lib/content';
import { formatPostDate, getPosts } from '@/lib/posts';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Blog',
  description: `Notes from ${site.name} — a small blog on her personal site.`,
  openGraph: {
    title: 'Blog',
    description: `Notes from ${site.name} — a small blog on her personal site.`,
    url: '/blog/',
  },
};

const BlogIndexPage = () => {
  const posts = getPosts();

  return (
    <main id="main" className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
      <p className="mb-6 text-xs font-medium tracking-[0.28em] text-vermillion uppercase">
        Notebook
      </p>
      <h1 className="font-display text-display text-ink italic">Blog</h1>
      <p className="mt-6 max-w-xl text-lg leading-8 text-ink-soft">
        A small room for notes. The posts here are samples, marked clearly, so
        the layout is ready whenever the real writing arrives.
      </p>
      <div className="mt-16">
        <SectionHeading eyebrow="01" title="Posts" id="posts-heading" />
        <ul className="divide-y divide-rule border-y border-rule">
          {posts.map((post) => (
            <li key={post.slug} className="py-8">
              <p className="flex flex-wrap items-center gap-3 text-sm tracking-wide text-dust tabular-nums">
                <time dateTime={post.date}>{formatPostDate(post.date)}</time>
                {post.sample ? (
                  <span className="text-[0.65rem] font-medium tracking-[0.18em] text-vermillion uppercase">
                    Sample
                  </span>
                ) : null}
              </p>
              <h2 className="font-display mt-3 text-3xl text-ink">
                <Link
                  href={`/blog/${post.slug}/`}
                  className="transition-colors hover:text-vermillion"
                >
                  {post.title}
                </Link>
              </h2>
              <p className="mt-3 max-w-2xl text-lg leading-8 text-ink-soft">
                {post.excerpt}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default BlogIndexPage;
