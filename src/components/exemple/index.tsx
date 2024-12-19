import React, {useContext} from 'react';
import {Text} from 'react-native';
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
import {ThemeConsumer, ThemeContext, useTheme} from 'styled-components/native';

export const ExempleComponent = () => {
  const hookTheme = useTheme();
  const theme = useContext(ThemeContext);

  return (
    <Container>
      <ButtonComponent width={50} height={50} borderRadius={10}>
        <ThemeConsumer>
          {theme => (
            <Text
              style={{
                color: theme?.text_primary,
                fontSize: 25,
                fontWeight: 'bold',
              }}>
              Enviar
            </Text>
          )}
        </ThemeConsumer>
      </ButtonComponent>
    </Container>
  );
};
