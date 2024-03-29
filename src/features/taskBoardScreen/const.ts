import type { TaskBoardColumn } from "./components/TaskBoard/types/TaskBoardColumn"
import type { TaskBoardTask } from "./components/TaskBoard/types/TaskBoardTask"

export const ColumnDefinitions: TaskBoardColumn[] = [
  {
    id: "todo",
    title: "To Do",
  },
  {
    id: "inProgress",
    title: "In Progress",
  },
  {
    id: "done",
    title: "Done",
  },
]

export const TaskBoardItems = new Map<string, TaskBoardTask[]>([
  [
    "todo",
    [
      {
        id: "task1",
        title: "Task 1",
        description: "Do something",
      },
      {
        id: "task2",
        title: "Task 2",
        description: "Do something else",
      },
    ],
  ],
  [
    "inProgress",
    [
      {
        id: "task3",
        title: "Task 3",
        description: "Do something else",
      },
    ],
  ],
  [
    "done",
    [
      {
        id: "task4",
        title: "Task 4",
        description: "Do something else",
      },
    ],
  ],
])
