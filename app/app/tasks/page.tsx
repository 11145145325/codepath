"use client";

import Link from 'next/link';
import { ArrowRight, BookText, CheckSquare, NotebookPen, TrendingUp } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { safeReadStorage, seedNotes, seedProblems, seedTasks, storageKeys, type Note, type Problem, type Task } from '@/lib/content';

export default function DashboardPage() {
  const [tasks, setTasks] = useState<Task[]>(seedTasks);
  const [notes, setNotes] = useState<Note[]>(seedNotes);
  const [problems, setProblems] = useState<Problem[]>(seedProblems);

  useEffect(() => {
    setTasks(safeReadStorage(storageKeys.tasks, seedTasks));
    setNotes(safeReadStorage(storageKeys.notes, seedNotes));
    setProblems(safeReadStorage(storageKeys.problems, seedProblems));
  }, []);

  const summary = useMemo(() => {
    const completedTasks = tasks.filter((task) => task.status === 'done').length;
    const taskRate = tasks.length ? Math.round((completedTasks / tasks.length) * 100) : 0;
    const totalMinutes = tasks.reduce((sum, task) => sum + (task.actualMinutes ?? task.estimatedMinutes), 0);
    const noteCount = notes.length;
    const progress = problems.length ? Math.round((problems.filter((p) => p.status === 'completed').length / problems.length) * 100) : 0;

    return { taskRate, totalMinutes, noteCount, progress };
  }, [tasks, notes, problems]);

  const metrics = [
    { label: '今日任务', value: `${tasks.filter((t) => t.status !== 'done').length} / ${tasks.length}`, icon: CheckSquare },
    { label: '学习时长', value: `${summary.totalMinutes} 分钟`, icon: TrendingUp },
    { label: '知识点完成', value: `${summary.taskRate}%`, icon: BookText },
    { label: '新增笔记', value: `${summary.noteCount} 篇`, icon: NotebookPen },
  ];

  return (
    <main className="container mx-auto max-w-[1200px] px-6 py-10">
      <header className="mb-8 flex items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs font-medium text-slate-700">
            个人学习总览
          </div>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">欢迎回来，开发者</h1>
        </div>
        <Link href="/app/tasks" className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-blue-700">
          管理任务 <ArrowRight className="h-4 w-4" />
        </Link>
      </header>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {metrics.map(({ label, value, icon: Icon }) => (
          <div key={label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-500">{label}</span>
              <Icon className="h-5 w-5 text-blue-600" />
            </div>
            <div className="mt-4 text-2xl font-bold text-slate-900">{value}</div>
          </div>
        ))}
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-slate-900">今日任务</h2>
            <Link href="/app/tasks" className="text-sm font-medium text-blue-600">查看全部</Link>
          </div>

          <div className="space-y-4">
            {tasks.slice(0, 3).map((task) => (
              <div key={task.id} className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 p-4">
                <div>
                  <div className="font-medium text-slate-800">{task.title}</div>
                  <div className="mt-1 text-sm text-slate-500">{task.dueDate ?? '未设置日期'}</div>
                </div>
                <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${task.status === 'done' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
                  {task.status === 'done' ? '已完成' : '待完成'}
                </span>
              </div>
            ))}
          </div>
        </section>

        <aside className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">当前阶段</h2>
          <div className="mt-5 rounded-2xl bg-slate-900 p-5 text-white">
            <div className="text-sm text-slate-300">阶段 3</div>
            <div className="mt-2 text-2xl font-bold">数据结构</div>
            <div className="mt-4 text-sm text-slate-300">重点：链表、栈、队列、树、图、哈希表。</div>
          </div>

          <div className="mt-6">
            <div className="mb-2 flex items-center justify-between text-sm text-slate-600">
              <span>路线进度</span>
              <span className="font-medium text-slate-900">{summary.progress}%</span>
            </div>
            <div className="h-2.5 overflow-hidden rounded-full bg-slate-200">
              <div className="h-full rounded-full bg-blue-500" style={{ width: `${summary.progress}%` }} />
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}

