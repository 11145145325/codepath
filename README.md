export type TaskPriority = 'low' | 'medium' | 'high';
export type TaskStatus = 'todo' | 'in_progress' | 'done';

export type Task = {
  id: string;
  title: string;
  description?: string;
  priority: TaskPriority;
  status: TaskStatus;
  dueDate?: string;
  estimatedMinutes: number;
  actualMinutes?: number;
  createdAt: string;
};

export type Note = {
  id: string;
  title: string;
  content: string;
  tags: string[];
  isFavorite: boolean;
  updatedAt: string;
};

export type ProblemType = 'not_started' | 'in_progress' | 'completed' | 'review';

export type Problem = {
  id: string;
  title: string;
  difficulty: 'easy' | 'medium' | 'hard';
  category: string;
  notes: string;
  status: ProblemType;
  favorite: boolean;
  updatedAt: string;
};

export const storageKeys = {
  tasks: 'codepath.tasks',
  notes: 'codepath.notes',
  problems: 'codepath.problems',
};

export const seedTasks: Task[] = [
  {
    id: 'task-1',
    title: '复习链表与双指针',
    description: '重新梳理链表的指针移动方式和典型题型。',
    priority: 'high',
    status: 'todo',
    dueDate: new Date().toISOString().slice(0, 10),
    estimatedMinutes: 50,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'task-2',
    title: '完成 C++ STL 练习',
    description: '练习 vector、map 和 set 的使用例子。',
    priority: 'medium',
    status: 'done',
    dueDate: new Date().toISOString().slice(0, 10),
    estimatedMinutes: 40,
    actualMinutes: 45,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'task-3',
    title: '阅读图论基础知识',
    description: '梳理 DFS、BFS 与图的表示方式。',
    priority: 'medium',
    status: 'in_progress',
    dueDate: new Date(Date.now() + 86400000).toISOString().slice(0, 10),
    estimatedMinutes: 60,
    createdAt: new Date().toISOString(),
  },
];

export const seedNotes: Note[] = [
  {
    id: 'note-1',
    title: '链表的常见解题思路',
    content: '# 链表\n\n- 需要注意头节点空值\n- 快慢指针常见于环判断\n- 虚拟头结点可简化边界处理',
    tags: ['数据结构', '链表'],
    isFavorite: true,
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'note-2',
    title: 'BFS 与 DFS 对比',
    content: '## BFS\n适合最短路与层次遍历；\n\n## DFS\n适合枚举、回溯与连通判断。',
    tags: ['算法', '图论'],
    isFavorite: false,
    updatedAt: new Date().toISOString(),
  },
];

export const seedProblems: Problem[] = [
  {
    id: 'problem-1',
    title: '两数之和',
    difficulty: 'easy',
    category: '数组',
    notes: '利用哈希表存储索引。',
    status: 'completed',
    favorite: true,
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'problem-2',
    title: '二叉树层序遍历',
    difficulty: 'medium',
    category: '树',
    notes: 'BFS 中使用队列实现。',
    status: 'in_progress',
    favorite: false,
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'problem-3',
    title: '课程表',
    difficulty: 'hard',
    category: '图论',
    notes: '拓扑排序思想。',
    status: 'review',
    favorite: true,
    updatedAt: new Date().toISOString(),
  },
];

export function safeReadStorage<T>(key: string, fallback: T): T {
  if (typeof window === 'undefined') return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

export function safeWriteStorage<T>(key: string, value: T) {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(key, JSON.stringify(value));
}

