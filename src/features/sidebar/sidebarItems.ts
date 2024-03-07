import { Counter } from "../counter/Counter"
import { Quotes } from "../quotes/Quotes"
import { TaskBoard } from "../taskBoard/TaskBoard"

export interface NavItem {
  title: string
  Component: React.ComponentType
}

export type NavItems = Map<string, NavItem>

export const items: NavItems = new Map([
  ["TaskBoard", { title: "TaskBoard", Component: TaskBoard }],
  ["Counter", { title: "Counter", Component: Counter }],
  ["Quotes", { title: "Quotes", Component: Quotes }],
])
