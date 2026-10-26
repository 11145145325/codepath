@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  color-scheme: light;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: "PingFang SC", "Microsoft YaHei", Arial, sans-serif;
  background: #f3f5f7;
}

* {
  box-sizing: border-box;
}

button,
input {
  font: inherit;
}

.card {
  @apply rounded-2xl border border-slate-200 bg-white shadow-sm;
}

.badge {
  @apply inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-700;
}

.section-title {
  @apply text-2xl font-bold tracking-tight text-slate-900 md:text-3xl;
}
