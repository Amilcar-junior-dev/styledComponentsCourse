import React from 'react';
import {View, Text} from 'react-native';
import { ExempleComponent } from './components/exemple';

const App = ()=> {
  return (
    <View
      style={{flex:1, alignItems: 'center', justifyContent: 'center' }}
    >
     <ExempleComponent />
    </View>
  )
}
export default App