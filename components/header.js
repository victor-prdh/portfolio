import styles from '../styles/header.module.css';
import Link from 'next/link'


export default function Header() {
  return (
    <header className={styles.header}>
        <span className={styles.title}>Victor&nbsp;Prudhomme</span>

        <nav>
            <ul className={styles.navigation}>
                <li><Link href="/">home</Link></li>
                <li><Link href="/about">à&nbsp;propos</Link></li>
            </ul>
        </nav>
    </header>
  )
}
