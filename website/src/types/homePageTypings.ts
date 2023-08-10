//Importa a Tipagem para os Icones dos cartões de serviço
import { IconBaseProps } from "react-icons"

/**
 * Definição da estrutura de seção de apresentação.
 */

/**
* Definição da estrutura de seção de serviços.
*/
export interface ServicesSection {
  title: string;        // Título da seção de serviços
  description: string;  // Descrição da seção de serviços
}

/**
* Definição da estrutura de um cartão de serviço.
*/
export interface ServiceCard {
  icon: React.ComponentType<IconBaseProps>;  // Ícone do serviço
  title: string;        // Título do serviço
  description: string;  // Descrição do serviço
}

/**
* Definição da estrutura de seção de projetos.
*/
export interface ProjectsSection {
  title: string;        // Título da seção de projetos
  description: string;  // Descrição da seção de projetos
}

/**
* Definição da estrutura de um cartão de projeto.
*/
export interface ProjectCard {
  imageURL: string;     // URL da imagem do projeto
  imageAltText: string;  // Texto alternativo da imagem do projeto
  title: string;        // Título do projeto
  description: string;  // Descrição do projeto
  date: string;         // Data do projeto
  duration: string;     // Duração do projeto
  buttonURL: string;
}

/**
* Definição da estrutura de seção de perguntas frequentes.
*/
export interface FAQSection {
  title: string;        // Título da seção de perguntas frequentes
  description: string;  // Descrição da seção de perguntas frequentes
}

/**
* Definição da estrutura de um item de perguntas frequentes.
*/
export interface FAQItem {
  question: string;     // Pergunta da FAQ
  answer: string;       // Resposta da FAQ
}

/**
* Definição da estrutura de seção de contato.
*/
export interface ContactSection {
  title: string;                  // Título da seção de contato
  description: string;            // Descrição da seção de contato
  titleWhatsapp: string;          // Título para o link do WhatsApp
  titleSocialMedias: string;      // Título para as redes sociais
}
