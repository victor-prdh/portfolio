import Link from 'next/link';
import Button from '../components/button';
import CustomHead from '../components/head';
import Header from '../components/header';
import styles from '../styles/home.module.css';

export default function Home() {
  return (
    <>
      <CustomHead />
      <Header></Header>
      <div className={styles.presentation}>
        <h1>Développeur passioné par la création de solutions modernes et performantes</h1>
        <p>Développeur back chez&nbsp;
          <Link href={'https://www.sinfin.fr'} target="_blank" className={styles.link}>Sinfin</Link>.
          Grand utilisateur de Symfony et React.
        </p>
        <Link href={"/about"} className={styles.btnContainer}>
          <Button title={"Me découvrir"} />
        </Link>
      </div>
    </>
  )
}
