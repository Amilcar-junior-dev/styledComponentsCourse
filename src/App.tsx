import React, { useState } from 'react';
import {View, useColorScheme} from 'react-native';
import {ExempleComponent} from './components/exemple';
import {ThemeProvider} from 'styled-components/native';
import {themeColors} from './theme';
import {ContainerGlobal} from './theme/globalStyle';
import RadioButtonComponent from './components/RadioButtom';

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
      <ContainerGlobal>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {
            Options.map((item, index)=> (
              <RadioButtonComponent
                key={index}
                option={item}
                check={value}
                setOptionSelectd={(value)=> setValue(value)}
              />
            ))
          }
          
        </View>
      </ContainerGlobal>
    </ThemeProvider>
  );
};
export default App;
