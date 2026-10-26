const notes = [
  { title: '链表的常见解题思路', tags: ['数据结构', '链表'], updated: '2 小时前' },
  { title: 'BFS 与 DFS 的区别', tags: ['算法', '图论'], updated: '昨天' },
  { title: 'C++ 容器使用小结', tags: ['C++', 'STL'], updated: '3 天前' },
];

export default function NotesPage() {
  return (
    <main className="container-shell py-10">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <div className="badge">个人笔记</div>
          <h1 className="mt-3 text-3xl font-bold text-slate-900">笔记本</h1>
        </div>
        <button className="rounded-full bg-blue-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-blue-700">
          新建笔记
        </button>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {notes.map((note) => (
          <article key={note.title} className="card p-5">
            <h2 className="text-xl font-semibold text-slate-900">{note.title}</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {note.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-slate-100 px-2.5 py-1 text-xs text-slate-600">
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-5 text-sm text-slate-500">更新时间：{note.updated}</div>
          </article>
        ))}
      </div>
    </main>
  );
}

