import Link from 'next/link';
import { BookOpen, FileText, LayoutDashboard, ListTodo, NotebookPen, Rocket, Sparkles } from 'lucide-react';

const navItems = [
  { href: '/app', label: '总览', icon: LayoutDashboard },
  { href: '/app/tasks', label: '任务', icon: ListTodo },
  { href: '/app/notes', label: '笔记', icon: NotebookPen },
  { href: '/app/algorithms', label: '算法', icon: Rocket },
  { href: '/app/analytics', label: '数据', icon: Sparkles },
  { href: '/app/settings', label: '设置', icon: FileText },
];

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50">
      <aside className="fixed inset-y-0 left-0 hidden w-64 border-r border-slate-200 bg-white p-5 md:block">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-lg font-bold text-white">C</div>
          <div>
            <div className="text-base font-bold text-slate-900">CodePath</div>
            <div className="text-xs text-slate-500">学习工作台</div>
          </div>
        </Link>

        <nav className="mt-8 space-y-1">
          {navItems.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
            >
              <Icon className="h-4 w-4" />
              {label}
            </Link>
          ))}
        </nav>
      </aside>

      <div className="md:ml-64">
        <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/80 backdrop-blur">
          <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4">
            <div className="text-sm font-semibold text-slate-700">学习平台控制台</div>
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-medium text-emerald-700">已登录</span>
              <Link href="/" className="text-sm font-medium text-slate-600 hover:text-slate-900">退出</Link>
            </div>
          </div>
        </header>
        <main>{children}</main>
      </div>
    </div>
  );
}

