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
export const CliqueMe2 = styled.TouchableOpacity.attrs(()=>({
    activeOpacity: 0,
}))`
    min-width:40%;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    background-color: cyan;
    margin-top: 20px;
    padding: 10px;
`;
export const CliqueMe1 = styled.TouchableOpacity.attrs(()=>{
    return {
        activeOpacity: 0.5
    }
} )`
    min-width:40%;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    background-color: cyan;
    margin-top: 20px;
    padding: 10px;
`;
export const CliqueMe = styled.TouchableOpacity.attrs(function(){
    return {
        activeOpacity: 0
    }
})`
    min-width:40%;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    background-color: cyan;
    margin-top: 20px;
    padding: 10px;
`;


