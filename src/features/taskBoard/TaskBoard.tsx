import styles from "./TaskBoard.module.css"
import { TaskColumn } from "./components/TaskColumn/TaskColumn"
import { ColumnDefinitions, TaskBoardItems } from "./const"

export const TaskBoard = () => {
  // todo keep tasks in redux/remote server.  separate lists for each column so we don't have to filter them in the jsx

  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <h1 className={styles.header}>Task Board</h1>

        <div className={styles.taskBoard}>
          {ColumnDefinitions.map(column => {
            return (
              <TaskColumn
                title={column.title}
                tasks={TaskBoardItems.get(column.id)}
              />
            )
          })}
        </div>
        {}
      </div>
    </div>
  )
}
