import styled, { css } from 'styled-components/native';
import {View} from 'react-native';

export const Container  = styled.View`
    height: 60%;
    width: 90%;
    align-items: center;
    padding: 10px;
    border-width: 2px;
    border-color: blueviolet;
    border-radius: 20px;
`;

export const Container2 = styled(View)`
    height: 60%;
    width: 90%;
    border-width: 2px;
    border-color: blueviolet;
    border-radius: 20px;
`;

export const Retangulo = styled.View`
    height: 50px;
    width: 90%;
    background-color: blue;
    margin-top: 30px;  
`;

export const Clone = styled(Retangulo)`
    height: 30px;
    background-color: red;
    margin-left: 30px;
`;
export const CliqueMe2 = styled.TouchableOpacity.attrs(()=>({
    activeOpacity: 0,
}))`
    justify-content: center;
    align-items: center;
    background-color: cyan;
    padding: 10px;
    min-width:40%;
    border-radius: 10px;
    margin-top: 20px;
`;
export const CliqueMe1 = styled.TouchableOpacity.attrs(()=>{
    return {
        activeOpacity: 0.5
    }
} )`
    justify-content: center;
    align-items: center;
    background-color: cyan;
    padding: 10px;
    min-width:40%;
    border-radius: 10px;
    margin-top: 20px;
`;
export const CliqueMe = styled.TouchableOpacity.attrs(function(){
    return {
        activeOpacity: 0
    }
})`
    justify-content: center;
    align-items: center;
    background-color: cyan;
    padding: 10px;
    min-width:40%;
    border-radius: 10px;
    margin-top: 20px;
`;

const CommonProps = css`
    color: red;
    font-weight: bold;
    text-decoration-color: blue;
`;

export const FirstText = styled.Text`
    font-size: 18px;
    text-decoration: underline;
    margin-top: 15px;
    ${CommonProps};
    color: blue;
`;

export const Circle = styled.View`
    height: 100px;
    width: 100px;
    background-color: yellow;
    border-radius: 100px;
    margin-top: 20px;
`;





