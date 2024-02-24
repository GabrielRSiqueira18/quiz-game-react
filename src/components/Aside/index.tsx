import styles from "./styles.module.css"

interface AsideProps {
  isOpen: boolean
  handleSetAsideIsOpen: () => void
}

export function Aside({ isOpen, handleSetAsideIsOpen }: AsideProps) {
  return (
    <aside className={`${styles.aside} ${isOpen ? styles['aside-open'] : styles['aside-not-open']} `}>
      <button 
        className={styles['aside-open-close']}
        onClick={() => handleSetAsideIsOpen()}
        >
          
          --- 
      </button>

      <nav>
        <ul>
          <li>Rewards</li>
          <li>Resources</li>
        </ul>
      </nav>
    </aside>
  )
}