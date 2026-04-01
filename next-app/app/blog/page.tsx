import type { Metadata } from "next";
import { Suspense } from "react";
import { allPosts } from "contentlayer/generated";
import BlogListClient from "@/components/blog-list-client";
import type { BlogListItem } from "@/lib/blog-types";

export const metadata: Metadata = {
  title: "博客 | 老吴AI实验室",
  description: "AI 教程、企业培训心得与 AIGC 实战笔记",
};

function toListItems(): BlogListItem[] {
  return allPosts.map((p) => ({
    slug: p.slug,
    title: p.title,
    date: p.date,
    summary: p.summary,
    tags: p.tags,
    cover: p.cover,
  }));
}

export default function BlogIndexPage() {
  return (
    <Suspense
      fallback={
        <div className="py-24 text-center font-mono text-sm text-gray-500">
          加载博客列表…
        </div>
      }
    >
      <BlogListClient posts={toListItems()} />
    </Suspense>
  );
}
