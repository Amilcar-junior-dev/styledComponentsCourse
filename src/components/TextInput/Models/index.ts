export interface TextInputComponentProps {
    type: 'primary' | 'secondary';
    labelName: string;
    setInputValue: (value: string)=> void;
}