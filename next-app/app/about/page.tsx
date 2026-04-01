"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { GitHubMarkIcon } from '@/components/github-mark-icon';
import Link from 'next/link';
import { careerTimeline, personalGrowthTimeline, type TimelineEntry } from '@/data/timelines';
import { cn } from '@/lib/utils';

/** 双向滚动：进入视口显现，离开视口回到初始态（向上滚同样生效） */
const timelineScrollViewport = { once: false, amount: 0.28, margin: '0px 0px -12% 0px' } as const;

const streamRowVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14, delayChildren: 0.06 },
  },
};

const streamItemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.48, ease: [0.22, 1, 0.36, 1] as const },
  },
};

/** 取时间段起始四位年份，用于排序与中轴展示 */
function parseYearStart(yearStr: string): number {
  const m = yearStr.match(/(\d{4})/);
  return m ? parseInt(m[1]!, 10) : 0;
}

function spineYearSingle(yearStr: string): string {
  const m = yearStr.match(/(\d{4})/);
  return m ? m[1]! : yearStr.slice(0, 4);
}

/** 同一起始年份：职业历程与个人成长左右并排，共用中轴年份节点 */
type TimelinePairRow = {
  career: TimelineEntry;
  personal: TimelineEntry;
  spineLabel: string;
};

function buildPairedTimeline(): TimelinePairRow[] {
  const byYearDesc = (a: TimelineEntry, b: TimelineEntry) =>
    parseYearStart(b.year) - parseYearStart(a.year);
  const careers = [...careerTimeline].sort(byYearDesc);
  const growth = [...personalGrowthTimeline].sort(byYearDesc);
  return careers.map((career, i) => ({
    career,
    personal: growth[i]!,
    spineLabel: spineYearSingle(career.year),
  }));
}

function SpineYearSingle({ label }: { label: string }) {
  return (
    <div className="relative z-[2] flex min-w-[3.25rem] items-center justify-center rounded-md border border-accent-green/55 bg-bg-dark px-2.5 py-1.5 font-mono text-sm font-semibold tabular-nums text-accent-green-light shadow-[0_0_22px_-6px_rgba(8,160,85,0.55)] sm:min-w-[3.5rem] sm:text-base">
      ■ {label}
    </div>
  );
}

function SubtitleLine({ text }: { text: string }) {
  const parts = text
    .split('|')
    .map((s) => s.trim())
    .filter(Boolean);
  if (parts.length === 0) return null;
  return (
    <p className="mb-2 font-mono text-[10px] leading-relaxed text-gray-500 sm:text-xs">
      {parts.map((p, i) => (
        <span key={`${p}-${i}`}>
          {i > 0 && <span className="mx-1.5 text-accent-green/35">|</span>}
          {p}
        </span>
      ))}
    </p>
  );
}

function TimelineEntryCard({ item, className }: { item: TimelineEntry; className?: string }) {
  const metaLine = item.role ?? item.company;
  return (
    <div
      className={cn(
        'flex h-full min-h-0 flex-col rounded-xl border border-accent-green/25 bg-black/55 p-3.5 shadow-[0_0_24px_-16px_rgba(8,160,85,0.35)] sm:p-5',
        className
      )}
    >
      <div className="mb-2 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-3">
        <h4 className="text-left text-sm font-bold leading-snug text-white sm:text-base">{item.title}</h4>
        <span className="shrink-0 self-start rounded-full border border-accent-green/40 bg-accent-green/10 px-2 py-0.5 font-mono text-[10px] text-accent-green-light sm:text-xs">
          {item.year}
        </span>
      </div>
      {metaLine ? (
        <p
          className={
            item.role
              ? 'mb-1.5 text-left text-xs font-semibold leading-snug text-accent-green-light/95 sm:text-sm'
              : 'mb-1.5 font-mono text-[11px] text-gray-500 sm:text-xs'
          }
        >
          {metaLine}
        </p>
      ) : null}
      {item.subtitle ? <SubtitleLine text={item.subtitle} /> : null}
      <p className="mb-3 flex-1 text-left text-[11px] leading-relaxed text-gray-400 sm:text-sm">{item.desc}</p>
      <div className="mt-auto flex flex-wrap gap-1.5">
        {item.tags.map((tag) => (
          <span
            key={tag}
            className="rounded border border-accent-green/35 px-2 py-0.5 font-mono text-[10px] text-accent-green-light/95"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

/** 双轨时间线：同年份左右对开；中轴单点；滚动进入流式显现，离开可逆 */
function SharedDualTimeline() {
  const rows = buildPairedTimeline();

  return (
    <div className="relative overflow-hidden rounded-2xl border border-accent-green/30 bg-black/40 p-4 shadow-[0_0_48px_-28px_rgba(8,160,85,0.35)] backdrop-blur-sm sm:p-6 md:p-8 lg:p-10">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(8,160,85,0.14) 3px, rgba(8,160,85,0.14) 4px)',
        }}
      />

      <div className="relative z-[1] mb-10 grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-3 sm:gap-6">
        <h3 className="text-center text-xl font-bold tracking-[0.18em] text-accent-green-light sm:text-2xl md:text-3xl">
          职业历程
        </h3>
        <div
          className="mx-1 flex h-14 w-px shrink-0 flex-col bg-gradient-to-b from-accent-green/20 via-accent-green/55 to-accent-green/20 sm:h-16"
          role="separator"
          aria-label="时间轴"
        />
        <h3 className="text-center text-xl font-bold tracking-[0.18em] text-accent-green-light sm:text-2xl md:text-3xl">
          个人成长
        </h3>
      </div>

      <div className="relative z-[1]">
        <div
          className="pointer-events-none absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-gradient-to-b from-accent-green/58 via-accent-green/32 to-accent-green/48"
          aria-hidden
        />
        <div className="space-y-8 pb-2 sm:space-y-10 md:space-y-12">
          {rows.map((row, idx) => (
            <motion.div
              key={`${row.spineLabel}-${row.career.title}-${idx}`}
              className="relative grid grid-cols-1 grid-rows-[auto_auto_auto] items-stretch gap-x-4 gap-y-5 sm:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] sm:grid-rows-none sm:gap-x-5 md:gap-x-8 lg:gap-x-10"
              initial="hidden"
              whileInView="visible"
              viewport={timelineScrollViewport}
              variants={streamRowVariants}
            >
              <motion.div
                variants={streamItemVariants}
                className="order-1 flex min-w-0 justify-end sm:order-none"
              >
                <div className="flex w-full max-w-none flex-col sm:max-w-none">
                  <p className="mb-2 font-mono text-[10px] uppercase tracking-wider text-accent-green/70 sm:text-accent-green/60">
                    职业历程
                  </p>
                  <TimelineEntryCard item={row.career} />
                </div>
              </motion.div>

              <motion.div
                variants={streamItemVariants}
                className="order-2 flex shrink-0 flex-col items-center px-1 sm:order-none sm:self-start sm:px-1.5 sm:pt-1"
              >
                <SpineYearSingle label={row.spineLabel} />
              </motion.div>

              <motion.div variants={streamItemVariants} className="order-3 min-w-0 sm:order-none">
                <div className="flex w-full max-w-none flex-col">
                  <p className="mb-2 font-mono text-[10px] uppercase tracking-wider text-accent-green/70 sm:text-accent-green/60">
                    个人成长
                  </p>
                  <TimelineEntryCard item={row.personal} />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

// 核心数据卡片，只在关于页展示，不和首页重复
const statsShowcase = [
  { num: '44+', unit: '门', label: '精品课程开发' },
  { num: '12+', unit: '个', label: '标杆项目操盘' },
  { num: '5', unit: '套', label: '培训体系搭建' },
  { num: '10000+', unit: '人次', label: '累计培训覆盖' },
  { num: '300+', unit: '名', label: '核心人才培育' },
  { num: '92', unit: '%', label: '岗位胜任率' },
  { num: '98', unit: '%', label: '课程满意度' },
  { num: '4', unit: '大赛道', label: '跨行业经验' },
] as const;

// 个人关键词，只在关于页展示
const keywords = [
  '资深企业内训师',
  'AI 探索者',
  '培训体系搭建',
  '业务增长赋能',
  '人才梯队建设',
  '课程开发设计',
  'Claude Code',
  'Cursor',
  'OpenClaw',
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-[min(92rem,calc(100vw-1.25rem))] space-y-16 px-3 sm:px-4">
      {/* 页面头部：去掉和首页重复的简介，换成有温度的个人独白 */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="mx-auto max-w-3xl space-y-6 text-center"
      >
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent-green/30 bg-accent-green/10 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.2em] text-accent-green-light">
          <Sparkles className="h-3.5 w-3.5" />
          关于我
        </div>
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl">十六年深耕，躬身入局AI时代</h1>
        <p className="font-mono text-sm text-gray-400">
          老吴AI实验室 — 培训 × 科创 × AI
        </p>

        {/* 核心个人独白，和首页的短slogan形成差异化，讲完整故事 */}
        <div className="mt-8 space-y-4 text-left leading-relaxed text-gray-300">
          <p>
            我是<strong className="text-accent-green-light">老吴</strong>，企业培训与人才发展领域深耕者，从一线销售到团队管理，从区域培训负责人到跨行业培训体系搭建专家，我始终相信：
            <span className="font-medium text-accent-green-light">好的培训，永远要落地到业务结果，扎根到人的成长里。</span>
          </p>
          <p>
            十六年里，我横跨消费电子、互联网、商业投资、科创园区四大行业，主导搭建了5套从0到1的企业培训体系，开发了44门精品课程，累计培训覆盖超10000人次，用培训帮助企业实现业绩增长，帮助职场人完成能力跃迁。
          </p>
          <p>
            2025年，我主动拥抱AI浪潮，创立「老吴AI实验室」。不是跟风追热点，而是用多年企业实战练出来的体系化思维，把复杂的AI工具、自动化工作流，拆解成普通人也能上手的方法，让AI真正成为职场人的提效工具，而不是焦虑来源。
          </p>
          <p>AI时代，我们共同进化。</p>
        </div>

        {/* Github入口，补充个人代码阵地 */}
        <a
          href="https://github.com/wukaifeng704-cell"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 rounded-full border border-accent-green/50 bg-accent-green/10 px-4 py-2 text-sm text-accent-green-light transition-all hover:bg-accent-green/20"
        >
          <GitHubMarkIcon className="h-4 w-4" />
          我的 Github 主页
        </a>
      </motion.div>

      {/* 双轨时间线：关于页核心内容，首页没有，完全差异化 */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.16, duration: 0.45 }}
        className="w-full space-y-6"
      >
        <SharedDualTimeline />
      </motion.section>

      {/* 数据展示卡片：只在关于页展示，不和首页重复 */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.22, duration: 0.45 }}
        className="mx-auto w-[min(80%,100%)] px-0"
      >
        <h2 className="mb-4 text-center text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
          十六年深耕 · 核心成果
        </h2>

        <div
          className="mx-auto my-10 h-px w-full bg-gradient-to-r from-transparent via-border-grayblue/70 to-transparent"
          aria-hidden
        />

        <div className="mx-auto grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {statsShowcase.map((item) => (
            <div
              key={item.label}
              className="flex min-h-[10.5rem] flex-col overflow-hidden rounded-xl border border-accent-green/30 bg-black/35 px-3 py-4 shadow-[0_0_24px_-18px_rgba(8,160,85,0.25)] sm:min-h-[11rem] sm:px-4 sm:py-5"
            >
              <div className="flex min-h-0 flex-[7] flex-col items-center justify-center px-0.5">
                <span
                  className="inline-flex max-w-full items-baseline justify-center gap-0.5 whitespace-nowrap text-[clamp(1.6rem,3.6vw,2.35rem)] leading-none text-accent-green-light"
                  title={`${item.num}${item.unit}`}
                >
                  <span className="font-bold tabular-nums tracking-tight">{item.num}</span>
                  <span className="translate-y-[0.06em] font-semibold tabular-nums text-[0.58em] text-accent-green-light/95">
                    {item.unit}
                  </span>
                </span>
              </div>
              <div className="flex flex-[3] flex-col items-center justify-start pt-1.5 sm:pt-2">
                <p className="text-center text-xs leading-snug text-gray-400 sm:text-sm">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* 关键词标签云：只在关于页展示 */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.28, duration: 0.45 }}
        className="mx-auto max-w-3xl"
      >
        <div className="mb-6 flex items-center gap-4">
          <div className="h-2 w-2 rounded-full bg-accent-green-light shadow-[0_0_10px_rgba(8,160,85,0.8)]" />
          <h2 className="text-lg font-bold tracking-widest text-white">核心标签</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {keywords.map((k) => (
            <span
              key={k}
              className="rounded-full border border-border-grayblue bg-black/30 px-3 py-1.5 font-mono text-xs text-gray-300 transition-colors hover:border-accent-green/40 hover:text-white"
            >
              {k}
            </span>
          ))}
        </div>
      </motion.section>

      {/* 底部跳转按钮，优化路径 */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.34, duration: 0.45 }}
        className="mx-auto flex max-w-3xl flex-col items-center gap-4 border-t border-border-grayblue/50 pt-12 sm:flex-row sm:justify-center"
      >
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 rounded-md border border-accent-green/50 bg-accent-green/20 px-6 py-3 font-mono text-sm uppercase tracking-wider text-accent-green-light transition-all hover:border-accent-green hover:bg-accent-green/30"
        >
          查看作品集 <ArrowRight className="h-4 w-4" />
        </Link>
        <Link href="/" className="text-sm font-medium text-gray-500 transition-colors hover:text-white">
          返回首页
        </Link>
      </motion.div>
    </div>
  );
}
