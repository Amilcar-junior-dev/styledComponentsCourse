import React, {useContext} from 'react';
import {Dimensions, PixelRatio, Text, useWindowDimensions} from 'react-native';
import {
  Button,
  ButtonComponent,
  Circle,
  CliqueMe,
  Clone,
  Container,
  ContainerButton,
  FirstText,
  Retangulo,
  TextButton,
} from './styles';
import {ThemeConsumer, ThemeContext, useTheme} from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const ExempleComponent = () => {

  const Screen = Dimensions.get('window');
  const Pixel = PixelRatio.getFontScale();

  const colors = ['#084BE8', '#B1C4FF', '#4DBAF6'];


  return (
    <ContainerButton ScreenWindow={Screen.width * 0.5}>
      <LinearGradient
        colors={colors}
        style={{
          height: '100%',
          width: '100%',
          borderRadius: 20,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <TextButton fontScale={Pixel}>
           Enviar
        </TextButton>
      </LinearGradient>
    </ContainerButton>
  );
};
