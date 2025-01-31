import styled from 'styled-components/native';

export const ContainerDetails = styled.View`
    flex: 1;
    position: relative;
`;

export const HeaderImage = styled.View`
    width: 100%;
    height: 30%;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
`;

export const ContainerImageCard = styled.Image`
    width: 100%;
    height: 100%;
    z-index: 1;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
`;

export const ContainerInformation = styled.ScrollView`
    flex: 1;
    padding: 10px;
`;
export const TitleDetails = styled.Text`
    color: ${({theme})=> theme?.surface};
    font-size: 25px;
    font-weight: bold;
    margin-top: 10px;
    margin-bottom:10px;
`;

export const Description = styled(TitleDetails)<{wd: number, color?:string}>`
    width: ${({wd})=> `${wd}%`};
    color: ${({color, theme})=> color ? color : theme?.surface};
    font-size:15px;
    margin-top: 8px;
`;
export const CardDescriptionTecnology = styled.TouchableOpacity`
    width: 100%;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
`;
export const ModalContainer = styled.TouchableOpacity.attrs(()=>({activeOpacity:1}))`
    flex:1;
    align-items: center;
    justify-content: center;
`;
export const ModalContent = styled.View`
    width: 80%;
    background-color: ${({theme})=> theme.surface};
    padding: 10px;
    border-radius: 15px;
`;

export const ContainerTitleModal = styled.View`
    width: 100%;
    align-items: center;
    flex-direction: row;
    margin-bottom:10px;
`;

export const TitleModal = styled.Text`
    color: ${({theme})=> theme.icon_primary};
    font-size: 25px;
    font-weight: bold;
    margin-left: 5px;
`;

