import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { format } from "date-fns";
import { zhCN } from "date-fns/locale";
import { allPosts } from "contentlayer/generated";
import { ArrowLeft, Tag } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return allPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = allPosts.find((p) => p.slug === slug);
  if (!post) return { title: "文章未找到" };
  return {
    title: `${post.title} | 老吴AI实验室`,
    description: post.summary,
    openGraph: post.cover
      ? { images: [{ url: post.cover }] }
      : undefined,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = allPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const dateLabel = format(new Date(post.date), "yyyy年M月d日", {
    locale: zhCN,
  });

  return (
    <article className="mx-auto max-w-3xl">
      <Link
        href="/blog"
        className="mb-8 inline-flex items-center gap-2 font-mono text-sm text-gray-400 transition-colors hover:text-accent-green-light"
      >
        <ArrowLeft className="h-4 w-4" />
        返回博客列表
      </Link>

      <header className="mb-10 space-y-4">
        <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-gray-500">
          <time dateTime={post.date}>{dateLabel}</time>
          {post.tags.map((t) => (
            <span
              key={t}
              className="inline-flex items-center gap-1 rounded border border-border-grayblue/50 px-2 py-0.5 text-[11px] text-gray-400"
            >
              <Tag className="h-3 w-3 text-accent-green-light" />
              {t}
            </span>
          ))}
        </div>
        <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
          {post.title}
        </h1>
        <p className="text-lg text-gray-400">{post.summary}</p>
        {post.cover ? (
          <div
            className={cn(
              "relative mt-6 aspect-[21/9] w-full overflow-hidden rounded-xl border border-border-grayblue/50"
            )}
          >
            <Image
              src={post.cover}
              alt=""
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>
        ) : null}
      </header>

      <div
        className="blog-prose prose prose-invert prose-neutral max-w-none"
        dangerouslySetInnerHTML={{ __html: post.body.html }}
      />
    </article>
  );
}
