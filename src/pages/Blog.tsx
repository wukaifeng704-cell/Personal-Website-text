import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Folder } from 'lucide-react';
import { cn } from '../lib/utils';

const blogCategories = [
  {
    id: '1',
    title: 'LLM & LLMOps 研究',
    count: 114,
    articles: [
      { id: '1-1', title: '国产模型', count: 20 },
      { id: '1-2', title: '海外模型', count: 28 },
      { id: '1-3', title: '提示词 & 上下文工程', count: 50 },
      { id: '1-4', title: 'LLMOps (大语言模型运维)', count: 16 },
    ]
  },
  {
    id: '2',
    title: 'AI 绘画',
    count: 108,
    articles: [
      { id: '2-1', title: 'CLI 升级小技巧', date: '2026/03/20' },
      { id: '2-2', title: '实用工具、MCP、白嫖及杂谈', count: 29 },
      { id: '2-3', title: 'Antigravity', count: 2 },
      { id: '2-4', title: 'Claude Code', count: 43 },
      { id: '2-5', title: 'Codex', count: 2 },
      { id: '2-6', title: 'Cursor', count: 18 },
      { id: '2-7', title: 'Gemini', count: 2 },
    ]
  }
];

export default function Blog() {
  const [expandedCategories, setExpandedCategories] = useState<string[]>(['1', '2']);

  const toggleCategory = (id: string) => {
    setExpandedCategories(prev => 
      prev.includes(id) ? prev.filter(c => c !== id) : [...prev, id]
    );
  };

  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-widest uppercase text-white mb-4">博客</h1>
        <p className="text-gray-400 font-mono text-sm">AIGC 实践心得、游戏开发经验、技术探索笔记</p>
        <p className="text-accent-green-light font-mono text-xs mt-2">共 419 篇文章</p>
      </div>

      <div className="space-y-8">
        {blogCategories.map((category, idx) => {
          const isExpanded = expandedCategories.includes(category.id);
          return (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="glass-panel overflow-hidden"
            >
              <button
                onClick={() => toggleCategory(category.id)}
                className="w-full flex items-center justify-between p-6 bg-black/40 hover:bg-black/60 transition-colors border-b border-border-grayblue/50"
              >
                <div className="flex items-center gap-3">
                  <Folder className="w-5 h-5 text-accent-green-light" />
                  <h2 className="text-xl font-bold text-white">{category.id}、{category.title}</h2>
                  <span className="px-2 py-0.5 rounded-full bg-accent-green/20 text-accent-green-light text-xs font-mono ml-2">
                    {category.count}
                  </span>
                </div>
                <ChevronRight 
                  className={cn(
                    "w-5 h-5 text-gray-500 transition-transform duration-300",
                    isExpanded ? "rotate-90" : ""
                  )} 
                />
              </button>

              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-4 space-y-2">
                      {category.articles.map((article) => (
                        <div 
                          key={article.id}
                          className="flex items-center justify-between p-4 rounded-lg hover:bg-border-grayblue/20 transition-colors cursor-pointer group border border-transparent hover:border-border-grayblue/50"
                        >
                          <div className="flex items-center gap-3">
                            <ChevronRight className="w-4 h-4 text-gray-600 group-hover:text-accent-green-light transition-colors" />
                            <span className="text-gray-300 group-hover:text-white transition-colors">{article.title}</span>
                          </div>
                          {article.count && (
                            <span className="px-2 py-0.5 rounded-full bg-border-grayblue/30 text-gray-400 text-xs font-mono">
                              {article.count}
                            </span>
                          )}
                          {article.date && (
                            <span className="text-gray-500 text-xs font-mono">
                              {article.date}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
