import Link from 'next/link';

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 p-6">
      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="mb-6 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-lg font-bold text-white">
            C
          </div>
          <h1 className="mt-4 text-2xl font-bold text-slate-900">欢迎回来</h1>
          <p className="mt-2 text-sm text-slate-500">继续你的学习旅程</p>
        </div>

        <form className="space-y-4">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">邮箱</label>
            <input className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100" type="email" placeholder="you@example.com" />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">密码</label>
            <input className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100" type="password" placeholder="请输入密码" />
          </div>
          <button type="submit" className="w-full rounded-xl bg-blue-600 px-4 py-3 font-medium text-white hover:bg-blue-700">
            登录
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-slate-600">
          还没有账号？ <Link href="/register" className="font-medium text-blue-600">立即注册</Link>
        </div>
      </div>
    </main>
  );
}

