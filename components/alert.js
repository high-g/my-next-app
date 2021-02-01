import styles from './alert.module.scss'
import cn from 'classnames'

export default function Alert({ text, type }) {
  return (
    <div
      className={cn({
        [styles.success]: type === 'success',
        [styles.error]: type === 'error',
      })}
    >
      {text}
      <p className={styles.test}>
        bbb
        <span className={styles.a}>ccc</span>
      </p>
    </div>
  )
}
