import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Markdown from 'react-markdown';
import { SampleBanner } from '@/components/sample-banner';
import { formatPostDate, getPostBySlug, getPostSlugs } from '@/lib/posts';

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamic = 'force-static';
export const dynamicParams = false;

export const generateStaticParams = () =>
  getPostSlugs().map((slug) => ({ slug }));

export const generateMetadata = async ({
  params,
}: BlogPostPageProps): Promise<Metadata> => {
  const { slug } = await params;

  try {
    const post = getPostBySlug(slug);
    return {
      title: post.title,
      description: post.excerpt,
      openGraph: {
        title: post.title,
        description: post.excerpt,
        url: `/blog/${slug}/`,
      },
    };
  } catch {
    return {
      title: 'Post not found',
    };
  }
};

const BlogPostPage = async ({ params }: BlogPostPageProps) => {
  const { slug } = await params;
  const slugs = getPostSlugs();

  if (!slugs.includes(slug)) {
    notFound();
  }

  const post = getPostBySlug(slug);

  return (
    <main id="main" className="mx-auto max-w-3xl px-5 py-16 sm:px-8 lg:py-24">
      <p className="text-xs font-medium tracking-[0.28em] text-vermillion uppercase">
        <Link href="/blog/" className="hover:text-vermillion-deep">
          Blog
        </Link>
      </p>
      <header className="mt-6 border-b border-rule pb-8">
        <p className="flex flex-wrap items-center gap-3 text-sm tracking-wide text-dust tabular-nums">
          <time dateTime={post.date}>{formatPostDate(post.date)}</time>
          {post.sample ? (
            <span className="text-[0.65rem] font-medium tracking-[0.18em] text-vermillion uppercase">
              Sample
            </span>
          ) : null}
        </p>
        <h1 className="font-display mt-4 text-4xl leading-tight text-ink italic sm:text-5xl">
          {post.title}
        </h1>
      </header>
      {post.sample ? (
        <div className="mt-8">
          <SampleBanner />
        </div>
      ) : null}
      <article className="blog-prose mt-10">
        <Markdown>{post.content}</Markdown>
      </article>
      <p className="mt-16 border-t border-rule pt-8">
        <Link
          href="/blog/"
          className="text-xs font-medium tracking-[0.18em] text-ink-soft uppercase transition-colors hover:text-vermillion"
        >
          ← All notes
        </Link>
      </p>
    </main>
  );
};

export default BlogPostPage;
