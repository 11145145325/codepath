import Link from 'next/link';
import { notFound } from 'next/navigation';
import { resources } from '@/lib/content';

export default function ResourceDetailPage({ params }: { params: { slug: string } }) {
  const resource = resources.find((item) => item.slug === params.slug);

  if (!resource) {
    notFound();
  }

  return (
    <main className="container-shell py-12">
      <Link href="/resources" className="text-sm font-medium text-blue-600 hover:text-blue-700">
        ← 返回资源库
      </Link>

      <div className="mt-6 card p-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <div className="badge">{resource.type}</div>
            <h1 className="mt-4 text-4xl font-bold text-slate-900">{resource.title}</h1>
          </div>
          <a
            href={resource.url}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-blue-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-700"
          >
            访问链接
          </a>
        </div>

        <p className="mt-5 max-w-3xl text-lg text-slate-600">{resource.description}</p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-xl font-semibold text-slate-900">资源信息</h3>
            <dl className="mt-4 space-y-3 text-sm text-slate-600">
              <div className="flex justify-between"><dt>来源</dt><dd>{resource.source}</dd></div>
              <div className="flex justify-between"><dt>难度</dt><dd>{resource.level}</dd></div>
              <div className="flex justify-between"><dt>语言</dt><dd>{resource.language}</dd></div>
              <div className="flex justify-between"><dt>收费</dt><dd>{resource.isPaid ? '需要' : '免费'}</dd></div>
            </dl>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-xl font-semibold text-slate-900">适用阶段</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {resource.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700">
                  {tag}
                </span>
              ))}
            </div>
            <p className="mt-5 text-sm leading-6 text-slate-600">
              资源状态：{resource.status}；最后核验：{resource.verifiedAt}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

