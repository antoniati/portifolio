// Tipagem para o conteúdo da seção de apresentação
export interface IntroSectionProps {
    imagePerfil: string;
    imageAltText: string;
    title: string;        // Título da seção de apresentação
    titleSpan: string;
    subtitle: string;     // Subtítulo da seção de apresentação
    buttonText: string;   // Texto exibido no botão da seção de apresentação
    buttonURL: string;    // URL para a qual o botão da seção de apresentação redireciona
}

// Conteúdo para a seção de apresentaçã
export const IntroSectionData: IntroSectionProps = {
    imagePerfil: "/images/perfil.jpg",
    imageAltText: "Imagem do Programador Freelancer Felipe Antoniati",
    title: 'Felipe Antoniati',
    titleSpan: " Programador Freelancer",
    subtitle: 'Criando Websites Sob Medida para seu Sucesso Digital',
    buttonText: "Entre em contato",
    buttonURL: "https://felipeantoniati.vercel.app/contato"
};
