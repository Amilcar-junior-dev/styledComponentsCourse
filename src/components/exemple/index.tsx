import React from 'react';
import { Text, View} from 'react-native';
import { CliqueMe, Clone, Container,Container2, Retangulo } from './styles';

export const ExempleComponent = ()=> {
    return (
        <Container>
            <Retangulo />   
            <Clone /> 
            <CliqueMe
                // activeOpacity={0}
            >
                <Text>Clique aqui</Text>
            </CliqueMe>  
        </Container>
        
    )
};