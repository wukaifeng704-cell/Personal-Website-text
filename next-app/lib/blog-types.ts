/** 博客列表传给客户端组件的可序列化字段（不含 body） */
export type BlogListItem = {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
  cover?: string;
};
