import styled from 'styled-components/native';

export const ContainerDropDown = styled.View`
    width: 80%;
    background-color: ${({theme})=> theme.surface_light};
    padding: 10px;
    border-radius: 10px;
    align-self: center;
`;

export const InputSelected = styled.TouchableOpacity`
    width: 100%;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
`;

export const OptionSelected = styled.Text`
    color: ${({theme})=> theme.background};
    font-size: 18px;
    font-weight: bold;
`;

export const DropdownOptionsContainer = styled(ContainerDropDown)`
    margin-top: 10px;
    padding: 10px 0px;
`;

export const Option = styled.TouchableHighlight.attrs(({theme})=>({underlayColor: theme.background+30 }))`
    width: 100%;
    background-color: ${({theme})=> theme.surface_light};
    padding: 10px;
`;