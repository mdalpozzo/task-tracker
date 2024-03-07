import styles from "./TaskBoard.module.css"

export const TaskBoard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <h1 className={styles.header}>Task Board</h1>
      </div>
    </div>
  )
}
