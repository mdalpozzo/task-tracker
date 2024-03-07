import styles from "./TaskBoardScreen.module.css"
import { TaskBoard } from "./components/TaskBoard/TaskBoard"
import { ColumnDefinitions, TaskBoardItems } from "./const"

export const TaskBoardScreen = () => {
  // todo keep tasks in redux/remote server.  separate lists for each column so we don't have to filter them in the jsx

  // todo put in useCallback?
  const onTaskMove = (taskId: string, columnId: string) => {
    console.log("Task moved", taskId, columnId)
  }

  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <h1 className={styles.header}>Task Board</h1>

        <TaskBoard
          onTaskMove={onTaskMove}
          columns={ColumnDefinitions}
          tasks={TaskBoardItems}
        />
      </div>
    </div>
  )
}
