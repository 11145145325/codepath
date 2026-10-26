import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'CodePath',
  description: '计算机专业学生综合学习平台',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>
        <div className="min-h-screen bg-slate-50 text-slate-900">{children}</div>
      </body>
    </html>
  );
}
