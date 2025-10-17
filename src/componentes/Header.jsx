// Header.js
import styles from './css/Header.module.css'; // Passo 1: Importe o arquivo de estilos

export default function Header() {
    return (
        <header className={styles.header}>
            <nav className={styles.navbar}>
                <a href="#inicio" className={styles.logo}>
                    Renova Ivan <i className='fa-solid fa-paint-roller'></i> {/* Classes do Font Awesome */}
                </a>
                <div className={styles['nav-container']}>
                    <ul className={styles['nav-menu']}>
                        <li><a href="#inicio" className={styles['nav-link']}>Início</a></li>
                        <li><a href="#servicos" className={styles['nav-link']}>Serviços</a></li>
                        <li><a href="#portfolio" className={styles['nav-link']}>Portfólio</a></li>
                        <li><a href="#depoimentos" className={styles['nav-link']}>Depoimentos</a></li>
                        <li><a href="#contato" className={styles['nav-link']}>Contato</a></li>
                    </ul>
                    {/*  SINTAXE CORRETA para múltiplas classes  */}
                    <a href="#contato" className={`${styles.btn} ${styles['btn-primary']}`}>
                        Solicite um Orçamento
                    </a>
                   
                </div>
                <div className={styles.hamburger}>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                </div>
            </nav>
        </header>
    );
}