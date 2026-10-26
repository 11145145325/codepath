export type RoadmapItem = {
  slug: string;
  title: string;
  stage: string;
  description: string;
  progress: string;
  objectives: string[];
  topics: string[];
};

export const roadmaps: RoadmapItem[] = [
  {
    slug: 'c-language',
    title: 'C 语言入门',
    stage: '阶段一',
    description: '建立编程的基本语法、流程控制、函数和指针逻辑，打牢基础。',
    progress: '32%',
    objectives: ['掌握基本语法与程序结构', '理解数组、字符串与指针', '具备简单调试能力'],
    topics: ['基本语法', '数据类型', '条件分支', '循环', '函数', '数组与字符串', '指针', '调试'],
  },
  {
    slug: 'cpp-algorithm',
    title: 'C++ 与基础算法',
    stage: '阶段二',
    description: '过渡到 C++ 语法、STL 容器与算法思维，提升程序表达与效率。',
    progress: '24%',
    objectives: ['掌握引用、重载与模板基础', '熟悉 STL 常用容器', '建立时间复杂度意识'],
    topics: ['C++ 基础语法', '引用', '函数重载', 'STL', '排序', '二分查找', '递归', '模拟'],
  },
  {
    slug: 'data-structure',
    title: '数据结构',
    stage: '阶段三',
    description: '学习核心数据结构与空间换时间方法，提升算法问题建模能力。',
    progress: '18%',
    objectives: ['熟悉链表、栈和队列', '理解树与图的表示方法', '掌握哈希和并查集'],
    topics: ['链表', '栈和队列', '哈希表', '树', '堆', '二叉搜索树', '图', '并查集'],
  },
];

export type ResourceItem = {
  slug: string;
  title: string;
  description: string;
  url: string;
  type: string;
  level: string;
  language: string;
  source: string;
  isPaid: boolean;
  tags: string[];
  status: string;
  verifiedAt: string;
};

export const resources: ResourceItem[] = [
  {
    slug: 'cpp-reference',
    title: 'C++ Reference',
    description: '官方 C++ 语言与标准库参考资料，适合查阅语法、容器与对象模型。',
    url: 'https://en.cppreference.com/w/',
    type: '官方文档',
    level: '入门到进阶',
    language: '英文',
    source: 'cppreference',
    isPaid: false,
    tags: ['C++', '语言', 'STL'],
    status: '已核验',
    verifiedAt: '2026-10-26',
  },
  {
    slug: 'leetcode',
    title: 'LeetCode',
    description: '面向算法训练的题库与题解，从基础题到高难度题逐步提升。',
    url: 'https://leetcode.com/',
    type: '编程练习平台',
    level: '中等到进阶',
    language: '中文/英文',
    source: 'LeetCode',
    isPaid: false,
    tags: ['算法', '面试', '题库'],
    status: '需定期核验',
    verifiedAt: '2026-10-26',
  },
  {
    slug: 'cs61b',
    title: 'CS61B 数据结构课程',
    description: '经典数据结构课程，适合系统建立树、图和算法设计理解。',
    url: 'https://sp18.datastructur.es/',
    type: '公开课程',
    level: '中等',
    language: '英文',
    source: 'UC Berkeley',
    isPaid: false,
    tags: ['数据结构', '算法', '公开课'],
    status: '待核验',
    verifiedAt: '2026-10-26',
  },
];

