// Inicio.js
import styles from './css/Inicio.module.css'; // Passo 1: Importe o arquivo de estilos

export default function Inicio() {
    return (
        // Passo 2: Troque 'class' por 'className' e use o objeto 'styles'
        <section id="inicio" className={styles.hero}>
            <div className={styles['hero-overlay']}></div> {/* Use colchetes para nomes com hífen */}
            <div className={styles['hero-content']}>
                <h1>Transformamos sua casa em um lar!</h1>
                <p>Serviços de pintura, acabamento e alvenaria de qualidade profissional.</p>
                <div className={styles['hero-buttons']}>
                    {/* Passo 3: Use template literals para aplicar múltiplas classes */}
                    <a href="#servicos" className={`${styles.btn} ${styles['btn-primary']}`}>
                        Ver Serviços
                    </a>
                    <a href="#contato" className={`${styles.btn} ${styles['btn-secondary']}`}>
                        Entrar em Contato
                    </a>
                </div>
            </div>
        </section>
    );
}