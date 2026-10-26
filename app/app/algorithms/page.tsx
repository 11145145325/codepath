"use client";

import { useEffect, useMemo, useState } from 'react';
import { safeReadStorage, safeWriteStorage, seedNotes, storageKeys, type Note } from '@/lib/content';

const defaultForm = { title: '', content: '', tags: '' };

export default function NotesPage() {
  const [notes, setNotes] = useState<Note[]>(seedNotes);
  const [form, setForm] = useState(defaultForm);
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    setNotes(safeReadStorage(storageKeys.notes, seedNotes));
  }, []);

  useEffect(() => {
    safeWriteStorage(storageKeys.notes, notes);
  }, [notes]);

  const activeNote = useMemo(() => notes.find((item) => item.id === activeId) ?? null, [notes, activeId]);

  const handleSave = (event: React.FormEvent) => {
    event.preventDefault();
    if (!form.title.trim()) return;

    const nextNote: Note = {
      id: activeId ?? `note-${Date.now()}`,
      title: form.title.trim(),
      content: form.content.trim(),
      tags: form.tags.split(/[,，\s]+/).filter(Boolean),
      isFavorite: activeNote?.isFavorite ?? false,
      updatedAt: new Date().toISOString(),
    };

    setNotes((current) => {
      const exists = current.some((note) => note.id === nextNote.id);
      return exists ? current.map((note) => (note.id === nextNote.id ? nextNote : note)) : [nextNote, ...current];
    });
    setForm(defaultForm);
    setActiveId(null);
  };

  const handleEdit = (note: Note) => {
    setActiveId(note.id);
    setForm({ title: note.title, content: note.content, tags: note.tags.join(', ') });
  };

  const handleDelete = (id: string) => setNotes((current) => current.filter((note) => note.id !== id));

  return (
    <main className="container mx-auto max-w-[1200px] px-6 py-10">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs font-medium text-slate-700">个人笔记</div>
          <h1 className="mt-3 text-3xl font-bold text-slate-900">笔记本</h1>
        </div>
        <button type="button" onClick={() => { setActiveId(null); setForm(defaultForm); }} className="rounded-full bg-blue-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-blue-700">新建笔记</button>
      </div>

      <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
        <form onSubmit={handleSave} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">{activeId ? '编辑笔记' : '新建笔记'}</h2>
          <div className="mt-5 space-y-4">
            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">标题</label>
              <input value={form.title} onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))} className="w-full rounded-xl border border-slate-200 px-3 py-2.5 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100" placeholder="笔记标题" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">标签</label>
              <input value={form.tags} onChange={(e) => setForm((f) => ({ ...f, tags: e.target.value }))} className="w-full rounded-xl border border-slate-200 px-3 py-2.5 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100" placeholder="算法, 图论" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">内容（Markdown）</label>
              <textarea value={form.content} onChange={(e) => setForm((f) => ({ ...f, content: e.target.value }))} className="min-h-[170px] w-full rounded-xl border border-slate-200 px-3 py-2.5 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100" placeholder="# 标题\n\n- 要点 1\n- 要点 2" />
            </div>
            <button type="submit" className="w-full rounded-xl bg-blue-600 px-4 py-3 font-medium text-white hover:bg-blue-700">保存笔记</button>
          </div>
        </form>

        <div className="space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">Markdown 预览</h3>
            <div className="mt-4 rounded-xl bg-slate-50 p-4 text-sm leading-7 text-slate-700">
              {activeNote ? (
                <div>
                  <h4 className="mb-2 text-lg font-semibold text-slate-900">{activeNote.title}</h4>
                  <div className="whitespace-pre-wrap">{activeNote.content}</div>
                </div>
              ) : <p>选择一条笔记查看预览。</p>}
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {notes.map((note) => (
              <article key={note.id} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex items-start justify-between gap-3">
                  <h2 className="text-lg font-semibold text-slate-900">{note.title}</h2>
                  <button type="button" onClick={() => setActiveId(note.id)} className="text-xs text-blue-600 hover:text-blue-700">预览</button>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {note.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-slate-100 px-2.5 py-1 text-xs text-slate-600">{tag}</span>
                  ))}
                </div>
                <div className="mt-4 flex items-center justify-between text-sm">
                  <span className="text-slate-500">{new Date(note.updatedAt).toLocaleDateString()}</span>
                  <div className="flex gap-3">
                    <button type="button" onClick={() => handleEdit(note)} className="text-blue-600 hover:text-blue-700">编辑</button>
                    <button type="button" onClick={() => handleDelete(note.id)} className="text-red-600 hover:text-red-700">删除</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

