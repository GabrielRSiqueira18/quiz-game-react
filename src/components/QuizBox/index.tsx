import { Link } from "react-router-dom";
import styles from "./styles.module.css";

interface QuizBoxProps {
  id: string
  title: string
  description: string
}

export function QuizBox({ id, title, description }: QuizBoxProps) {
  return (
    <div className={styles['container-quiz-box']}>
      <h2>{title}</h2>
      <p>
        {description}
      </p>
      <Link
        to={`/quiz/${id}`}
      >
        <button>Acessar</button>
      </Link>
    </div>
  )
}