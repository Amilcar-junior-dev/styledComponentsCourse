export interface MedalSkillComponentProps {
    icon: 'ReactNative'
    | 'JavaScript'
    | 'StyledComponents'
    | 'Tailwind'
    | 'Firebase'
    | 'AWS'
    | 'HTML'
    | 'CSS'
    | 'TypeScript';
    label: string;
    currentIndex: boolean;
    onAnimationEnd: ()=> void | number | null;

}