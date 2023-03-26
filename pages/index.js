import Header from '../components/header';
import styles from '../styles/home.module.css';

export default function Home() {
  return (
    <>
      <Header></Header>
      <div className={styles.presentation}>
        <h1>Salut</h1>
      </div>
    </>
  )
}
