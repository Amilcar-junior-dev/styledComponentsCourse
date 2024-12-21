import styled, {css} from 'styled-components/native';
import { TextInputComponentProps } from './Models';
import { Animated, TextInput } from 'react-native';

const primary = css`
    border: 2px solid ${({theme})=> theme.surface };
    border-radius: 12px;
`;
const secondary = css`
    border-bottom-width: 2px;
    border-bottom-color: ${({theme})=> theme.surface }
`;
export const ContainerInput = styled.View<Partial<TextInputComponentProps>>`
    width: 100%;
    justify-content: center;
    color: ${({theme})=> theme.text_primary };
    padding: 0px 10px;
    position: relative;
    ${({type})=> type === 'primary' ? primary : secondary}
`;

export const Input = styled.TextInput.attrs(()=> ({}))`
    height: 40px;
    width: 100%;
    color:${({theme})=> theme.surface } ;
`;
export const ContainerLabel = styled.TouchableOpacity.attrs(()=>({activeOpacity:1}))<Partial<TextInputComponentProps>>`
    justify-content: center;
    align-items: center;
    padding: 0px 10px;
    display: ${({type})=> type == 'primary' ? 'flex' : 'none'};
    position: absolute;
`;
export const AnimatedLabel = styled(Animated.Text)`
    background-color: ${({theme})=> theme.background};
    color:${({theme})=> theme.surface } ;
    font-size: 20px;
    font-weight: bold;
`;