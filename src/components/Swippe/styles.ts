import styled from 'styled-components/native';

export const SwippeContainer = styled.View`
    height: 50px;
    width: 300px;
    justify-content: center;
    align-items: center;
    background-color: ${({theme})=> theme.surface_light};
    border-radius: 30px;
    align-self: center;
    position: relative;
`;
export const TextLabelSwippe = styled.Text`
    color: ${({theme})=> theme.icon_primary};
    font-size: 25px;
    font-weight: bold;
`;
export const Swippe = styled.View`
    height: 50px;
    justify-content: center;
    align-items: flex-end;
    background-color:  ${({theme})=> theme.tertiary};
    padding: 0px 15px;
    border-radius: 30px;
    position: absolute;
    left: 0px;
`;