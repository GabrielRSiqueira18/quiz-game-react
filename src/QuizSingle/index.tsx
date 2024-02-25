import { useNavigate, useParams } from "react-router-dom"
import { useAppSelector } from "../store"
import { useState } from "react"

import styles from "./styles.module.css"

export function QuizSingle() {
  const params = useParams()

  const { id } = params

  const navigate = useNavigate()

  const [ step, setStep ] = useState(0)
  const [ countAnswersCorrects, setCountAnswersCorrects ] = useState(0)

  const question = useAppSelector(state => {
    return state.quiz.games.find(game => game.id === id)
  })

  function handleChoiceCorrectAnswer(answer: string, correctAnswer: string) {
    setStep(state => state + 1)
    
    if (answer === correctAnswer) {
      setCountAnswersCorrects(state => state + 1)
    }
  }

  return (
    <div className={styles['container-quiz-single']}>
     <div className={styles['quiz-single']}>
      <header>
          <h2>{question?.title}</h2>
          <span>
            {question?.description}
          </span>
        </header>
        
        <div className={styles['form-question']}>
          {step < 4 ? (
            <>
              <h2>
                <span>Pergunta {step + 1}</span>
                <span>{question?.questionsGame[step].name}</span>
              </h2>
              <div className={styles['cotainer-question-game-choice']}>
                {question?.questionsGame[step].answers.map((answer) => {
                  return (
                    <section
                      className={styles['question-game-choice']}
                      key={answer}
                    >
                      <span className={styles['span-answer']}>{answer}</span>
                      <button
                        onClick={() => handleChoiceCorrectAnswer(answer, question?.questionsGame[step].correctAnswer)}
                      >
                        Escolher
                      </button>
                    </section>
                  )
                })}
              </div>
            </>
          ) : (
            <div className={styles['final-step']}>
              <h2>Você acertou {countAnswersCorrects} perguntas de 4</h2>
              <button onClick={() => navigate('/')}>Voltar</button>
            </div>
          )}
        </div>
     </div>
    </div>
  )
}

