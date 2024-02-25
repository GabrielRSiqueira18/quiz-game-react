import { Header } from "../components/Header"
import { QuizBox } from "../components/QuizBox"
import { useAppSelector } from "../store"

import styles from "./home.module.css"

export function Home() {
  const questions = useAppSelector(state => state.quiz.games)

  return (
    <>
      <div className={styles.container}>
        <Header />
        <div className={styles['quiz-wrapper']}>
          {questions.map(question => {
            return (
              <QuizBox 
                key={question.id}
                id={question.id}
                title={question.title}
                description={question.description}
            />
            )
          })}
        </div>

       
      </div>
   </>
  )
}