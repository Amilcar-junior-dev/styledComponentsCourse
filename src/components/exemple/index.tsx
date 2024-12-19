import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {
  Button,
  ButtonComponent,
  Circle,
  CliqueMe,
  Clone,
  Container,
  FirstText,
  Retangulo,
} from './styles';

export const ExempleComponent = () => {
  return (
    <Container>
      <ButtonComponent width={50} height={50} borderRadius={10}>
        <Text>Enviar</Text>
      </ButtonComponent>
    </Container>
  );
};
