import Link from 'next/link';
import { notFound } from 'next/navigation';

const roadmapMap: Record<string, { title: string; stage: string; progress: string; description: string; objectives: string[]; topics: string[] }> = {
  'c-language': {
    title: 'C 语言入门',
    stage: '阶段一',
    progress: '32%',
    description: '建立程序结构、控制流、数组、字符串与指针的理解能力，打牢编程训练基础。',
    objectives: ['掌握基本语法与程序控制逻辑', '理解数组、字符串和指针', '能够独立完成简单的输入输出与调试'],
    topics: ['基础语法', '函数', '数组', '字符串', '指针', '结构体', '文件 I/O'],
  },
  'cpp-foundation': {
    title: 'C++ 与 STL',
    stage: '阶段二',
    progress: '58%',
    description: '以工程实践能力为核心，理解 C++ 语法和 STL 容器使用方式，提升代码表达效率。',
    objectives: ['掌握 C++ 基础语法', '理解类、引用和模板基础', '熟悉 vector、map、set 等容器的使用'],
    topics: ['C++ 基础语法', '引用', '类与对象', '模板', 'vector', 'map', 'set', 'STL 算法'],
  },
  'data-structures': {
    title: '数据结构与算法',
    stage: '阶段三',
    progress: '41%',
    description: '学习常用数据结构与算法思想，提升解题框架、复杂度意识和题目建模能力。',
    objectives: ['理解链表、栈和队列', '熟悉树与图的表示和遍历', '掌握动态规划和二分思路'],
    topics: ['链表', '栈和队列', '树', '图', '哈希表', '二分', '动态规划', '回溯'],
  },
};

export default function RoadmapDetailPage({ params }: { params: { slug: string } }) {
  const roadmap = roadmapMap[params.slug];

  if (!roadmap) {
    notFound();
  }

  return (
    <main className="container mx-auto max-w-[1200px] px-6 py-10">
      <Link href="/roadmaps" className="text-sm font-medium text-blue-600 hover:text-blue-700">← 返回路线列表</Link>

      <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">{roadmap.stage}</span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900">{roadmap.title}</h1>
          </div>
          <div className="rounded-xl bg-blue-50 px-4 py-3 text-right">
            <div className="text-xs text-slate-500">完成度</div>
            <div className="text-2xl font-bold text-blue-700">{roadmap.progress}</div>
          </div>
        </div>

        <p className="mt-5 max-w-3xl text-lg text-slate-600">{roadmap.description}</p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-xl font-semibold text-slate-900">学习目标</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              {roadmap.objectives.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-xl font-semibold text-slate-900">推荐知识点</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {roadmap.topics.map((item) => (
                <span key={item} className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700">{item}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}





















































