import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    align-items: center;
    padding: 5px;
`;

export const ContainerMedal = styled.View`
    height: 70px;
    width: 70px;
    justify-content: center;
    align-items: center;
    background-color: ${({theme})=> theme.surface};
    border-radius: 100%;
`; 
export const MedalLabel = styled.Text`
    color: ${({theme})=> theme.surface_light};
    font-size: 12px;
    margin-top: 5px;
`;