import styles from '../styles/linkedin.module.css';
import Link from 'next/link'
import logo from '../public/linkedin.svg'
import Image from 'next/image'


export default function Linkedin() {
  return (
    <Link 
        href="https://www.linkedin.com/in/victor-prdh/" 
        target="_blank" 
        className={styles.linkedin}
    >
        <Image src={logo} width={32} height={32} />
    </Link>
  )
}
