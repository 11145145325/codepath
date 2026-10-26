import Link from 'next/link';
import { ArrowRight, BookText, CheckSquare, NotebookPen, TrendingUp } from 'lucide-react';

const stats = [
  { label: '今日任务', value: '3 / 5', icon: CheckSquare },
  { label: '学习时长', value: '92 分钟', icon: TrendingUp },
  { label: '知识点完成', value: '64%', icon: BookText },
  { label: '新增笔记', value: '2 篇', icon: NotebookPen },
];

const tasks = [
  { title: '复习链表与双指针', status: '待完成', date: '今天' },
  { title: '完成 C++ STL 练习', status: '已完成', date: '今天' },
  { title: '阅读图论基础知���点', status: '待完成', date: '明天' },
];

export default function DashboardPage() {
  return (
    <main className="container-shell py-10">
      <header className="mb-8 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="badge">个人学习总览</div>
          <h1 className="mt-3 text-3xl font-bold text-slate-900">欢迎回来，开发者。</h1>
        </div>
        <Link href="/app/tasks" className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-blue-700">
          管理任务
          <ArrowRight className="h-4 w-4" />
        </Link>
      </header>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {stats.map(({ label, value, icon: Icon }) => (
          <div key={label} className="card p-5">
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-500">{label}</span>
              <Icon className="h-5 w-5 text-blue-600" />
            </div>
            <div className="mt-4 text-2xl font-bold text-slate-900">{value}</div>
          </div>
        ))}
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <section className="card p-6">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-slate-900">今日任务</h2>
            <Link href="/app/tasks" className="text-sm font-medium text-blue-600">查看全部</Link>
          </div>

          <div className="space-y-4">
            {tasks.map((task) => (
              <div key={task.title} className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 p-4">
                <div>
                  <div className="font-medium text-slate-800">{task.title}</div>
                  <div className="mt-1 text-sm text-slate-500">{task.date}</div>
                </div>
                <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${task.status === '已完成' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
                  {task.status}
                </span>
              </div>
            ))}
          </div>
        </section>

        <aside className="card p-6">
          <h2 className="text-xl font-semibold text-slate-900">当前阶段</h2>
          <div className="mt-5 rounded-2xl bg-slate-900 p-5 text-white">
            <div className="text-sm text-slate-300">阶段 3</div>
            <div className="mt-2 text-2xl font-bold">数据结构</div>
            <div className="mt-4 text-sm text-slate-300">重点：链表、栈、队列、树与图。</div>
          </div>

          <div className="mt-6 space-y-3 text-sm text-slate-600">
            <div className="flex items-center justify-between">
              <span>路线进度</span>
              <span className="font-medium text-slate-900">64%</span>
            </div>
            <div className="h-2.5 overflow-hidden rounded-full bg-slate-200">
              <div className="h-full w-[64%] rounded-full bg-blue-500" />
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}

