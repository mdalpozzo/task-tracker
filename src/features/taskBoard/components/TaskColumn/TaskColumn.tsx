import type { Task } from "../../types"
import { TaskCard } from "../TaskCard/TaskCard"
import styles from "./TaskColumn.module.css"

interface TaskColumnProps {
  title: string
  tasks?: Task[]
}

const constArray: Task[] = []

export const TaskColumn = ({ title, tasks = constArray }: TaskColumnProps) => {
  return (
    <div>
      <h2>{title}</h2>

      <ul className={styles.taskColumn__list}>
        {tasks.map(task => {
          return (
            <li key={task.id}>
              <TaskCard title={task.title} description={task.description} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}
