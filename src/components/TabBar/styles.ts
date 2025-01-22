import styled from 'styled-components/native';

export const TabBarContainer = styled.View`
    height: 50px;
    width: 100%;
    background-color: ${({theme})=> theme.tab_bar};
    padding: 5px 8px;
    flex-direction: row;
`;