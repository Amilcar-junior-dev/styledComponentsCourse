import styled from 'styled-components/native';


export const ContainerProfile = styled.View`
    flex:1;
    background-color: ${({theme})=> theme.background};
`;

export const HeaderInfo = styled.View`
    width: 90%;
    align-self: center;
    border-bottom-width: 1px;
    border-bottom-color: ${({theme})=> theme.surface};
    flex-direction: row;
    padding: 0px 10px 5px 0px;
`;
export const HeaderText = styled.Text<{wd: number, fs:number, bold: boolean, lineH?: number}>`
    width: ${({wd})=> wd}%;
    color: ${({theme})=> theme.text_primary};
    font-size: ${({fs})=> fs}px;
    font-weight: ${({bold})=> bold ? 'bold' : '400'};
    line-height: ${({lineH})=> lineH ? `${lineH}px` : 'auto'}px;
`;

export const ContainerButtons = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    padding: 15px 10px;
    flex-wrap: wrap;
`;

export const ContainerSkills = styled.ScrollView`
    flex:1;
    width: 100%;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    background-color: ${({theme})=> theme.tab_bar};
`;

export const TitleSkillContent = styled.Text`
    color: ${({theme})=> theme.surface_light};
    font-size: 20px;
    font-weight: bold;
    margin-top: 20px;
    padding: 0px 10px;
`;

export const TextGeneric = styled.Text<{bold:boolean}>`
    color: ${({theme})=> theme.surface_light};
    font-size: 14px;
    padding: 0px 10px;
    font-weight: ${({bold})=> bold ? 'bold' : '400'};
    margin-top: 5px;
`;