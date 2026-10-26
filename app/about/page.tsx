import Link from 'next/link';

const resources = [
  {
    slug: 'cpp-reference',
    title: 'C++ Reference',
    type: '官方文档',
    level: '入门到进阶',
    description: '官方标准库、语言规则和 API 说明，是查漏补缺的第一站。',
    url: 'https://en.cppreference.com/w/',
    tags: ['C++', '标准库', '文档'],
  },
  {
    slug: 'leetcode',
    title: 'LeetCode',
    type: '编程训练平台',
    level: '中等到进阶',
    description: '覆盖算法、数据结构与面试题，适合日常刷题并提升解题节奏。',
    url: 'https://leetcode.com/',
    tags: ['算法', '刷题', '面试'],
  },
  {
    slug: 'cs61b',
    title: 'CS 61B',
    type: '公开课程',
    level: '中等',
    description: '系统学习数据结构与算法设计理念，适合建立软件工程思维。',
    url: 'https://sp18.datastructur.es/',
    tags: ['数据结构', '公开课', '课程'],
  },
];

export default function ResourcesPage() {
  return (
    <main className="container mx-auto max-w-[1200px] px-6 py-10">
      <div className="mb-8">
        <div className="inline-flex items-center rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs font-medium text-slate-700">精选资源</div>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900">高质量学习入口</h1>
        <p className="mt-3 max-w-2xl text-slate-600">聚焦资源质量和长期可用性，优先选择真正能提升能力的公开教材、平台和课程。</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {resources.map((item) => (
          <a key={item.slug} href={item.url} target="_blank" rel="noreferrer" className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span>{item.type}</span>
              <span>{item.level}</span>
            </div>
            <h2 className="mt-4 text-2xl font-semibold text-slate-900">{item.title}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700">{tag}</span>
              ))}
            </div>
            <div className="mt-5 text-sm font-medium text-blue-600">访问资源 →</div>
          </a>
        ))}
      </div>
    </main>
  );
}





































































