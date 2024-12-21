import React, { useState } from 'react';
import {Keyboard, TouchableWithoutFeedback, View, useColorScheme} from 'react-native';
import {ExempleComponent} from './components/exemple';
import {ThemeProvider} from 'styled-components/native';
import {themeColors} from './theme';
import {ContainerGlobal} from './theme/globalStyle';
import RadioButtonComponent from './components/RadioButtom';
import ToggleComponent from './components/ToogleComponent';
import TextInputComponent from './components/TextInput';

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
      <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
          <ContainerGlobal>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {/* {
                Options.map((item, index)=> (
                  <RadioButtonComponent
                    key={index}
                    option={item}
                    check={value}
                    setOptionSelectd={(value)=> setValue(value)}
                  />
                ))
              } */}
              {/* <ToggleComponent
                setEnabledToggle={(enabled)=> console.log('===>>>', enabled)}
              /> */}
              <TextInputComponent
                type='secondary'
                labelName='User Name'
                setInputValue={()=> {}}
              />
            </View>
          </ContainerGlobal>
      </TouchableWithoutFeedback>
    </ThemeProvider>
  );
};
export default App;
