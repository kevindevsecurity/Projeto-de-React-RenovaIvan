import styles from './css/Footer.module.css'
export default function Footer(){
    return(
        <footer className={styles.footer}>
        <p>&copy; <span id="current-year"></span> Renova Ivan. Todos os direitos reservados.</p>
        <p className={styles.footerdev}>Site desenvolvido com carinho ❤️</p>
        </footer>
    )
}

