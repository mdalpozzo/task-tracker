import styles from "./Sidebar.module.css"
import type { NavItems } from "./sidebarItems"

interface SidebarProps {
  title: string
  items: NavItems
  onClickItem: (itemId: string) => void
  selectedItemId: string
}

export const Sidebar = ({
  title,
  items,
  onClickItem,
  selectedItemId,
}: SidebarProps) => {
  return (
    <div className={styles.sidebar}>
      <h1>{title}</h1>
      <ul>
        {Array.from(items).map(([key, value], index) => (
          <li key={index}>
            <button
              onClick={() => onClickItem(value.title)}
              type="button"
              className={`${styles.sidebar_button} ${selectedItemId === key ? styles["sidebar_button--selected"] : ""}`}
            >
              {value.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
