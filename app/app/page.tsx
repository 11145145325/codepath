import Link from 'next/link';
import {
  ArrowUpRight,
  BookOpen,
  FileText,
  LayoutDashboard,
  ListTodo,
  NotebookPen,
  Rocket,
  Sparkles,
} from 'lucide-react';

const stats = [
  { label: '本周任务', value: '12', icon: ListTodo, tone: 'bg-blue-100 text-blue-700' },
  { label: '学习时长', value: '8.5h', icon: BookOpen, tone: 'bg-violet-100 text-violet-700' },
  { label: '完成率', value: '86%', icon: Rocket, tone: 'bg-emerald-100 text-emerald-700' },
  { label: '笔记数', value: '24', icon: NotebookPen, tone: 'bg-amber-100 text-amber-700' },
];

const tasks = [
  { title: '数据结构训练营', status: '进行中', meta: '3/5 题已完成', accent: 'bg-blue-500' },
  { title: '系统设计复盘', status: '待开始', meta: '明日 19:00', accent: 'bg-slate-400' },
  { title: 'LeetCode 热题 30', status: '已完成', meta: '已打卡 7 天', accent: 'bg-emerald-500' },
];

const notes = [
  { title: 'JavaScript 闭包理解', time: '今天 09:30' },
  { title: 'Next.js 路由与渲染', time: '昨天 18:10' },
  { title: '数据库索引优化笔记', time: '2026-10-18' },
];

export default function AppPage() {
  return (
    <div className="space-y-6 p-6 md:p-8">
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-medium text-blue-600">学习工作台</p>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">欢迎回来，开发者</h1>
        </div>
        <Link
          href="/app/tasks"
          className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700"
        >
          继续学习
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {stats.map(({ label, value, icon: Icon, tone }) => (
          <div key={label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-500">{label}</span>
              <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${tone}`}>
                <Icon className="h-5 w-5" />
              </div>
            </div>
            <div className="mt-4 text-3xl font-bold text-slate-900">{value}</div>
          </div>
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.5fr_1fr]">
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-slate-900">今日任务</h2>
            <Link href="/app/tasks" className="text-sm font-medium text-blue-600">
              查看全部
            </Link>
          </div>

          <div className="space-y-4">
            {tasks.map(({ title, status, meta, accent }) => (
              <div key={title} className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex items-center gap-3">
                  <span className={`h-2.5 w-2.5 rounded-full ${accent}`} />
                  <div>
                    <div className="font-medium text-slate-900">{title}</div>
                    <div className="text-sm text-slate-500">{meta}</div>
                  </div>
                </div>
                <span className="rounded-full bg-white px-2.5 py-1 text-xs font-medium text-slate-600 shadow-sm">
                  {status}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-slate-900">最近笔记</h2>
            <Link href="/app/notes" className="text-sm font-medium text-blue-600">
              查看全部
            </Link>
          </div>

          <div className="space-y-3">
            {notes.map(({ title, time }) => (
              <div key={title} className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                <div className="font-medium text-slate-900">{title}</div>
                <div className="mt-1 text-sm text-slate-500">{time}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
