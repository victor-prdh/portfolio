import CustomHead from '../../components/head';
import Header from '../../components/header';
import styles from '../../styles/about.module.css';
import me from '../../public/me.jpg'
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <CustomHead title={"À propos - Victor Prudhomme"} />
      <Header></Header>
      <div className={styles.presentation}>
        <Image src={me} width={312} height={312} className={styles.img} />
        <div>
          <h1>Hello !</h1>
          <p>Moi c'est Victor, un développeur passionné par la 
            création d'applications performantes tout en ayant la volonté de m'améliorer continuellement.</p>
        </div>
      </div>
    </>
  )
}
