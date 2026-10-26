import { ArrowRight, ChevronDown, Code2, FileText, Folder, Globe, ListFilter, Menu, Plus, Search, ShieldCheck, Strip, SunMedium, Trash2 } from 'lucide-react';

const files = [
  { name: '.eslintrc.json', label: '应用', note: 'B阶段数据：基础应用、着陆页、认证页面、主题 pa...', updated: '15分钟前', type: 'file', selected: true },
  { name: 'README.md', label: '自由', note: 'B阶段数据：基础应用、着陆页、认证页面、主题 pa...', updated: '15分钟前', type: 'file' },
  { name: 'app', label: '应用', note: 'B阶段数据：基础应用、着陆页、认证页面、主题 pa...', updated: '15分钟前', type: 'folder' },
  { name: 'components', label: '组件', note: 'B阶段数据：基础应用、着陆页、认证页面、主题 pa...', updated: '15分钟前', type: 'folder' },
  { name: 'lib', label: '库', note: 'B阶段数据：基础应用、着陆页、认证页面、主题 pa...', updated: '15分钟前', type: 'folder' },
  { name: 'next.config.mjs', label: '配置', note: 'B阶段数据：基础应用、着陆页、认证页面、主题 pa...', updated: '15分钟前', type: 'file' },
  { name: 'package.json', label: '配置', note: 'B阶段数据：基础应用、着陆页、认证页面、主题 pa...', updated: '15分钟前', type: 'file' },
  { name: 'postcss.config.js', label: '配置', note: 'B阶段数据：基础应用、着陆页、认证页面、主题 pa...', updated: '15分钟前', type: 'file' },
  { name: 'tailwind.config.ts', label: '配置', note: 'B阶段数据：基础应用、着陆页、认证页面、主题 pa...', updated: '15分钟前', type: 'file' },
  { name: 'tsconfig.json', label: '配置', note: 'B阶段数据：基础应用、着陆页、认证页面、主题 pa...', updated: '15分钟前', type: 'file' },
];

function FileIcon({ type }: { type: 'file' | 'folder' }) {
  if (type === 'folder') {
    return <Folder className="h-5 w-5 text-sky-500" />;
  }
  return <FileText className="h-5 w-5 text-slate-500" />;
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#f3f5f7] text-slate-800">
      <header className="border-b border-slate-200 bg-[#f7f7f7]">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#dfeefc] text-xl text-sky-700 shadow-inner">
              <Code2 className="h-5 w-5" />
            </div>
            <div className="text-2xl font-bold tracking-tight text-slate-800">代码路径</div>
            <div className="ml-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-sm font-medium text-slate-600 shadow-sm">
              公开
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:border-slate-300">
              <ShieldCheck className="h-4 w-4" />
              删除
            </button>
            <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:border-slate-300">
              <Globe className="h-4 w-4" />
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-[1600px] px-5 py-6">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <div className="flex flex-wrap items-center gap-3">
            <button className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700">
              主要角色
              <ChevronDown className="h-4 w-4" />
            </button>
            <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-600">
              <ListFilter className="h-4 w-4" />
              1 分支
            </div>
            <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-600">
              <Menu className="h-4 w-4" />
              0 标签
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="flex w-[220px] items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-500">
              <Search className="h-4 w-4" />
              <input className="w-full bg-transparent outline-none placeholder:text-slate-400" placeholder="前往扫描" />
            </div>
            <button className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm font-medium text-slate-700 shadow-sm">
              <Plus className="h-4 w-4" />
              添加文件
            </button>
            <button className="flex items-center gap-2 rounded-xl bg-[#49a860] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#3b944e]">
              <Code2 className="h-4 w-4" />
              代码
            </button>
          </div>
        </div>

        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full text-left">
            <thead className="bg-slate-50 text-sm text-slate-600">
              <tr>
                <th className="px-4 py-4 font-medium">文件</th>
                <th className="px-4 py-4 font-medium">说明</th>
                <th className="px-4 py-4 font-medium text-right">更新时间</th>
              </tr>
            </thead>
            <tbody className="text-[15px] text-slate-700">
              {files.map((file) => (
                <tr key={file.name} className={file.selected ? 'bg-sky-50/80' : 'bg-white'}>
                  <td className="border-t border-slate-200 px-4 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-7 w-7 items-center justify-center rounded-md bg-slate-100">
                        <FileIcon type={file.type as 'file' | 'folder'} />
                      </div>
                      <div className="font-medium text-slate-800">{file.name}</div>
                    </div>
                  </td>
                  <td className="border-t border-slate-200 px-4 py-4 text-slate-600">
                    {file.note}
                  </td>
                  <td className="border-t border-slate-200 px-4 py-4 text-right text-slate-500">
                    {file.updated}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <button className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
            <FileText className="h-4 w-4" />
            阅读
          </button>

          <button className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:border-slate-300">
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      </main>
    </div>
  );
}

