import styled from 'styled-components/native';

export const ContainerRadioButtonComponent = styled.TouchableOpacity`
    height: 20px;
    width: 100%;
    align-items: center ;
    flex-direction: row;
    margin-bottom:10px;
`;

export const Radio = styled.TouchableOpacity`
    height: 18px;
    width: 18px;
    justify-content: center;
    align-items: center;
    border-radius: 18px;
    border: 2px solid ${({theme})=> theme.surface};
`;

export const CheckRadio = styled.View<{check: string, option: string}>`
    display:${({check, option})=> check === option ? 'flex' : 'none'} ;
    height: 8px;
    width: 8px;
    background-color: ${({theme})=> theme.surface};
    border-radius: 8px;
`;

export const TextOption = styled.Text`
    color: ${({theme})=> theme.surface} ;
    font-weight: bold;
    margin-left: 10px;
`;