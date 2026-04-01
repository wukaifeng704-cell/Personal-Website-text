"use client";

import { motion } from "framer-motion";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from "recharts";

// ========== 培训核心能力矩阵数据 ==========
const trainMatrixData = [
  { subject: "课程开发设计", A: 90, fullMark: 100 },
  { subject: "培训体系搭建", A: 84, fullMark: 100 },
  { subject: "业务赋能落地", A: 86, fullMark: 100 },
  { subject: "人才梯队建设", A: 75, fullMark: 100 },
  { subject: "项目全流程操盘", A: 80, fullMark: 100 },
  { subject: "跨行业培训适配", A: 70, fullMark: 100 },
];

const trainSkillsData = [
  { name: "课程开发设计", desc: "需求拆解、内容与教学设计", value: 90 },
  { name: "培训体系搭建", desc: "方法论、制度与标准化建设", value: 84 },
  { name: "业务赋能落地", desc: "培训价值与业务结果绑定", value: 86 },
  { name: "人才梯队建设", desc: "全周期成长路径与培育", value: 75 },
  { name: "项目全流程操盘", desc: "端到端交付与效果评估", value: 80 },
  { name: "跨行业培训适配", desc: "多行业场景定制化落地", value: 70 },
];

const aigcMatrixData = [
  { subject: "AI工具教学拆解", A: 80, fullMark: 100 },
  { subject: "AI+培训融合落地", A: 78, fullMark: 100 },
  { subject: "AIGC内容生产", A: 75, fullMark: 100 },
  { subject: "AI工作流搭建", A: 72, fullMark: 100 },
  { subject: "AI智能体应用", A: 65, fullMark: 100 },
  { subject: "AI辅助编程", A: 60, fullMark: 100 },
];

const aigcSkillsData = [
  { name: "AI工具教学拆解", desc: "零基础教程设计与落地", value: 80 },
  { name: "AI+培训融合落地", desc: "AIGC与培训全流程结合", value: 78 },
  { name: "AIGC内容生产", desc: "自动化内容生产全流程", value: 75 },
  { name: "AI工作流搭建", desc: "职场提效工作流设计", value: 72 },
  { name: "AI智能体应用", desc: "垂直场景智能体落地", value: 65 },
  { name: "AI辅助编程", desc: "Vibe Coding与项目开发", value: 60 },
];

const tickAxis = { fill: "#9ca3af", fontSize: 9, fontFamily: "Inter" };

function TrainRadar() {
  return (
    <div className="mx-auto h-[220px] w-full sm:h-[250px] lg:h-[260px]">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={trainMatrixData}>
          <PolarGrid stroke="#2C3E50" />
          <PolarAngleAxis dataKey="subject" tick={tickAxis} />
          <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
          <Radar name="培训核心能力" dataKey="A" stroke="#08a055" fill="#046a38" fillOpacity={0.4} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

function AigcRadar() {
  return (
    <div className="mx-auto h-[220px] w-full sm:h-[250px] lg:h-[260px]">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={aigcMatrixData}>
          <PolarGrid stroke="#2C3E50" />
          <PolarAngleAxis dataKey="subject" tick={tickAxis} />
          <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
          <Radar name="AIGC实战能力" dataKey="A" stroke="#10b981" fill="#059669" fillOpacity={0.35} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

type Skill = { name: string; desc: string; value: number };

function SkillBars({ items }: { items: Skill[] }) {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-3 md:gap-3.5">
      {items.map((skill, idx) => (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.05 }}
          className="rounded-lg border border-border-grayblue bg-black/30 p-3 sm:p-3.5"
        >
          <div className="mb-1.5 flex items-start justify-between gap-2">
            <h4 className="min-w-0 flex-1 text-sm font-semibold leading-snug text-white">{skill.name}</h4>
            <span className="shrink-0 pt-0.5 font-mono text-sm font-medium tabular-nums text-accent-green-light">
              {skill.value}%
            </span>
          </div>
          <p className="mb-2.5 font-mono text-[11px] leading-relaxed text-gray-500 sm:text-xs">{skill.desc}</p>
          <div className="h-1 w-full overflow-hidden rounded-full bg-border-grayblue">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.value}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.06 }}
              className="h-full rounded-full bg-accent-green-light shadow-[0_0_10px_rgba(8,160,85,0.45)] shimmer-effect"
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default function AbilityMatrixDouble() {
  return (
    <section>
      <div className="mb-5 flex items-center gap-3 sm:mb-6">
        <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent-green-light shadow-[0_0_8px_rgba(8,160,85,0.8)] sm:h-2 sm:w-2" />
        <h2 className="text-lg font-bold uppercase tracking-widest text-white sm:text-xl md:text-2xl">双核心能力矩阵</h2>
        <div className="h-px flex-1 bg-border-grayblue/50" />
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8 xl:gap-10">
        <div className="glass-panel flex flex-col gap-4 p-4 sm:gap-5 sm:p-5 md:p-6">
          <h3 className="text-center text-base font-bold text-white sm:text-lg">培训核心能力矩阵</h3>
          <div className="w-full">
            <TrainRadar />
          </div>
          <div className="w-full pt-1">
            <SkillBars items={trainSkillsData} />
          </div>
        </div>

        <div className="glass-panel flex flex-col gap-4 p-4 sm:gap-5 sm:p-5 md:p-6">
          <h3 className="text-center text-base font-bold text-white sm:text-lg">AIGC实战能力矩阵</h3>
          <div className="w-full">
            <AigcRadar />
          </div>
          <div className="w-full pt-1">
            <SkillBars items={aigcSkillsData} />
          </div>
        </div>
      </div>
    </section>
  );
}
