import styles from "./styles.module.css";

interface QuizBoxProps {
  title: string
  description: string
}

export function QuizBox({ title, description }: QuizBoxProps) {
  return (
    <div className={styles['container-quiz-box']}>
      <h2>{title}</h2>
      <p>
        {description}
      </p>
      <button>Acessar</button>
    </div>
  )
}