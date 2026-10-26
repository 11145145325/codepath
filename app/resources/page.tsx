import Link from 'next/link';
import { notFound } from 'next/navigation';
import { roadmaps } from '@/lib/content';

export default function RoadmapDetailPage({ params }: { params: { slug: string } }) {
  const roadmap = roadmaps.find((item) => item.slug === params.slug);

  if (!roadmap) {
    notFound();
  }

  return (
    <main className="container-shell py-12">
      <Link href="/roadmaps" className="text-sm font-medium text-blue-600 hover:text-blue-700">
        ← 返回路线列表
      </Link>

      <div className="mt-6 card p-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="badge">{roadmap.stage}</div>
            <h1 className="mt-4 text-4xl font-bold text-slate-900">{roadmap.title}</h1>
          </div>
          <div className="rounded-xl bg-blue-50 px-4 py-3 text-right">
            <div className="text-xs text-slate-500">完成度</div>
            <div className="text-2xl font-bold text-blue-700">{roadmap.progress}</div>
          </div>
        </div>

        <p className="mt-5 max-w-3xl text-lg text-slate-600">{roadmap.description}</p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-xl font-semibold text-slate-900">学习目标</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              {roadmap.objectives.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-xl font-semibold text-slate-900">推荐知识点</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              {roadmap.topics.map((topic) => (
                <li key={topic}>• {topic}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}

