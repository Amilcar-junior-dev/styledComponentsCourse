import styled from 'styled-components/native';

export const SnippetContainer = styled.View`
    width: 100%;
    justify-content: space-around;
    padding: 10px 20px;
    margin-top: 10px;
    flex-direction: row;
`;

export const ContainerUserImage = styled.View`
    height: 100px;
    width: 100px;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    border: 2px solid ${({theme})=> theme.surface};
    position: relative;
`;

export const ContainerLogo = styled.View`
    height: 30px;
    width: 30px;
    justify-content: center;
    align-items: center;
    background-color: ${({theme})=> theme.surface};
    border-radius: 100%;
    position: absolute;
    bottom: 0px;
    right: -5px;
`;

export const ContentInfo = styled.View`
    width: 50%;
    align-items: flex-start;
`;

export const ContainerInfo = styled.View`
    border-radius: 20px;
    justify-content: center;
    background-color: ${({theme})=> theme.surface+30};
    padding: 5px 10px;
    margin-bottom: 10px;
`;

export const TextInfo = styled.Text<{bold: boolean}>`
    color: ${({theme})=> theme.text_primary};
    font-weight: ${({bold})=> bold ? 'bold' : '400'};
    font-size: 12px;
`;