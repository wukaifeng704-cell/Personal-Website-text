import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const representativeWorks = [
  {
    title: 'Claude Code × OpenClaw 中文教程',
    desc: '从零到企业实践：Claude Code 官方编程神器 + OpenClaw 开源 AI 助手 | 双顶流中文教程 | 21 篇教程 13 万字 | GitHub 800+ Star',
    tags: ['Claude Code', 'OpenClaw', '教程', '开源'],
    github: 'https://github.com',
    demo: 'https://example.com'
  },
  {
    title: 'HookPrompt',
    desc: '基于 Claude Code Hooks 的自动提示词优化工具，每次对话自动优化提取你的 Prompt',
    tags: ['Hooks', 'Prompt Engineering', 'JavaScript'],
    github: 'https://github.com',
  },
  {
    title: 'FindSkill',
    desc: 'Claude Code Skills 发现与安装工具，一键提取社区 Skill 并集成到你的工作流',
    tags: ['Skills', 'CLI', '工具链'],
    github: 'https://github.com',
  },
  {
    title: 'CC + Codex + Gemini 三合一',
    desc: '打通 Claude Code、OpenAI Codex、Google Gemini 三大 AI 编程引擎的统一调度框架',
    tags: ['Python', 'Multi-Model', 'AI编程'],
    github: 'https://github.com',
  },
  {
    title: 'AnyRouter 自动签到',
    desc: 'AnyRouter 平台多账号自动签到脚本，支持定时任务和多账号批量处理',
    tags: ['Python', '自动化', '签到'],
    github: 'https://github.com',
  },
  {
    title: 'Agent Teams Playbook',
    desc: 'Claude Code Agent Teams 多智能体编排 Skill，支持自适应团队组建、任务分发、质量门禁和并行协作',
    tags: ['Agent Teams', 'Skills', '多智能体'],
    github: 'https://github.com',
  }
];

const courseProjects = [
  {
    title: '今天吃什么',
    desc: '选择困难症终结者！彩色转盘随机决定今天吃啥。支持自定义菜单选项，数据本地持久化。CSS动画驱动的流畅旋转效果。',
    tags: ['React', 'CSS动画', 'LocalStorage'],
    demo: 'https://example.com'
  },
  {
    title: '记账本',
    desc: '简约实用的收支记录工具。支持分类统计、SVG图表可视化、按月细分明细查看。所有数据本地存储，隐私不丢失。',
    tags: ['React', 'SVG图表', '数据可视化'],
    demo: 'https://example.com'
  },
  {
    title: 'AI宝宝取名器',
    desc: '输入姓氏、选择性别风格，智能结合生成有寓意的中文名。内置200+高频取名用字数据库，含五行属性和详细释义。',
    tags: ['React', '算法', '中文NLP'],
    demo: 'https://example.com'
  },
  {
    title: '在线简历生成器',
    desc: '所见即所得的简历排版工具。支持多主题切换、一键导出PDF。模块化编辑，拖拽排序。',
    tags: ['React', 'PDF导出', '拖拽排序'],
    demo: 'https://example.com'
  },
  {
    title: '番茄钟',
    desc: '基于番茄工作法的沉浸式计时器。支持自定义时长、白噪音背景音、任务清单管理。',
    tags: ['React', 'Web Audio API', '状态管理'],
    demo: 'https://example.com'
  },
  {
    title: '密码生成器',
    desc: '高强度随机密码生成工具。支持自定义长度、字符集包含规则。一键复制，安全可靠。',
    tags: ['React', 'Crypto API', '安全'],
    demo: 'https://example.com'
  }
];

export default function Portfolio() {
  return (
    <div className="space-y-24">
      {/* Representative Works */}
      <section>
        <div className="flex items-center gap-4 mb-12">
          <div className="w-2 h-2 rounded-full bg-accent-green-light shadow-[0_0_10px_rgba(8,160,85,0.8)]" />
          <h2 className="text-2xl font-bold tracking-widest uppercase text-white">代表作品</h2>
          <div className="h-px flex-1 bg-border-grayblue/50" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {representativeWorks.map((work, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-panel p-6 flex flex-col h-full glass-panel-hover group"
            >
              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-accent-green-light transition-colors">{work.title}</h3>
              <p className="text-sm text-gray-400 mb-6 flex-1 leading-relaxed">{work.desc}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {work.tags.map(tag => (
                  <span key={tag} className="text-xs px-2 py-1 border border-border-grayblue rounded-full text-accent-green-light bg-accent-green/10 font-mono">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-border-grayblue/50">
                {work.github && (
                  <a href={work.github} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-xs font-mono text-gray-400 hover:text-white transition-colors">
                    <Github className="w-3.5 h-3.5" /> GitHub
                  </a>
                )}
                {work.demo && (
                  <a href={work.demo} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-xs font-mono text-gray-400 hover:text-white transition-colors">
                    <ExternalLink className="w-3.5 h-3.5" /> Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Course Projects */}
      <section>
        <div className="flex items-center gap-4 mb-12">
          <div className="w-2 h-2 rounded-full bg-accent-green-light shadow-[0_0_10px_rgba(8,160,85,0.8)]" />
          <h2 className="text-2xl font-bold tracking-widest uppercase text-white">课程实战项目</h2>
          <div className="h-px flex-1 bg-border-grayblue/50" />
        </div>
        
        <p className="text-sm text-gray-400 mb-8 font-mono text-center">跟着老金课程做出来的真实可用小工具，点击即可在线体验，背后隐藏硬核实现</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courseProjects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-panel p-6 flex flex-col h-full glass-panel-hover group"
            >
              {/* Placeholder for project image/icon */}
              <div className="h-32 w-full bg-gradient-to-br from-border-grayblue/20 to-black/50 rounded-lg mb-6 flex items-center justify-center border border-border-grayblue/30 group-hover:border-accent-green/30 transition-colors">
                <div className="w-12 h-12 rounded-full bg-border-grayblue/30 flex items-center justify-center">
                  <span className="text-accent-green-light font-mono text-xl">{project.title.charAt(0)}</span>
                </div>
              </div>

              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-accent-green-light transition-colors">{project.title}</h3>
              <p className="text-sm text-gray-400 mb-6 flex-1 leading-relaxed">{project.desc}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs px-2 py-1 border border-border-grayblue rounded-full text-accent-green-light bg-accent-green/10 font-mono">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-border-grayblue/50">
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-xs font-mono text-accent-green-light hover:text-white transition-colors">
                    <ExternalLink className="w-3.5 h-3.5" /> 在线体验
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
