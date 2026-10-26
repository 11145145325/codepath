"use client";

import { useEffect, useState } from 'react';
import { safeReadStorage, safeWriteStorage, seedTasks, storageKeys, type Task, type TaskPriority, type TaskStatus } from '@/lib/content';

const defaultForm = {
  title: '',
  description: '',
  priority: 'medium' as TaskPriority,
  status: 'todo' as TaskStatus,
  dueDate: '',
  estimatedMinutes: 30,
};

export default function TasksPage() {
  const [tasks, setTasks] = useState<Task[]>(seedTasks);
  const [form, setForm] = useState(defaultForm);

  useEffect(() => {
    setTasks(safeReadStorage(storageKeys.tasks, seedTasks));
  }, []);

  useEffect(() => {
    safeWriteStorage(storageKeys.tasks, tasks);
  }, [tasks]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!form.title.trim()) return;

    const nextTask: Task = {
      id: `task-${Date.now()}`,
      title: form.title.trim(),
      description: form.description.trim(),
      priority: form.priority,
      status: form.status,
      dueDate: form.dueDate || undefined,
      estimatedMinutes: form.estimatedMinutes,
      createdAt: new Date().toISOString(),
    };

    setTasks((current) => [nextTask, ...current]);
    setForm(defaultForm);
  };

  const handleDelete = (id: string) => setTasks((current) => current.filter((task) => task.id !== id));

  const handleStatusChange = (id: string, status: TaskStatus) => {
    setTasks((current) => current.map((task) => (task.id === id ? { ...task, status } : task)));
  };

  return (
    <main className="container mx-auto max-w-[1200px] px-6 py-10">
      <div className="mb-6">
        <div className="inline-flex items-center rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs font-medium text-slate-700">每日任务</div>
        <h1 className="mt-3 text-3xl font-bold text-slate-900">任务管理</h1>
      </div>

      <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
        <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">新增任务</h2>
          <div className="mt-5 space-y-4">
            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">任务标题</label>
              <input value={form.title} onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))} className="w-full rounded-xl border border-slate-200 px-3 py-2.5 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100" placeholder="例如：复习树的遍历" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">描述</label>
              <textarea value={form.description} onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))} className="min-h-[90px] w-full rounded-xl border border-slate-200 px-3 py-2.5 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100" placeholder="任务说明" />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">优先级</label>
                <select value={form.priority} onChange={(e) => setForm((f) => ({ ...f, priority: e.target.value as TaskPriority }))} className="w-full rounded-xl border border-slate-200 px-3 py-2.5 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100">
                  <option value="low">低</option>
                  <option value="medium">中</option>
                  <option value="high">高</option>
                </select>
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">状态</label>
                <select value={form.status} onChange={(e) => setForm((f) => ({ ...f, status: e.target.value as TaskStatus }))} className="w-full rounded-xl border border-slate-200 px-3 py-2.5 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100">
                  <option value="todo">待办</option>
                  <option value="in_progress">进行中</option>
                  <option value="done">已完成</option>
                </select>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">日期</label>
                <input type="date" value={form.dueDate} onChange={(e) => setForm((f) => ({ ...f, dueDate: e.target.value }))} className="w-full rounded-xl border border-slate-200 px-3 py-2.5 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100" />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">预计时长（分钟）</label>
                <input type="number" min={10} step={10} value={form.estimatedMinutes} onChange={(e) => setForm((f) => ({ ...f, estimatedMinutes: Number(e.target.value) || 30 }))} className="w-full rounded-xl border border-slate-200 px-3 py-2.5 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100" />
              </div>
            </div>
            <button type="submit" className="w-full rounded-xl bg-blue-600 px-4 py-3 font-medium text-white hover:bg-blue-700">保存任务</button>
          </div>
        </form>

        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <table className="min-w-full divide-y divide-slate-200 text-left">
            <thead className="bg-slate-50 text-sm text-slate-600">
              <tr>
                <th className="px-6 py-4 font-medium">任务</th>
                <th className="px-6 py-4 font-medium">优先级</th>
                <th className="px-6 py-4 font-medium">状态</th>
                <th className="px-6 py-4 font-medium">预计</th>
                <th className="px-6 py-4 font-medium">操作</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white text-sm text-slate-700">
              {tasks.map((task) => (
                <tr key={task.id}>
                  <td className="px-6 py-4">
                    <div className="font-medium text-slate-800">{task.title}</div>
                    <div className="mt-1 text-xs text-slate-500">{task.dueDate ?? '未设定日期'}</div>
                  </td>
                  <td className="px-6 py-4"><span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs text-slate-600">{task.priority}</span></td>
                  <td className="px-6 py-4">
                    <select value={task.status} onChange={(e) => handleStatusChange(task.id, e.target.value as TaskStatus)} className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs outline-none focus:border-blue-400">
                      <option value="todo">待办</option>
                      <option value="in_progress">进行中</option>
                      <option value="done">已完成</option>
                    </select>
                  </td>
                  <td className="px-6 py-4">{task.estimatedMinutes} 分钟</td>
                  <td className="px-6 py-4"><button type="button" onClick={() => handleDelete(task.id)} className="text-red-600 hover:text-red-700">删除</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}

