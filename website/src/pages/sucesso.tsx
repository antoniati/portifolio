import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";
import styles from "@/styles/SucessPage.module.css";
import Footer from "@/components/Footer/Footer";
import MainButton from "@/components/Buttons/MainButton/MainButton";

export default function SucessoPage() {
    return(
        <>
            <Navbar />
            <main className={styles.sucessPage}>
                <Image
                    src="/logo.svg" 
                    alt="Logo do Programador Felipe Antoniati"
                    width={160}
                    height={160}
                />
                <h1>Email Enviado com Sucesso</h1>
                <p>Seu Email foi recebido com sucesso, e em até 24h estarei respondendo sua mensagem.</p>
                {/* <p>Muito obrigado por entrar em contato, espero em breve iniciar um projeto de sucesso juntos</p> */}
                <MainButton mainButtonText="OK" mainButtonURL="https://felipeantoniati.vercel.app"/>
            </main>
            <Footer />
        </>
    );
};