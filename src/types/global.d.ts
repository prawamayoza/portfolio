// Add type declarations for react-type-animation
declare module 'react-type-animation' {
  import { ComponentType, CSSProperties } from 'react';

  interface TypeAnimationProps {
    sequence: Array<string | number>;
    wrapper?: string;
    cursor?: boolean;
    repeat?: number | boolean;
    className?: string;
    style?: CSSProperties;
    speed?: number;
    deletionSpeed?: number;
    omitDeletionAnimation?: boolean;
  }

  const TypeAnimation: ComponentType<TypeAnimationProps>;
  export default TypeAnimation;
}

// Add type declarations for react-icons/fa
declare module 'react-icons/fa' {
  import { IconType } from 'react-icons';
  
  export const FaGithub: IconType;
  export const FaLinkedin: IconType;
  export const FaTwitter: IconType;
  export const FaEnvelope: IconType;
  export const FaCode: IconType;
  export const FaExternalLinkAlt: IconType;
  export const FaGraduationCap: IconType;
  export const FaBriefcase: IconType;
  export const FaTools: IconType;
  export const FaReact: IconType;
  export const FaNodeJs: IconType;
  export const FaDatabase: IconType;
  export const FaGitAlt: IconType;
  export const FaHeart: IconType;
  export const FaFacebook: IconType;
  export const FaInstagram: IconType;
  export const FaYoutube: IconType;
  export const FaPhone: IconType;
  export const FaMapMarkerAlt: IconType;
  export const FaPaperPlane: IconType;
  export const FaCheckCircle: IconType;
  export const FaExclamationCircle: IconType;
  export const FaSpinner: IconType;
  export const FaTimes: IconType;
  // Add more icons as needed
}

// Add type declarations for emailjs-com
declare module '@emailjs/browser' {
  export interface EmailJSResponseStatus {
    status: number;
    text: string;
  }

  export function init(publicKey: string): void;
  
  export function send(
    serviceID: string,
    templateID: string,
    templatePrams?: Record<string, unknown>,
    userID?: string
  ): Promise<EmailJSResponseStatus>;
  
  export function sendForm(
    serviceID: string,
    templateID: string,
    form: string | HTMLFormElement,
    userID?: string
  ): Promise<EmailJSResponseStatus>;
}
