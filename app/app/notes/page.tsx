const tasks = [
  { title: '复习链表与双指针', priority: '高', status: '待完成', estimated: 45 },
  { title: '完成 BFS 题目集', priority: '中', status: '进行中', estimated: 60 },
  { title: '整理栈和队列笔记', priority: '低', status: '待完成', estimated: 30 },
];

export default function TasksPage() {
  return (
    <main className="container-shell py-10">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <div className="badge">每日任务</div>
          <h1 className="mt-3 text-3xl font-bold text-slate-900">任务管理</h1>
        </div>
        <button className="rounded-full bg-blue-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-blue-700">
          新增任务
        </button>
      </div>

      <div className="card overflow-hidden">
        <table className="min-w-full divide-y divide-slate-200 text-left">
          <thead className="bg-slate-50 text-sm text-slate-600">
            <tr>
              <th className="px-6 py-4 font-medium">任务</th>
              <th className="px-6 py-4 font-medium">优先级</th>
              <th className="px-6 py-4 font-medium">状态</th>
              <th className="px-6 py-4 font-medium">预计</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 bg-white text-sm text-slate-700">
            {tasks.map((task) => (
              <tr key={task.title}>
                <td className="px-6 py-4 font-medium">{task.title}</td>
                <td className="px-6 py-4">
                  <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs text-slate-600">{task.priority}</span>
                </td>
                <td className="px-6 py-4">
                  <span className={`rounded-full px-2.5 py-1 text-xs ${task.status === '进行中' ? 'bg-blue-100 text-blue-700' : 'bg-amber-100 text-amber-700'}`}>
                    {task.status}
                  </span>
                </td>
                <td className="px-6 py-4">{task.estimated} 分钟</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}

