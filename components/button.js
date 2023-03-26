import styles from '../styles/button.module.css';

export default function Button({title, style}) {
    return (
        <button className={styles.btn} style={style}>{title}</button> 
    )
}