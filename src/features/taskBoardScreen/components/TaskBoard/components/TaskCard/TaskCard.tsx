import { useDrag } from "react-dnd"
import styles from "./TaskCard.module.css"
import { DragItemTypes } from "../../const"
import type { DropResult } from "../../types/DropResult"
import type { DragItem } from "../../types/DragItem"

interface TaskCardProps {
  id: string
  title: string
  description: string
  onTaskMove: (taskId: string, columnId: string) => void
}

export const TaskCard = ({
  id,
  title,
  description,
  onTaskMove,
}: TaskCardProps) => {
  const [{ opacity }, dragRef] = useDrag<
    DragItem,
    DropResult,
    { opacity: number }
  >(() => ({
    type: DragItemTypes.TASK_CARD,
    item: { id, title, description },
    collect: monitor => ({
      opacity: monitor.isDragging() ? 0.5 : 1,
    }),
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult()

      if (dropResult) {
        onTaskMove(item.title, dropResult.columnId)
      } else {
        console.log("Task dropped outside a droppable area")
      }
    },
  }))

  return (
    <div ref={dragRef} className={styles.taskCard} style={{ opacity }}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}
