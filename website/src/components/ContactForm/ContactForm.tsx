import NeumorphismContainer from "../NeumorphismContainer/NeumorphismContainer";
import ContactItem from "./ContactItem/ContactItem";
import styles from "./ContactForm.module.css";

const ContactForm: React.FC = () => {
    return (
        <NeumorphismContainer>
            <form
                id={styles.form}
                action="https://formsubmit.co/antoniati.felipe@gmail.com"
                method="POST"
            >
                <div className={styles.formContent}>
                    <h3 className={styles.formTitle}> Envie uma mensagem </h3>
                    <input type="hidden" name="_next" value="https://felipeantoniati.vercel.app/pages/sucess.html" />
                 
                    <ContactItem labelFor="name" labelText="Seu Nome">
                        <input type="text" placeholder="Ex: Jhon" />
                    </ContactItem>
                    <ContactItem labelFor="email" labelText="Seu Email">
                        <input type="email" placeholder="Ex: Jhon" />
                    </ContactItem>
                    <ContactItem labelFor="subject" labelText="Selecione um Serviço">
                        <select className={styles.select} name="subject">
                            <option className={styles.option} value="">--Por favor escolha um serviço--</option>
                            <option className={styles.option} value="development">
                                Desenvolvimento de Site
                            </option>
                            <option className={styles.option} value="seo">
                                SEO
                            </option>
                            <option className={styles.option} value="support">
                                Suporte Técnico
                            </option>
                            <option className={styles.option} value="maintenance">
                                Manutenção de Site
                            </option>
                            <option className={styles.option} value="other">
                                Outro
                            </option>
                        </select>
                    </ContactItem>
                    <ContactItem labelFor="message" labelText="Mensagem">
                        <textarea
                            className={styles.contactFormTextareaElement}
                            name="message"
                            placeholder="Escrava aqui sua mensagem..."
                        ></textarea>
                    </ContactItem>
                    <div className={styles.buttonForm}>
                        <button type="submit">
                            Enviar
                        </button>
                    </div>
                </div>
            </form>
        </NeumorphismContainer>
    );
};

export default ContactForm;