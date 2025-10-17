// Depoimentos.js
import styles from './css/Depoimentos.module.css'; // Passo 1: Importe o arquivo de estilos

export default function Depoimentos() {
    return (
        <section id="depoimentos" className='section'>
            <h2 className='section-title'>O que os clientes dizem</h2>
            <div className={styles['testimonial-carousel']}>
                {/*  Card ativo com duas classes */}
                <div className={`${styles['testimonial-card']} ${styles.active}`}>
                    <p>"Serviço impecável e muito profissional! O Ivan transformou minha sala, cumpriu o prazo e deixou tudo limpo. Recomendo demais!"</p>
                    <div className={styles['testimonial-author']}>- Maria Silva, Osasco/SP</div>
                </div>

                <div className={styles['testimonial-card']}>
                    <p>"Contratei para a pintura externa da minha casa e o resultado ficou excelente. Ótimo custo-benefício."</p>
                    <div className={styles['testimonial-author']}>- João Pereira, Barueri/SP</div>
                </div>

                <div className={styles['testimonial-card']}>
                    <p>"Profissional de confiança. Fez pequenos reparos e a pintura do meu apartamento. Fiquei muito satisfeito."</p>
                    <div className={styles['testimonial-author']}>- Ana Costa, Carapicuíba/SP</div>
                </div>
            </div>
        </section>
    );
}