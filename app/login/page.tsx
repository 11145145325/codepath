import Link from 'next/link';
import { ArrowRight, BookOpenCheck, Code2, Gauge, Sparkles } from 'lucide-react';
import { roadmaps, resources } from '@/lib/content';

const featureList = [
  {
    icon: BookOpenCheck,
    title: '系统学习路线',
    description: '按知识体系建立从入门到工程实践的连续学习路径。',
  },
  {
    icon: Code2,
    title: '算法训练与题目管理',
    description: '整理题目、记录状态和错题，建立复习闭环。',
  },
  {
    icon: Gauge,
    title: '每日学习数据',
    description: '统计任务完成、学习时长和进度变化，保持持续推进。',
  },
];

export default function HomePage() {
  return (
    <main>
      <header className="border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="container-shell flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-lg font-bold text-white">
              C
            </div>
            <div>
              <div className="text-lg font-bold text-slate-900">CodePath</div>
              <div className="text-xs text-slate-500">学习进阶平台</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
            <Link href="/roadmaps" className="link-plain">路线</Link>
            <Link href="/resources" className="link-plain">资源</Link>
            <Link href="/algorithms" className="link-plain">算法</Link>
            <Link href="/about" className="link-plain">关于</Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/login" className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:border-blue-200 hover:text-blue-600">
              登录
            </Link>
            <Link href="/register" className="rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700">
              开始学习
            </Link>
          </div>
        </div>
      </header>

      <section className="container-shell grid gap-10 py-16 md:grid-cols-[1.2fr_0.8fr] md:items-center">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
            <Sparkles className="h-4 w-4" />
            面向计算机专业学生的学习闭环
          </div>
          <h1 className="max-w-xl text-4xl font-black tracking-tight text-slate-900 md:text-6xl">
            从入门到工程实践，建立真正可持续的学习体系。
          </h1>
          <p className="mt-6 max-w-xl text-lg text-slate-600">
            CodePath 帮助你从 C 语言、数据结构、算法训练到工程实践与作品集准备，形成完整、可追踪、可复盘的��习路径。
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link href="/roadmaps" className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-700">
              查看学习路线
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/resources" className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 hover:border-slate-300">
              精选资源
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-600">
            <div>
              <div className="text-3xl font-bold text-slate-900">8</div>
              <div>核心学习阶段</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-900">120+</div>
              <div>知识节点</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-900">50+</div>
              <div>精选资源</div>
            </div>
          </div>
        </div>

        <div className="card p-6">
          <div className="rounded-2xl bg-slate-900 p-5 text-white">
            <div className="text-sm text-slate-300">当前学习目标</div>
            <div className="mt-4 text-3xl font-bold">数据结构与算法进阶</div>
            <div className="mt-6 space-y-4">
              <div>
                <div className="mb-2 flex justify-between text-sm text-slate-300">
                  <span>路线完成度</span>
                  <span>64%</span>
                </div>
                <div className="h-2.5 overflow-hidden rounded-full bg-slate-700">
                  <div className="h-full w-[64%] rounded-full bg-blue-500" />
                </div>
              </div>
              <div>
                <div className="mb-2 flex justify-between text-sm text-slate-300">
                  <span>今日任务</span>
                  <span>3 / 5</span>
                </div>
                <div className="h-2.5 overflow-hidden rounded-full bg-slate-700">
                  <div className="h-full w-[60%] rounded-full bg-emerald-500" />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <div className="text-xs text-slate-500">任务</div>
              <div className="mt-1 text-xl font-bold">8</div>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <div className="text-xs text-slate-500">笔记</div>
              <div className="mt-1 text-xl font-bold">14</div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container-shell">
          <div className="mb-8 max-w-2xl">
            <div className="badge">产品能力</div>
            <h2 className="section-title mt-4">学习闭环，不只是内容浏览</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {featureList.map(({ icon: Icon, title, description }) => (
              <div key={title} className="card p-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-shell py-16">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <div className="badge">学习路线</div>
            <h2 className="section-title mt-4">从基础到工程实践</h2>
          </div>
          <Link href="/roadmaps" className="text-sm font-medium text-blue-600 hover:text-blue-700">
            查看全部路线 →
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {roadmaps.map((item) => (
            <Link href={`/roadmaps/${item.slug}`} key={item.slug} className="card block p-6 transition hover:-translate-y-1 hover:shadow-xl">
              <div className="flex items-center justify-between">
                <span className="badge">{item.stage}</span>
                <span className="text-xs font-medium text-blue-600">{item.progress}</span>
              </div>
              <h3 className="mt-5 text-xl font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
              <ul className="mt-5 space-y-2 text-sm text-slate-600">
                {item.topics.map((topic) => (
                  <li key={topic}>• {topic}</li>
                ))}
              </ul>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-slate-900 py-16 text-white">
        <div className="container-shell">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <div className="rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-sm text-slate-300">
                精选资源
              </div>
              <h2 className="mt-4 text-3xl font-bold">高质量学习入口</h2>
            </div>
            <Link href="/resources" className="text-sm font-medium text-blue-300 hover:text-white">
              更多资源 →
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {resources.slice(0, 3).map((item) => (
              <a key={item.slug} href={item.url} target="_blank" rel="noreferrer" className="rounded-2xl border border-slate-700 bg-slate-800 p-6 transition hover:border-slate-500 hover:bg-slate-800/90">
                <div className="mb-3 flex items-center justify-between text-xs text-slate-300">
                  <span>{item.type}</span>
                  <span>{item.level}</span>
                </div>
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{item.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

