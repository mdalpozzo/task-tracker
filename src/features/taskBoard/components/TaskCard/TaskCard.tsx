import styles from "./TaskCard.module.css"

interface TaskCardProps {
  title: string
  description: string
}

export const TaskCard = ({ title, description }: TaskCardProps) => {
  return (
    <div className={styles.taskCard}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}
