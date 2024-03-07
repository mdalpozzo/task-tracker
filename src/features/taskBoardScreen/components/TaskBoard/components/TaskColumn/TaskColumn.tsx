import { useDrop } from "react-dnd"
import type { TaskBoardTask } from "../../types/TaskBoardTask"
import { TaskCard } from "../TaskCard/TaskCard"
import styles from "./TaskColumn.module.css"
import { DragItemTypes } from "../../const"
import type { DragItem } from "../../types/DragItem"
import type { DropResult } from "../../types/DropResult"

interface TaskColumnProps {
  title: string
  tasks?: TaskBoardTask[]
  onTaskMove: (taskId: string, columnId: string) => void
}

const constArray: TaskBoardTask[] = []

export const TaskColumn = ({
  title,
  tasks = constArray,
  onTaskMove,
}: TaskColumnProps) => {
  const [{ dragHover }, dropRef] = useDrop<
    DragItem,
    DropResult,
    { dragHover: boolean }
  >(() => ({
    accept: DragItemTypes.TASK_CARD,
    collect: monitor => ({
      dragHover: monitor.isOver(),
    }),
    drop: item => ({ columnId: title }),
  }))

  return (
    <div
      ref={dropRef}
      className={`${styles.taskColumn} ${dragHover ? styles["taskColumn--dragHover"] : ""}`}
    >
      <h2>{title}</h2>

      <ul className={styles.taskColumn__list}>
        {tasks.map(task => {
          return (
            <li key={task.id}>
              <TaskCard
                id={task.id}
                onTaskMove={onTaskMove}
                title={task.title}
                description={task.description}
              />
            </li>
          )
        })}
      </ul>
    </div>
  )
}
