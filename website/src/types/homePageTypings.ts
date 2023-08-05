import {IconBaseProps} from "react-icons"

export interface PresentationSection {
    title: string;
    subtitle: string;
    buttonText: string;
    buttonURL: string;
  }
  
  export interface ServicesSection {
    title: string;
    description: string;
  }
  
  export interface ServiceCard {
    icon: React.ComponentType<IconBaseProps>;
    title: string;
    description: string;
  }
  
  export interface ProjectsSection {
    title: string;
    description: string;
  }
  
  export interface ProjectCard {
    imageURL: string;
    imageAltText: string;
    title: string;
    description: string;
    date: string;
    duration: string;
  }
  
  export interface FAQSection {
    title: string;
    description: string;
  }
  
  export interface FAQItem {
    question: string;
    answer: string;
  }
  
  export interface ContactSection {
    title: string;
    description: string;
    titleWhatsapp: string;
    titleSocialMedias: string;
  }
  