// Portfolio.js
import styles from './css/Portifolio.module.css';
import imagemTrabalho1 from '../assets/images/trabalho1.jpg';
import imagemTrabalho2 from '../assets/images/trabalho2.jpg';
import imagemTrabalho3 from '../assets/images/trabalho3.jpg';

export default function Portfolio() {
    return (
        <section id="portfolio" className='section section-alt'>
            <h2 className='section-title'>Portfólio</h2>
            <div className={styles['portfolio-grid']}>
                <div className={styles['portfolio-item']}>
                    <img src={imagemTrabalho1} alt="Pintura de porta branca com acabamento profissional" />
                    <div className={styles['portfolio-overlay']}>
                        <h3>Pintura Interna e Acabamentos</h3>
                    </div>
                </div>

                <div className={styles['portfolio-item']}>
                    <img src={imagemTrabalho2} alt="Profissional aplicando textura em fachada de casa" />
                    <div className={styles['portfolio-overlay']}>
                        <h3>Acabamento de Fachadas</h3>
                    </div>
                </div>

                <div className={styles['portfolio-item']}>
                    <img src={imagemTrabalho3} alt="Aplicação de impermeabilizante em laje" />
                    <div className={styles['portfolio-overlay']}>
                        <h3>Impermeabilização de Lajes</h3>
                    </div>
                </div>
            </div>
        </section>
    );
}