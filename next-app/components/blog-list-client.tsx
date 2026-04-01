"use client";

import { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowRight, Tag } from "lucide-react";
import { compareDesc } from "date-fns";
import { zhCN } from "date-fns/locale";
import { format } from "date-fns";
import type { BlogListItem } from "@/lib/blog-types";
import { cn } from "@/lib/utils";

type Props = {
  posts: BlogListItem[];
};

export default function BlogListClient({ posts }: Props) {
  const searchParams = useSearchParams();
  const tagFilter = searchParams.get("tag")?.trim() || "";

  const allTags = useMemo(() => {
    const s = new Set<string>();
    posts.forEach((p) => p.tags.forEach((t) => s.add(t)));
    return Array.from(s).sort((a, b) => a.localeCompare(b, "zh-CN"));
  }, [posts]);

  const filtered = useMemo(() => {
    let list = posts;
    if (tagFilter) {
      list = list.filter((p) => p.tags.includes(tagFilter));
    }
    return [...list].sort((a, b) =>
      compareDesc(new Date(a.date), new Date(b.date))
    );
  }, [posts, tagFilter]);

  return (
    <div className="mx-auto max-w-4xl space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 text-center"
      >
        <h1 className="mb-4 text-4xl font-bold uppercase tracking-widest text-white">
          博客
        </h1>
        <p className="font-mono text-sm text-gray-400">
          AI 教程 · 培训心得 · 实战干货 — 老吴AI实验室
        </p>
        <p className="mt-2 font-mono text-xs text-accent-green-light">
          共 {filtered.length} 篇
          {tagFilter ? ` · 标签「${tagFilter}」` : ""}
        </p>
      </motion.div>

      <div className="flex flex-wrap items-center justify-center gap-2">
        <Link
          href="/blog"
          scroll={false}
          className={cn(
            "rounded-full border px-3 py-1 font-mono text-xs transition-colors",
            !tagFilter
              ? "border-accent-green/60 bg-accent-green/15 text-accent-green-light"
              : "border-border-grayblue/60 text-gray-400 hover:border-accent-green/40 hover:text-white"
          )}
        >
          全部
        </Link>
        {allTags.map((tag) => {
          const active = tagFilter === tag;
          return (
            <Link
              key={tag}
              href={active ? "/blog" : `/blog?tag=${encodeURIComponent(tag)}`}
              scroll={false}
              className={cn(
                "rounded-full border px-3 py-1 font-mono text-xs transition-colors",
                active
                  ? "border-accent-green/60 bg-accent-green/15 text-accent-green-light"
                  : "border-border-grayblue/60 text-gray-400 hover:border-accent-green/40 hover:text-white"
              )}
            >
              {tag}
            </Link>
          );
        })}
      </div>

      <div className="space-y-6">
        {filtered.map((post, idx) => (
          <motion.article
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.06 }}
            className="glass-panel glass-panel-hover group"
          >
            <Link href={`/blog/${post.slug}`} className="block p-6 sm:p-8">
              <div className="flex flex-col gap-6 sm:flex-row">
                {post.cover ? (
                  <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden rounded-lg border border-border-grayblue/50 sm:aspect-auto sm:h-36 sm:w-52">
                    <Image
                      src={post.cover}
                      alt=""
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                      sizes="(max-width: 640px) 100vw, 208px"
                    />
                  </div>
                ) : null}
                <div className="min-w-0 flex-1 space-y-3">
                  <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-gray-500">
                    <time dateTime={post.date}>
                      {format(new Date(post.date), "yyyy年M月d日", {
                        locale: zhCN,
                      })}
                    </time>
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
                  <h2 className="text-xl font-semibold text-white transition-colors group-hover:text-accent-green-light sm:text-2xl">
                    {post.title}
                  </h2>
                  <p className="line-clamp-3 text-sm leading-relaxed text-gray-400">
                    {post.summary}
                  </p>
                  <span className="inline-flex items-center gap-1 font-mono text-xs text-accent-green-light">
                    阅读全文
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </div>
            </Link>
          </motion.article>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="text-center font-mono text-sm text-gray-500">
          该筛选条件下暂无文章。
        </p>
      ) : null}
    </div>
  );
}
