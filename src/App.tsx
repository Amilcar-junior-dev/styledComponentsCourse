import React, { useState } from 'react';
import {Keyboard, SafeAreaView, TouchableWithoutFeedback, View, useColorScheme} from 'react-native';
import {ExempleComponent} from './components/exemple';
import {ThemeProvider} from 'styled-components/native';
import {themeColors} from './theme';
import {ContainerGlobal} from './theme/globalStyle';
import RadioButtonComponent from './components/RadioButtom';
import ToggleComponent from './components/ToogleComponent';
import TextInputComponent from './components/TextInput';

import Arrow from './assets/icons/arrow.svg';
import DropDownComponent from './components/DropDown';
import SwippeComponent from './components/Swippe';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './Routes/Routes';

const App = () => {
  const scheme = useColorScheme();
  const theme = themeColors[scheme ?? 'dark'];

  const [ value, setValue ] = useState('');

  const Options = [
    'Segunda-Feira',
    'Terça-Feira',
    'Quarta-Feira',
    'Quinta-Feira',
    'Sexta-Feira',
    'Sábado',
    'Domingo'
  ];


  return (
    <ThemeProvider theme={theme}>
     <SafeAreaView style={{flex:1}}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
     </SafeAreaView>
    </ThemeProvider>
  );
};
export default App;
