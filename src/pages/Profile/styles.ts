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