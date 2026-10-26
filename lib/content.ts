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
input,
select,
textarea {
  font: inherit;
}

.container {
  width: min(1200px, calc(100vw - 2rem));
  margin-inline: auto;
}

