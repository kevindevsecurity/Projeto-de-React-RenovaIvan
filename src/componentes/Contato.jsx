// Contato.js
import styles from './css/Contato.module.css'; // Passo 1: Importe o arquivo de estilos
import fotoPai from '../assets/images/foto-pai.jpg'
export default function Contato() {
    return (
        //  Aplicando múltiplas classes na seção
        <section id="contato" className='section section-alt'>
            <h2 className='section-title'>Contato</h2>
            <div className={styles['contact-container']}>
                <div className={styles['contact-info']}>
                    <img src={fotoPai} alt="Foto de Ivan, o pintor" className={styles['contact-photo']} />
                    <h3>Fale Comigo</h3>
                    <p>Entre em contato para solicitar seu orçamento gratuito e sem compromisso.</p>
                    <div className={styles['info-item']}>
                        {/* Classes globais do Font Awesome mantidas como string */}
                        <i className="fab fa-whatsapp"></i>
                        <span>(11) 95442-2808</span>
                    </div>
                    <div className={styles['info-item']}>
                        <i className="fas fa-phone"></i>
                        <span>(55) 3659-6562</span>
                    </div>
                    <div className={styles['social-links']}>
                        <a href="#" aria-label="Link para o Instagram"><i className="fab fa-instagram"></i></a>
                        <a href="#" aria-label="Link para o Facebook"><i className="fab fa-facebook"></i></a>
                    </div>
                </div>

                <form id="contact-form" className={styles['contact-form']}>
                    <h3>Envie uma Mensagem</h3>
                    <div className={styles['form-group']}>
                        <label htmlFor="name" className={styles['sr-only']}>Nome</label>
                        <input type="text" id="name" name="name" placeholder="Seu Nome" required />
                    </div>
                    <div className={styles['form-group']}>
                        <label htmlFor="phone" className={styles['sr-only']}>Telefone</label>
                        <input type="tel" id="phone" name="phone" placeholder="Seu Telefone" required />
                    </div>
                    <div className={styles['form-group']}>
                        <label htmlFor="message" className={styles['sr-only']}>Mensagem</label>
                        <textarea name="message" id="message" placeholder="Sua Mensagem" rows="4"></textarea>
                    </div>
                    {/*  Aplicando múltiplas classes no botão */}
                    <button type="submit" className='btn btn-primary'>Enviar</button>
                </form>
            </div>
        </section>
    );
}