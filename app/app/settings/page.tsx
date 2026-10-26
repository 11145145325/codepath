"use client";

import { useEffect, useMemo, useState } from 'react';
import { safeReadStorage, seedProblems, seedTasks, storageKeys, type Problem, type Task } from '@/lib/content';

export default function AnalyticsPage() {
  const [tasks, setTasks] = useState<Task[]>(seedTasks);
  const [problems, setProblems] = useState<Problem[]>(seedProblems);

  useEffect(() => {
    setTasks(safeReadStorage(storageKeys.tasks, seedTasks));
    setProblems(safeReadStorage(storageKeys.problems, seedProblems));
  }, []);

  const analytics = useMemo(() => {
    const doneTasks = tasks.filter((task) => task.status === 'done').length;
    const totalTaskRate = tasks.length ? Math.round((doneTasks / tasks.length) * 100) : 0;
    const doneProblems = problems.filter((problem) => problem.status === 'completed').length;
    const totalProblemRate = problems.length ? Math.round((doneProblems / problems.length) * 100) : 0;
    const totalMinutes = tasks.reduce((sum, task) => sum + (task.actualMinutes ?? task.estimatedMinutes), 0);
    const reviewCount = problems.filter((problem) => problem.status === 'review').length;
    return { totalTaskRate, totalProblemRate, totalMinutes, reviewCount };
  }, [tasks, problems]);

  return (
    <main className="container mx-auto max-w-[1200px] px-6 py-10">
      <div className="mb-6">
        <div className="inline-flex items-center rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs font-medium text-slate-700">学习数据</div>
        <h1 className="mt-3 text-3xl font-bold text-slate-900">学习统计面板</h1>
      </div>

      <div className="grid gap-5 md:grid-cols-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="text-sm text-slate-500">任务完成率</div>
          <div className="mt-3 text-3xl font-bold text-slate-900">{analytics.totalTaskRate}%</div>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="text-sm text-slate-500">题目完成率</div>
          <div className="mt-3 text-3xl font-bold text-slate-900">{analytics.totalProblemRate}%</div>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="text-sm text-slate-500">累计时长</div>
          <div className="mt-3 text-3xl font-bold text-slate-900">{analytics.totalMinutes} 分钟</div>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="text-sm text-slate-500">待复习</div>
          <div className="mt-3 text-3xl font-bold text-slate-900">{analytics.reviewCount}</div>
        </div>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">任务状态分布</h2>
          <div className="mt-5 space-y-4">
            {['todo', 'in_progress', 'done'].map((state) => {
              const count = tasks.filter((task) => task.status === state).length;
              const width = tasks.length ? (count / tasks.length) * 100 : 0;
              return (
                <div key={state}>
                  <div className="mb-2 flex items-center justify-between text-sm text-slate-600">
                    <span>{state === 'todo' ? '待办' : state === 'in_progress' ? '进行中' : '已完成'}</span>
                    <span>{count}</span>
                  </div>
                  <div className="h-2.5 overflow-hidden rounded-full bg-slate-200">
                    <div className="h-full rounded-full bg-blue-500" style={{ width: `${width}%` }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">算法题状态</h2>
          <div className="mt-5 space-y-4">
            {['not_started', 'in_progress', 'completed', 'review'].map((state) => {
              const count = problems.filter((problem) => problem.status === state).length;
              const width = problems.length ? (count / problems.length) * 100 : 0;
              return (
                <div key={state}>
                  <div className="mb-2 flex items-center justify-between text-sm text-slate-600">
                    <span>{state === 'not_started' ? '未开始' : state === 'in_progress' ? '做题中' : state === 'completed' ? '已完成' : '待复习'}</span>
                    <span>{count}</span>
                  </div>
                  <div className="h-2.5 overflow-hidden rounded-full bg-slate-200">
                    <div className="h-full rounded-full bg-emerald-500" style={{ width: `${width}%` }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}

