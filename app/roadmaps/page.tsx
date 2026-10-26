import Link from 'next/link';

const stats = [
  { label: '学习路线', value: '3条' },
  { label: '课程资源', value: '12+', },
  { label: '任务管理', value: '可追踪' },
  { label: '学习反馈', value: '实时' },
];

const features = [
  { title: '系统路线', description: '从基础语法到数据结构与算法，分阶段设计学习节奏。' },
  { title: '任务管理', description: '拆解每日任务，追踪完成度和学习节奏。' },
  { title: '知识沉淀', description: '笔记、标签与复盘，帮助你把知识真正留在脑中。' },
  { title: '资源库', description: '精选公开课、文档和训练平台，少走弯路。' },
  { title: '数据看板', description: '衡量任务完成率、题目完成率和持续学习表现。' },
  { title: '工程习惯', description: '像开发者一样维护项目、规划、执行和复盘。' },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-lg font-bold text-white">C</div>
            <div>
              <div className="text-lg font-bold text-slate-900">CodePath</div>
              <div className="text-[11px] text-slate-500">计算机学习平台</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
            <Link href="/roadmaps">路线</Link>
            <Link href="/resources">资源</Link>
            <Link href="/about">关于</Link>
            <Link href="/login">登录</Link>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">面向计算机学生的成长平台</div>
            <h1 className="mt-6 text-4xl font-black tracking-tight text-slate-900 md:text-6xl">
              把学习变成可执行的工程流程
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
              CodePath 帮助你从基础到工程实践，串联路线、任务、笔记、资源和数据看板，让提升学习效率不再靠“靠感觉”。
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/app" className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700">
                进入工作台
              </Link>
              <Link href="/roadmaps" className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 hover:border-slate-300">
                查看路线
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="rounded-2xl bg-slate-900 p-5 text-white">
              <div className="text-sm text-slate-300">当前阶段</div>
              <div className="mt-2 text-3xl font-bold">数据结构</div>
              <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-700">
                <div className="h-full w-[62%] rounded-full bg-blue-400" />
              </div>
              <div className="mt-4 flex items-center justify-between text-sm text-slate-300">
                <span>完成度 62%</span>
                <span>第 3 阶段</span>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-4">
              {stats.map((item) => (
                <div key={item.label} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="text-xs text-slate-500">{item.label}</div>
                  <div className="mt-2 text-xl font-bold text-slate-900">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="mb-8 text-center">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">为什么值得用</div>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">一个真正适合学习的成长系统</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-4 h-10 w-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">✓</div>
              <h3 className="text-xl font-semibold text-slate-900">{feature.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}













































































