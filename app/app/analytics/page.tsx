"use client";

import { useEffect, useState } from 'react';
import { safeReadStorage, safeWriteStorage, seedProblems, storageKeys, type Problem } from '@/lib/content';

export default function AlgorithmsPage() {
  const [problems, setProblems] = useState<Problem[]>(seedProblems);

  useEffect(() => {
    setProblems(safeReadStorage(storageKeys.problems, seedProblems));
  }, []);

  useEffect(() => {
    safeWriteStorage(storageKeys.problems, problems);
  }, [problems]);

  const toggleFavorite = (id: string) => {
    setProblems((current) => current.map((problem) => (problem.id === id ? { ...problem, favorite: !problem.favorite } : problem)));
  };

  const updateStatus = (id: string, status: Problem['status']) => {
    setProblems((current) => current.map((problem) => (problem.id === id ? { ...problem, status, updatedAt: new Date().toISOString() } : problem)));
  };

  return (
    <main className="container mx-auto max-w-[1200px] px-6 py-10">
      <div className="mb-6">
        <div className="inline-flex items-center rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs font-medium text-slate-700">算法训练</div>
        <h1 className="mt-3 text-3xl font-bold text-slate-900">题目管理</h1>
      </div>

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <table className="min-w-full divide-y divide-slate-200 text-left">
          <thead className="bg-slate-50 text-sm text-slate-600">
            <tr>
              <th className="px-6 py-4 font-medium">题目</th>
              <th className="px-6 py-4 font-medium">分类</th>
              <th className="px-6 py-4 font-medium">难度</th>
              <th className="px-6 py-4 font-medium">状态</th>
              <th className="px-6 py-4 font-medium">收藏</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 bg-white text-sm text-slate-700">
            {problems.map((problem) => (
              <tr key={problem.id}>
                <td className="px-6 py-4">
                  <div className="font-medium text-slate-900">{problem.title}</div>
                  <div className="mt-1 text-xs text-slate-500">{problem.notes}</div>
                </td>
                <td className="px-6 py-4">{problem.category}</td>
                <td className="px-6 py-4">
                  <span className={`rounded-full px-2.5 py-1 text-xs ${problem.difficulty === 'easy' ? 'bg-emerald-100 text-emerald-700' : problem.difficulty === 'medium' ? 'bg-amber-100 text-amber-700' : 'bg-red-100 text-red-700'}`}>
                    {problem.difficulty}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <select value={problem.status} onChange={(e) => updateStatus(problem.id, e.target.value as Problem['status'])} className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs outline-none focus:border-blue-400">
                    <option value="not_started">未开始</option>
                    <option value="in_progress">做题中</option>
                    <option value="completed">已完成</option>
                    <option value="review">待复习</option>
                  </select>
                </td>
                <td className="px-6 py-4">
                  <button type="button" onClick={() => toggleFavorite(problem.id)} className={`rounded-full px-2.5 py-1 text-xs font-medium ${problem.favorite ? 'bg-yellow-100 text-yellow-700' : 'bg-slate-100 text-slate-600'}`}>
                    {problem.favorite ? '已收藏' : '收藏'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}

