import styles from "./styles.module.css";

interface QuizBoxProps {
  title: string
  description: string
}

export function QuizBox({ title, description }: QuizBoxProps) {
  return (
    <div className={styles['container-quiz-box']}>
      <h2>Contas Matemáticas</h2>
      <p>
        Neste quiz você irá aprender melhor a usar contas básicas de matemática.
      </p>
      <button>Acessar</button>
    </div>
  )
}