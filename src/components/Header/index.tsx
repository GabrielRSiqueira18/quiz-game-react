import styles from "./styles.module.css"

export function Header() {
  return (
    <header>
      <h2>
        <strong>Quiz </strong>
        Game
      </h2>
      
      <div className={styles['container-buttons']}>
        <button>Log in</button>
        <button>Join now</button>
      </div>
    </header>
  )
}