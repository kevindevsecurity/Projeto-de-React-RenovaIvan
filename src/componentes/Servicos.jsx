// Servicos.js
import styles from './css/Servicos.module.css'; // Passo 1: Importe o arquivo de estilos

export default function Servicos() {
    return (
        <section id="servicos" className="section">
            <h2 className='section-title'>Serviços</h2>
            <div className={styles['services-grid']}>
                <div className={styles['service-card']}>
                    {/*  Classes do Font Awesome são globais, mantidas como string */}
                    <i className="fa-solid fa-house-chimney-window"></i>
                    <h3>Pintura Residencial e Comercial</h3>
                    <p>Renovação completa de ambientes internos e externos com acabamento de primeira linha.</p>
                </div>

                <div className={styles['service-card']}>
                    <i className="fa-solid fa-layer-group"></i>
                    <h3>Acabamento Fino</h3>
                    <p>Aplicação de massa corrida, texturas, grafiato e cimento queimado para um visual moderno.</p>
                </div>

                <div className={styles['service-card']}>
                    <i className="fa-solid fa-screwdriver-wrench"></i>
                    <h3>Pequenos Reparos</h3>
                    <p>Soluções rápidas para reparos em paredes, tetos e outras necessidades de alvenaria.</p>
                </div>

                <div className={styles['service-card']}>
                    <i className="fa-solid fa-shield-halved"></i>
                    <h3>Impermeabilização</h3>
                    <p>Proteção contra infiltrações em lajes e paredes, garantindo a durabilidade da estrutura.</p>
                </div>
            </div>
        </section>
    );
}