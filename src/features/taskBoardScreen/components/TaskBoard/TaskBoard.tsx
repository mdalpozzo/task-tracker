import { TaskColumn } from "./components/TaskColumn/TaskColumn"
import type { TaskBoardColumn } from "./types/TaskBoardColumn"
import type { TaskBoardTask } from "./types/TaskBoardTask"
import styles from "./TaskBoard.module.css"
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"

interface TaskBoardProps {
  columns: TaskBoardColumn[]
  tasks: Map<string, TaskBoardTask[]>
  onTaskMove: (taskId: string, columnId: string) => void
}

export const TaskBoard = ({ columns, tasks, onTaskMove }: TaskBoardProps) => {
  const gridTemplateColumns = `repeat(${columns.length}, 1fr)`

  return (
    <DndProvider backend={HTML5Backend}>
      <div className={styles.taskBoard} style={{ gridTemplateColumns }}>
        {columns.map(column => {
          return (
            <div key={column.id} className={styles.taskBoard__column}>
              <TaskColumn
                title={column.title}
                onTaskMove={onTaskMove}
                tasks={tasks.get(column.id)}
              />
            </div>
          )
        })}
      </div>
    </DndProvider>
  )
}
