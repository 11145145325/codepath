import Link from 'next/link';
import { roadmaps } from '@/lib/content';

export default function RoadmapsPage() {
  return (
    <main className="container-shell py-12">
      <div className="mb-10">
        <div className="badge">学习路线</div>
        <h1 className="mt-4 text-4xl font-bold text-slate-900">完整学习路线</h1>
        <p className="mt-3 max-w-2xl text-slate-600">
          从编程基础到工程能力，建立清晰的学习顺序与阶段目标，减少盲目刷题和碎片化学习。
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {roadmaps.map((item) => (
          <Link href={`/roadmaps/${item.slug}`} key={item.slug} className="card block p-6 transition hover:-translate-y-1 hover:shadow-xl">
            <div className="flex items-center justify-between">
              <span className="badge">{item.stage}</span>
              <span className="text-xs font-medium text-blue-600">{item.progress}</span>
            </div>
            <h2 className="mt-5 text-2xl font-semibold text-slate-900">{item.title}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {item.topics.map((topic) => (
                <span key={topic} className="rounded-full bg-slate-100 px-2.5 py-1 text-xs text-slate-600">
                  {topic}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}

