import styled from 'styled-components/native';
import { ButtomComponentProps } from './Models';

export const ContainerButton = styled.TouchableOpacity<Partial<ButtomComponentProps>>`
    justify-content: center;
    align-items: center;
    background-color: ${({theme})=> theme.surface};
    padding: 12px;
    flex-direction: row;
    border-radius: ${({sizeRadius})=> sizeRadius}px;
    margin-bottom: 10px;
`;

export const ButtonLabel = styled.Text`
    color: ${({theme})=> theme.icon_primary};
    font-size: 15px;
    font-weight: bold;
    margin-left: 5px;
`;