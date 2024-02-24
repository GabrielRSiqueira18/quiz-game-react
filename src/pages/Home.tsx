import { Header } from "../components/Header"
import { QuizBox } from "../components/QuizBox"

import styles from "./home.module.css"

export function Home() {
  return (
    <>
      <div className={styles.container}>
        <Header />
        <QuizBox 
          title="s"
          description="s"
        />
      </div>
   </>
  )
}