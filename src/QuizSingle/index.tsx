import { useParams } from "react-router-dom"
import { useAppSelector } from "../store"
import { useState } from "react"

export function QuizSingle() {
  const params = useParams()

  const { id } = params

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
    <div>
      {question?.title}
      {question?.description}
      
      <div>
        {step < 4 ? (
          <>
            <h2>{question?.questionsGame[step].name}</h2>
            {question?.questionsGame[step].answers.map((answer) => {
              return (
                <section
                  key={answer}
                >
                  {answer}
                  <button
                    onClick={() => handleChoiceCorrectAnswer(answer, question?.questionsGame[step].correctAnswer)}
                  >
                    Escolher
                  </button>
                </section>
              )
            })}
          </>
        ) : (
          <div>{countAnswersCorrects}</div>
        )}
      </div>
    </div>
  )
}

