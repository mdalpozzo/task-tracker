import { useMemo, useState } from "react"
import styles from "./App.module.css"
import { Sidebar } from "./features/sidebar/Sidebar"
import { items } from "./features/sidebar/sidebarItems"

const App = () => {
  // move to redux?
  const [selectedItemId, setSelectedItemId] = useState<string>(
    items.get("TaskBoard")?.title ?? "",
  )

  const onClickItem = (itemId: string) => {
    setSelectedItemId(itemId)
  }

  const SelectedComponent = useMemo(() => {
    return items.get(selectedItemId)?.Component
  }, [selectedItemId])

  return (
    <div className={styles.App}>
      <Sidebar
        title="Task Tracker"
        items={items}
        onClickItem={onClickItem}
        selectedItemId={selectedItemId}
      />
      <div className={styles["App-content"]}>
        {SelectedComponent ? (
          <SelectedComponent />
        ) : (
          <h1>Component not found</h1>
        )}
      </div>
    </div>
  )
}

export default App
