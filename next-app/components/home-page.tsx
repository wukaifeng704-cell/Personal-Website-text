"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Code, BookOpen, BriefcaseBusiness, Zap } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { heroSocialLinkOrder, socialLinks } from '@/config/socialLinks';
import { cn } from '@/lib/utils';
import AbilityMatrixDouble from '@/components/ability-matrix-double';

// 首页精简职业里程碑，突出AI转型节点
const homeCareerLite = [
  {
    title: 'AI+培训融合创新',
    year: '2025 - 至今',
    company: '老吴AI实验室',
    desc: '躬身入局AI浪潮，搭建AI+企业培训融合体系，为普通人拆解AI落地门槛',
    tags: ['AI+培训', 'AIGC落地', '体系搭建'],
  },
  {
    title: '跨行业培训管理专家',
    year: '2015 - 2023',
    company: 'OPPO/一加/58同城',
    desc: '主导多套企业培训体系从0到1搭建，实现培训与业务业绩深度绑定',
    tags: ['人才培养', '业务赋能', '项目操盘'],
  },
  {
    title: '职场能力筑基',
    year: '2010 - 2015',
    company: '本地生活/文旅电商',
    desc: '从一线销售到团队管理，完成业务与培训融合的底层能力积累',
    tags: ['团队管理', '运营实战', '培训启蒙'],
  },
];

// AI核心探索方向，贴合培训+AI定位
const aiExploreDirections = [
  {
    icon: <BriefcaseBusiness className="w-6 h-6 text-accent-green-light" />,
    title: 'AI+企业培训融合',
    desc: '将AIGC能力融入企业培训全流程，打造智能化、可复制的人才培育体系',
    tag: '培训数字化',
  },
  {
    icon: <Code className="w-6 h-6 text-accent-green-light" />,
    title: 'AI自动化工作流',
    desc: '基于Cursor、Claude Code、OpenClaw等工具，搭建职场人可复用的AI提效工作流',
    tag: '效率工具',
  },
  {
    icon: <BookOpen className="w-6 h-6 text-accent-green-light" />,
    title: 'AI零基础教学体系',
    desc: '用16年企业培训经验，把复杂AI技术拆解成普通人能上手的实操方法',
    tag: 'AI科普教学',
  },
  {
    icon: <Zap className="w-6 h-6 text-accent-green-light" />,
    title: 'AI智能体落地应用',
    desc: '探索AI智能体在企业招商、运营、客户服务等场景的落地实践',
    tag: '场景落地',
  },
];

// AI作品/案例预览，作为作品集引流
const aiCasePreview = [
  {
    title: '企业培训AI提效工具包',
    desc: '覆盖课程开发、项目设计、效果评估全流程的AI自动化模板',
    tag: '工具落地',
  },
  {
    title: 'AI零基础入门系列课程',
    desc: '专为职场人打造的AI工具实操课，零代码基础也能上手',
    tag: '教学内容',
  },
  {
    title: '招商运营AI智能体',
    desc: '基于大模型搭建的招商场景智能客服与线索跟进智能体',
    tag: '智能体开发',
  },
  {
    title: 'AIGC内容生产工作流',
    desc: '自动化图文、课程课件、宣传内容的AI生产全流程',
    tag: '内容生产',
  },
];

// 最新博客文章预览，为博客引流
const latestBlogPreview = [
  {
    title: 'Cursor零基础入门：3步搭建你的第一个AI自动化工作流',
    desc: '不用写代码，用16年培训经验拆解的保姆级教程，新手也能10分钟上手',
    tag: 'AI工具教程',
    time: '2025-03',
  },
  {
    title: '16年企业内训师心得：AI时代，培训师的核心能力到底是什么？',
    desc: '不是被AI替代，而是用AI放大你的专业价值，分享我的实战思考',
    tag: '行业心得',
    time: '2025-02',
  },
  {
    title: 'Claude Code实战：用AI把课程开发效率提升300%的方法',
    desc: '从需求拆解到课件输出，全流程AI提效的实操步骤，附可复用模板',
    tag: 'AI落地实战',
    time: '2025-01',
  },
];

/** 四块内容区差异化动效共用的视口配置 */
const homeSectionViewport = { once: true, amount: 0.22, margin: '0px 0px -10% 0px' } as const;

export default function HomePage() {
  return (
    <div className="space-y-14 md:space-y-16">
      {/* Hero Section：强化AI定位，打通作品集/博客/关于 */}
      <section className="grid grid-cols-1 items-start gap-10 pt-8 pb-12 sm:pt-10 md:pb-14 lg:grid-cols-12 lg:items-stretch lg:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="order-1 lg:col-span-7 max-w-3xl min-w-0"
        >
          <h1 className="font-bold tracking-tighter mb-6">
            <span className="block text-5xl md:text-7xl leading-[1.1]">老吴AI实验室</span>
            <motion.span
              className="mt-2 block max-w-full whitespace-nowrap text-[clamp(0.95rem,2.1vw+0.55rem,3.75rem)] md:text-[clamp(1.25rem,2.8vw+0.5rem,4.5rem)] leading-[1.15] text-transparent bg-clip-text bg-gradient-to-r from-accent-green-light via-emerald-300 to-accent-green-light animate-gradient-x [background-size:200%_auto]"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.22, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              企业培训专家
              <motion.span
                className="inline-block mx-1 md:mx-1.5 align-middle text-accent-green-light drop-shadow-[0_0_12px_rgba(52,211,153,0.35)]"
                aria-hidden
                animate={{ scale: [1, 1.12, 1], opacity: [0.9, 1, 0.9] }}
                transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
              >
                ×
              </motion.span>
              AI实战派探索者
            </motion.span>
          </h1>
          <p className="text-lg text-gray-400 mb-8 leading-relaxed max-w-2xl">
            企业内训深耕，洞见企业与职场真实痛点
            <br />
            2025年，躬身入局AI浪潮，用体系化培训思维
            <br />
            把复杂的AI技术，拆解成普通人能上手的实操方法
            <br />
            不追风，只落地，让AI真正成为职场人的提效利器
            <br />
            持续在博客更新AI教程、行业心得与实战干货
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent-green/20 text-accent-green-light border border-accent-green/50 hover:bg-accent-green/30 hover:border-accent-green transition-all rounded-md font-mono text-sm uppercase tracking-wider"
            >
              查看AI作品 <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 bg-transparent text-white border border-gray-600 hover:border-white hover:bg-white/5 transition-all rounded-md font-mono text-sm uppercase tracking-wider"
            >
              看最新教程 <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 bg-transparent text-white border border-gray-600 hover:border-white hover:bg-white/5 transition-all rounded-md font-mono text-sm uppercase tracking-wider"
            >
              关于我 <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {heroSocialLinkOrder.map((id) => {
              const { href, label, Icon } = socialLinks[id];
              const ready = Boolean(href.trim());
              return (
                <a
                  key={label}
                  href={ready ? href : '#'}
                  target={ready ? '_blank' : undefined}
                  rel={ready ? 'noopener noreferrer' : undefined}
                  title={ready ? label : '请在 socialLinks 中填写链接'}
                  onClick={ready ? undefined : (e) => e.preventDefault()}
                  className={cn(
                    'inline-flex items-center gap-2 rounded-full border border-accent-green/55 bg-black/45 px-4 py-2.5 text-sm text-white shadow-sm backdrop-blur-sm transition-all',
                    'hover:border-accent-green hover:bg-accent-green/10 hover:shadow-[0_0_20px_-8px_rgba(8,160,85,0.45)]',
                    !ready && 'cursor-not-allowed opacity-55 hover:border-accent-green/55 hover:bg-black/45 hover:shadow-none'
                  )}
                  aria-disabled={!ready}
                >
                  <Icon className="h-4 w-4 shrink-0 text-accent-green-light" aria-hidden />
                  <span className="font-medium tracking-wide">{label}</span>
                </a>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="order-2 mt-6 flex w-full min-w-0 justify-center self-stretch lg:col-span-5 lg:mt-0 lg:h-full lg:min-h-0 lg:justify-end"
        >
          <div className="group relative h-full w-full max-w-full overflow-hidden rounded-[1.5rem] shadow-[0_32px_100px_-48px_rgba(0,0,0,0.95),0_0_80px_-40px_rgba(4,106,56,0.12)] sm:rounded-[1.75rem] lg:max-w-none">
            <div className="relative aspect-[16/10] w-full min-h-[13rem] bg-[#020806] sm:aspect-[2/1] sm:min-h-[16rem] lg:aspect-auto lg:h-full lg:min-h-[min(32rem,52vh)]">
              <Image
                src="/avatar-wu-lab-wide.png"
                alt="老吴AI实验室"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                priority
                className="object-cover object-[center_28%] transition-transform duration-700 ease-out group-hover:scale-[1.015] lg:min-h-full"
              />
              <div className="pointer-events-none absolute inset-0 z-[1]" aria-hidden>
                <div className="absolute inset-y-0 left-0 w-[10%] min-w-[1.25rem] bg-gradient-to-r from-bg-dark to-transparent sm:w-[12%]" />
                <div className="absolute inset-y-0 right-0 w-[10%] min-w-[1.25rem] bg-gradient-to-l from-bg-dark to-transparent sm:w-[12%]" />
                <div className="absolute inset-x-0 top-0 h-[16%] min-h-[1.5rem] bg-gradient-to-b from-bg-dark to-transparent sm:h-[18%]" />
                <div className="absolute inset-x-0 bottom-0 h-[20%] min-h-[1.75rem] bg-gradient-to-t from-bg-dark to-transparent sm:h-[22%]" />
              </div>
              <div
                className="pointer-events-none absolute inset-0 z-[2] bg-[radial-gradient(ellipse_88%_78%_at_50%_44%,transparent_22%,rgba(5,5,5,0.38)_100%)]"
                aria-hidden
              />
            </div>
          </div>
        </motion.div>
      </section>

      <AbilityMatrixDouble />

      {/* AI核心探索方向：弹簧缩放入场 + 悬停上浮 */}
      <section>
        <motion.div
          className="mb-12 flex items-center justify-between gap-4"
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={homeSectionViewport}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center gap-4">
            <motion.div
              className="h-2 w-2 rounded-full bg-accent-green-light shadow-[0_0_10px_rgba(8,160,85,0.8)]"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={homeSectionViewport}
              transition={{ type: 'spring', stiffness: 400, damping: 22, delay: 0.05 }}
            />
            <h2 className="text-2xl font-bold tracking-widest uppercase text-white">AI核心探索方向</h2>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {aiExploreDirections.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 36, scale: 0.93 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={homeSectionViewport}
              transition={{ type: 'spring', stiffness: 90, damping: 17, delay: idx * 0.12 }}
              whileHover={{ y: -6, transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] } }}
              className="glass-panel glass-panel-hover flex h-full flex-col p-6 will-change-transform"
            >
              <motion.div
                className="mb-4 w-fit rounded-lg border border-accent-green/30 bg-accent-green/10 p-3"
                whileHover={{ scale: 1.06, rotate: [0, -3, 3, 0] }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                {item.icon}
              </motion.div>
              <h3 className="mb-2 text-xl font-bold text-white">{item.title}</h3>
              <p className="mb-4 flex-1 leading-relaxed text-gray-300">{item.desc}</p>
              <span className="mt-auto w-fit rounded-full border border-accent-green/30 bg-accent-green/10 px-3 py-1 font-mono text-xs text-accent-green-light">
                {item.tag}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* AI作品与落地案例：左右交错滑入 + 悬停微抬升 */}
      <section>
        <motion.div
          className="mb-12 flex items-center justify-between gap-4"
          initial={{ opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={homeSectionViewport}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center gap-4">
            <div className="h-2 w-2 rounded-full bg-accent-green-light shadow-[0_0_10px_rgba(8,160,85,0.8)]" />
            <h2 className="text-2xl font-bold tracking-widest uppercase text-white">AI作品与落地案例</h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={homeSectionViewport}
            transition={{ delay: 0.15 }}
          >
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 font-mono text-sm text-accent-green-light transition-colors hover:text-white"
            >
              查看全部作品 <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {aiCasePreview.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -36 : 36 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={homeSectionViewport}
              transition={{ duration: 0.52, ease: [0.22, 1, 0.36, 1], delay: idx * 0.08 }}
              whileHover={{ y: -4, scale: 1.02, transition: { duration: 0.2 } }}
              className="glass-panel glass-panel-hover h-full border border-accent-green/20 p-6 transition-colors will-change-transform hover:border-accent-green/50"
            >
              <h3 className="mb-3 text-lg font-bold text-white">{item.title}</h3>
              <p className="mb-4 leading-relaxed text-gray-400">{item.desc}</p>
              <span className="rounded border border-border-grayblue px-2 py-1 font-mono text-xs text-accent-green-light">
                {item.tag}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 最新博客干货：模糊渐清 + 悬停光晕 */}
      <section>
        <motion.div
          className="mb-12 flex items-center justify-between gap-4"
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={homeSectionViewport}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center gap-4">
            <div className="h-2 w-2 rounded-full bg-accent-green-light shadow-[0_0_10px_rgba(8,160,85,0.8)]" />
            <h2 className="text-2xl font-bold tracking-widest uppercase text-white">最新博客干货</h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-mono text-sm text-accent-green-light transition-colors hover:text-white"
          >
            查看全部文章 <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {latestBlogPreview.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 32, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={homeSectionViewport}
              transition={{ duration: 0.55, delay: idx * 0.14, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{
                y: -5,
                boxShadow: '0 28px 56px -28px rgba(8, 160, 85, 0.32)',
                transition: { duration: 0.22 },
              }}
              className="glass-panel glass-panel-hover flex h-full flex-col border border-gray-800 p-6 transition-shadow will-change-transform"
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="font-mono text-xs text-gray-500">{item.time}</span>
                <span className="rounded-full border border-accent-green/30 bg-accent-green/10 px-2 py-0.5 font-mono text-[10px] text-accent-green-light">
                  {item.tag}
                </span>
              </div>
              <h3 className="mb-3 text-lg font-bold leading-snug text-white transition-colors hover:text-accent-green-light">
                {item.title}
              </h3>
              <p className="mb-4 flex-1 leading-relaxed text-gray-400">{item.desc}</p>
              <Link
                href="/blog"
                className="mt-auto inline-flex w-fit items-center gap-1 font-mono text-sm text-accent-green-light transition-colors hover:text-white"
              >
                阅读全文 <ArrowRight className="h-3 w-3" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 职业里程碑：时间轴竖线生长 + 弹簧自下方入场 */}
      <section>
        <motion.div
          className="mb-12 flex items-center justify-between gap-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={homeSectionViewport}
          transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center gap-4">
            <div className="h-2 w-2 rounded-full bg-accent-green-light shadow-[0_0_10px_rgba(8,160,85,0.8)]" />
            <h2 className="text-2xl font-bold tracking-widest uppercase text-white">职业里程碑</h2>
          </div>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 font-mono text-sm text-accent-green-light transition-colors hover:text-white"
          >
            查看完整履历 <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {homeCareerLite.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 44 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={homeSectionViewport}
              transition={{ type: 'spring', stiffness: 72, damping: 16, delay: idx * 0.1 }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="glass-panel glass-panel-hover relative h-full overflow-hidden p-6 pl-7 will-change-transform"
            >
              <motion.div
                aria-hidden
                className="absolute bottom-0 left-0 top-0 w-[3px] origin-top rounded-full bg-gradient-to-b from-accent-green-light via-accent-green/70 to-accent-green/20"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={homeSectionViewport}
                transition={{ duration: 0.55, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformOrigin: 'top' }}
              />
              <div className="mb-4 flex flex-col gap-2">
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <span className="w-fit rounded-full border border-accent-green/30 bg-accent-green/10 px-3 py-1 font-mono text-xs text-accent-green-light">
                  {item.year}
                </span>
                <p className="font-mono text-sm text-gray-400">{item.company}</p>
              </div>
              <p className="mb-4 leading-relaxed text-gray-300">{item.desc}</p>
              <div className="mt-auto flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span key={tag} className="rounded border border-border-grayblue px-2 py-1 text-xs text-gray-400">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 联系与咨询 */}
      <section className="max-w-2xl">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-2 h-2 rounded-full bg-accent-green-light shadow-[0_0_10px_rgba(8,160,85,0.8)]" />
          <h2 className="text-2xl font-bold tracking-widest uppercase text-white">联系与咨询</h2>
        </div>
        <p className="text-gray-400 mb-8 leading-relaxed">
          无论是AI+培训合作、AI工具定制咨询、企业内训定制、AIGC领域交流，还是对博客内容的探讨，都欢迎随时与我联系。我会尽快回复您的信息。
        </p>
        <div className="space-y-4 font-mono text-sm">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-gray-300">
            <span className="text-accent-green-light shrink-0">邮箱</span>
            <a href="mailto:wukaifeng704@gmail.com" className="hover:text-white transition-colors break-all">
              wukaifeng704@gmail.com
            </a>
          </div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-gray-300">
            <span className="text-accent-green-light shrink-0">Github</span>
            <a
              href="https://github.com/wukaifeng704-cell"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors break-all"
            >
              github.com/wukaifeng704-cell
            </a>
          </div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-gray-300">
            <span className="text-accent-green-light shrink-0">微信</span>
            <span>wumingxixi</span>
          </div>
        </div>
      </section>
    </div>
  );
}
