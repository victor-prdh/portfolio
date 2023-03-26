import CustomHead from '../../components/head';
import Header from '../../components/header';
import styles from '../../styles/home.module.css';

export default function Home() {
  return (
    <>
      <CustomHead title={"À propos - Victor Prudhomme"} />
      <Header></Header>
      <div className={styles.presentation}>
        <h1>ABOUT</h1>
      </div>
    </>
  )
}
