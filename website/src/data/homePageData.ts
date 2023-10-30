/**
 * Definição dos conteúdos das seções da página inicial.
 */

// Importa os Icones dos Cartões de Projeto
import { FcMultipleDevices, FcFinePrint, FcSupport } from "react-icons/fc";

// Importa a Tipagem dos conteúdos das seções da página inicia
import { ServicesSection, ServiceCard, ProjectsSection, ProjectCard, FAQSection, FAQItem, ContactSection } from '@/types/homePageTypings';

// Conteúdo para a seção de serviços
export const servicesSection: ServicesSection = {
    title: 'Serviços',
    description: 'Soluções digitais inovadoras e alinhadas com suas metas',
};

// Cartões de serviço
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

// Conteúdo para a seção de projetos
export const projectsSection: ProjectsSection = {
    title: 'PROJETOS RECENTES',
    description: 'Explore Minhas Jornadas Digitais mais Recentes',
};

// Cartões de projeto
export const projectCards: ProjectCard[] = [
    {
        imageURL: "/images/layout-website-condoplanner.png",
        imageAltText: "Imagem da página inicial do SAAS",
        title: 'SAAS - Condoplanner Gestão de condomínios (Em Desenvolvimento)',
        description: 'Condoplanner é o meu projeto pessoal dedicado a revolucionar a gestão de condomínios. Minha visão é criar uma solução inteligente e fácil de usar para simplificar a administração condominial. Com recursos avançados em desenvolvimento, como gestão financeira, reservas de áreas comuns e notificações automatizadas, estou comprometido em melhorar a vida dos síndicos e administradores. Junte-se a mim nessa jornada de inovação e eficiência na gestão de condomínios. Fique ligado para atualizações do desenvolvimento!',
        date: '30/',
        duration: 'Em Desenvolvimento',
        buttonURL: "https://github.com/antoniati/condoplanner"
    },      
    {
        imageURL: '/images/layout-website-entremares.png',
        imageAltText: 'Imagem da página inicial do website',
        title: 'Website - Condomínio Phoenix Entre Mares (Projeto de Apresentação)',
        description: 'O projeto Phoenix Entre Mares é um testemunho do meu compromisso em criar experiências digitais excepcionais. Com dedicação, transformei a visão deste condomínio em um website moderno e responsivo. Este espaço virtual traz não apenas informações essenciais sobre o empreendimento, mas também oferece uma interação fluída através de um formulário de contato eficiente e integração perfeita com o Google Maps',
        date: '20/06/2023',
        duration: '15 Dias',
        buttonURL: "https://phoenixentremares.vercel.app"
    },
];

// Conteúdo para a seção de perguntas frequentes (FAQ)
export const faqSection: FAQSection = {
    title: 'PERGUNTAS FREQUENTES',
    description: 'Suporte Informado para Suas Dúvidas',
};

// Itens de perguntas frequentes
export const faqItems: FAQItem[] = [
    {
        question: 'Como funciona o processo de desenvolvimento de websites?',
        answer: 'O processo de desenvolvimento começa com uma análise detalhada dos requisitos do projeto. Em seguida, elaboramos um plano de design e funcionalidades. Após a aprovação do design, iniciamos a fase de desenvolvimento, mantendo você informado em cada etapa',
    },
    {
        question: 'Ofereço serviços de otimização de SEO?',
        answer: 'Sim, além de criar websites incríveis, também ofereço serviços de otimização de SEO. Isso inclui a otimização de conteúdo, estrutura do site e configurações técnicas para melhorar a visibilidade nos motores de busca',
    },
    {
        question: 'Qual é o prazo médio para a conclusão de um projeto?',
        answer: 'Os prazos podem variar dependendo da complexidade do projeto. Geralmente, projetos de websites completos levam de 4 a 8 semanas. No entanto, prazos mais específicos serão discutidos após avaliarmos os requisitos do seu projeto',
    },
    {
        question: 'Como garanto que seu website se adapte em dispositivos móveis?',
        answer: 'Todos os websites que desenvolvo são construídos seguindo as práticas de design responsivo. Isso significa que seu site se ajustará automaticamente para oferecer uma ótima experiência em dispositivos móveis, tablets e desktops',
    },
    {
        question: 'Ofereço suporte após a conclusão do projeto?',
        answer: 'Sim, após a conclusão do projeto, ofereço serviços de suporte técnico e manutenção contínua. Isso garante que seu website continue funcionando sem problemas e esteja atualizado com as últimas atualizações',
    },
    {
        question: 'Quais tecnologias utilizo para desenvolver websites?',
        answer: 'Utilizo uma variedade de tecnologias modernas, incluindo HTML5, CSS3, JavaScript, React.js, Node.js e Next.js. Essas tecnologias me permitem criar websites responsivos e interativos de alta qualidade',
    },
    {
        question: 'Como iniciar um projeto comigo?',
        answer: 'É fácil! Basta entrar em contato por meio do formulário nesta página ou por e-mail. Vamos agendar uma conversa inicial para discutir suas ideias e objetivos, e a partir daí, começaremos a transformar sua visão em realidade digital',
    },
];

// Conteúdo para a seção de contato
export const contactSection: ContactSection = {
    title: 'ENTRE EM CONTATO',
    description: 'Vamos Iniciar uma Conversa Sobre a Transformação Digital',
    titleWhatsapp: "Fale Comigo",
    titleSocialMedias: "Siga-me nas Redes Sociais",
};
