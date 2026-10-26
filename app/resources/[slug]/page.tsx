import Link from 'next/link';
import { resources } from '@/lib/content';

export default function ResourcesPage() {
  return (
    <main className="container-shell py-12">
      <div className="mb-10">
        <div className="badge">精选资源</div>
        <h1 className="mt-4 text-4xl font-bold text-slate-900">学习资源库</h1>
        <p className="mt-3 max-w-2xl text-slate-600">
          优先收录官方文档、可靠公开课程和规范化资料，帮助你建立高质量学习入口。
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {resources.map((item) => (
          <a key={item.slug} href={item.url} target="_blank" rel="noreferrer" className="card block p-6 transition hover:-translate-y-1 hover:shadow-xl">
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span>{item.type}</span>
              <span>{item.level}</span>
            </div>
            <h2 className="mt-4 text-xl font-semibold text-slate-900">{item.title}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-blue-50 px-2.5 py-1 text-xs text-blue-700">
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-5 text-sm font-medium text-blue-600">访问资源 →</div>
          </a>
        ))}
      </div>
    </main>
  );
}

