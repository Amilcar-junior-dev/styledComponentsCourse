import styled from 'styled-components/native';

export const ContainerCard = styled.TouchableOpacity`
    width: 40%;
    border-radius: 10px;
`;

export const ContainerImage = styled.Image`
    width: 100%;
    height: 70px;
    border-radius: 10px;
    background-color: white;
`;
export const ContentInfo = styled.TouchableOpacity`
    width: 100%;
    overflow: hidden;
`;

export const CardText = styled.Text<{fs: number, bold: boolean}>`
    color: ${({theme})=> theme.surface};
    font-size: ${({fs})=> fs}px;
    font-weight: ${({bold})=> bold ? 'bold' : '400'};
`;