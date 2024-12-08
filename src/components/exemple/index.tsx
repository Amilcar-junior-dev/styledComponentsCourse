import React from 'react';
import { Text, TouchableOpacity, View} from 'react-native';
import { Circle, CliqueMe, Clone, Container, FirstText, Retangulo } from './styles';

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
            <FirstText>
                Hello Word 
            </FirstText>
            <Circle>
                
            </Circle>
            <Circle 
                as={TouchableOpacity} 
                onPress={()=> {}}
            >
                
            </Circle>
        </Container>
        
    )
};