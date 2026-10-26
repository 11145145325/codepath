import Link from 'next/link';

const roadmaps = [
  {
    slug: 'c-language',
    title: 'C 语言入门',
    stage: '阶段一',
    description: '掌握程序结构、数组与指针，打牢编程与工程思维基础。',
    progress: '32%',
  },
  {
    slug: 'cpp-foundation',
    title: 'C++ 与 STL',
    stage: '阶段二',
    description: '学习 C++ 语法、模板与容器，提升工程表达能力与实践效率。',
    progress: '58%',
  },
  {
    slug: 'data-structures',
    title: '数据结构与算法',
    stage: '阶段三',
    description: '系统学习链表、树、图、哈希与动态规划，提升题解能力。',
    progress: '41%',
  },
];

export default function RoadmapsPage() {
  return (
    <main className="container mx-auto max-w-[1200px] px-6 py-10">
      <div className="mb-8">
        <div className="inline-flex items-center rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs font-medium text-slate-700">学习路线</div>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900">从基础到工程实践</h1>
        <p className="mt-3 max-w-2xl text-slate-600">每一阶段都有明确目标、知识结构和可执行任务，让你不是在“刷动静态资料”，而是在建立真实能力。</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {roadmaps.map((item) => (
          <Link key={item.slug} href={`/roadmaps/${item.slug}`} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">{item.stage}</span>
              <span className="text-xs font-medium text-blue-600">{item.progress}</span>
            </div>
            <h2 className="mt-5 text-2xl font-semibold text-slate-900">{item.title}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
            <div className="mt-6 text-sm font-medium text-blue-600">查看详情 →</div>
          </Link>
        ))}
      </div>
    </main>
  );
}






































































