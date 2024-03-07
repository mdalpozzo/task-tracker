import { Counter } from "../counter/Counter"
import { Quotes } from "../quotes/Quotes"
import { TaskBoardScreen } from "../taskBoardScreen/TaskBoardScreen"

export interface NavItem {
  title: string
  Component: React.ComponentType
}

export type NavItems = Map<string, NavItem>

export const items: NavItems = new Map([
  ["TaskBoard", { title: "TaskBoard", Component: TaskBoardScreen }],
  ["Counter", { title: "Counter", Component: Counter }],
  ["Quotes", { title: "Quotes", Component: Quotes }],
])
