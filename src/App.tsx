import { useState } from "react"
import styles from "./app.module.css"
import { Aside } from "./components/Aside"
import { Header } from "./components/Header"

export function App() {
  const [ asideIsOpen, setAsideIsOpen ] = useState(false)

  function handleSetAsideIsOepn(): void {
    setAsideIsOpen(state => !state)
  }

  return (
   <>
    <Aside
      isOpen={asideIsOpen}
      handleSetAsideIsOpen={handleSetAsideIsOepn}
    />

    <div className={styles.container}>
      <Header /> 
      
    </div>
   </>
  )
}
