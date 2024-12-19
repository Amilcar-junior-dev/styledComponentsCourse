import React from 'react';
import {View, useColorScheme} from 'react-native';
import {ExempleComponent} from './components/exemple';
import {ThemeProvider} from 'styled-components/native';
import {themeColors} from './theme';

const App = () => {
  const scheme = useColorScheme();
  const theme = themeColors[scheme ?? 'dark'];

  return (
    <ThemeProvider theme={theme}>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <ExempleComponent />
      </View>
    </ThemeProvider>
  );
};
export default App;
