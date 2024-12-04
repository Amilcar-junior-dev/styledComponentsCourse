import styled from 'styled-components/native';
import {View} from 'react-native';

export const Container  = styled.View`
    width: 90%;
    height: 60%;
    border-width: 2px;
    border-color: blueviolet;
    align-items: center;
    border-radius: 20px;
`;

export const Container2 = styled(View)`
    width: 90%;
    height: 60%;
    border-width: 2px;
    border-color: blueviolet;
    border-radius: 20px;
`;

export const Retangulo = styled.View`
    width: 90%;
    height: 50px;
    margin-top: 30px;
    background-color: blue;
`;

export const Clone = styled(Retangulo)`
    margin-left: 30px;
    background-color: red;
    height: 30px;
`;

