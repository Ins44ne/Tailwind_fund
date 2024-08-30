import styles from './core.module.css'

export function Part3() {
  return (
    <form className="m-10">
      <input className={styles.field} type="text" placeholder="Enter e-mail:" />
      <button className={styles.button}>Submit</button>
      <p className="text-uniq">Text with unique color</p>
      <p className="hide">Text with unique color</p>
    </form>
  )
}
