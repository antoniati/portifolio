import { FcMultipleDevices, FcFinePrint, FcSupport } from "react-icons/fc";
import { PresentationSection, ServicesSection, ServiceCard, ProjectsSection, ProjectCard, FAQSection, FAQItem, ContactSection } from '@/types/homePageTypings';

export const presentationSection: PresentationSection = {
    title: 'Programador Freelancer Felipe Antoniati',
    subtitle: 'Criando Websites Sob Medida para seu Sucesso Digital',
    buttonText:  "Entre em contato",
    buttonURL: "#contact"
};

export const servicesSection: ServicesSection = {
    title: 'Serviços',
    description: 'Soluções digitais inovadoras e alinhadas com suas metas',
};

export const serviceCards: ServiceCard[] = [
    {
        icon: FcMultipleDevices,
        title: 'Desenvolvimento Web',
        description: 'Construo Websites responsivos e intuitivos que representam sua identidade e proporcionam uma experiência excepcional aos seus visitantes',
    },
    {
        icon: FcFinePrint,
        title: 'Marketing e SEO',
        description: 'Com técnicas de otimização e estratégias de marketing, posiciono seu site nos holofotes digitais, garantindo que você alcance seu público-alvo',
    },
    {
        icon: FcSupport,
        title: 'Suporte e Manutenção',
        description: 'Com meus serviços de suporte e manutenção, garanto que seu site opere sem problemas, esteja protegido contra vulnerabilidades e permaneça atualizado',
    },
];

export const projectsSection: ProjectsSection = {
    title: 'PROJETOS RECENTES',
    description: 'Explore Minhas Jornadas Digitais mais Recentes',
};

export const projectCards: ProjectCard[] = [
    {
        imageURL: '/images/layout-website-entremares.png',
        imageAltText: 'Imagem da página inicial do website do condomínio phoenix entre mares',
        title: 'Website - Condomínio Phoenix Entre Mares',
        description: 'O projeto Phoenix Entre Mares é um testemunho do meu compromisso em criar experiências digitais excepcionais. Com dedicação, transformei a visão deste condomínio em um website moderno e responsivo. Este espaço virtual traz não apenas informações essenciais sobre o empreendimento, mas também oferece uma interação fluída através de um formulário de contato eficiente e integração perfeita com o Google Maps',
        date: '20/06/2023',
        duration: '15 Dias',
    },
    {
        imageURL: "/images/layout-website-connecthouse.png",
        imageAltText:"Imagem da página inicial do website da empresa connect house",
        title: 'Website - Connect House Empresa de Automação',
        description: 'O projeto Connect House representa a convergência de tecnologia e criatividade. Neste projeto, dei vida à presença digital desta empresa, construindo um website moderno e responsivo que reflete sua identidade. Através de uma abordagem centrada no usuário, desenvolvi um espaço online que vai além de informações básicas, incorporando um formulário de contato intuitivo, integração perfeita com o Google Maps e um canal direto via WhatsApp',
        date: '22/07/2023',
        duration: '15 Dias',
    },
];

export const faqSection: FAQSection = {
    title: 'PERGUNTAS FREQUENTES',
    description: 'Suporte Informado para Suas Dúvidas',
};

export const faqItems: FAQItem[] = [
    {
        question: 'Quais tecnologias você utiliza para desenvolver websites?',
        answer: 'Utilizo uma variedade de tecnologias modernas...',
    },
    {
        question: 'Como funciona o processo de desenvolvimento de websites?',
        answer: 'O processo de desenvolvimento começa com uma análise detalhada dos requisitos do projeto...',
    },
    {
        question: 'Você oferece serviços de otimização de SEO?',
        answer: 'Sim, além de criar websites incríveis, também ofereço serviços de otimização de SEO...',
    },
    {
        question: 'Qual é o prazo médio para a conclusão de um projeto?',
        answer: 'Os prazos podem variar dependendo da complexidade do projeto...',
    },
    {
        question: 'Como você garante que meu website seja responsivo em dispositivos móveis?',
        answer: 'Todos os websites que desenvolvo são construídos seguindo as práticas de design responsivo...',
    },
    {
        question: 'Quais tipos de clientes você já trabalhou no passado?',
        answer: 'Colaborei com uma ampla variedade de clientes, desde startups e pequenas empresas até empresas estabelecidas...',
    },
    {
        question: 'Você oferece suporte após a conclusão do projeto?',
        answer: 'Sim, após a conclusão do projeto, ofereço serviços de suporte técnico e manutenção contínua...',
    },
    {
        question: 'Como posso iniciar um projeto com você?',
        answer: 'É fácil! Basta entrar em contato por meio do formulário nesta página ou por e-mail...',
    },
];

export const contactSection: ContactSection = {
    title: 'ENTRE EM CONTATO',
    description: 'Vamos Iniciar uma Conversa Sobre a Transformação Digital',
    titleWhatsapp: "Fale Comigo",
    titleSocialMedias: "Siga-me nas Redes Sociais",
};
