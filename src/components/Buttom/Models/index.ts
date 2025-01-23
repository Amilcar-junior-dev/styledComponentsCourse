export interface ButtomComponentProps {
    icon: 'Email' 
    | 'Linkedin' 
    | 'GitHub'
    | 'GitLab'
    | 'Instagram'
    | 'Facebook'
    | 'ReactNative'
    | 'JavaScript'
    | 'StyledComponents'
    | 'Tailwind'
    | 'Firebase'
    | 'HTML'
    | 'CSS'
    | 'TypeScript',
    sizeRadius?: number;
    action?: ()=> void;
    label?: string;
    iconSize?: number;
}