import React from 'react';
import {View, Text} from 'react-native';

const App = ()=> {
  return (
    <View
      style={{flex:1, alignItems: 'center', justifyContent: 'center' }}
    >
      <View
        style={[
          {
            width:100,
            height:100,
            backgroundColor: 'red',
            alignItems: 'center',
            justifyContent: 'center'
          },
          {
            marginLeft: 100,
            backgroundColor: 'blue',
          }
        ]}
      >

        <Text> Hello Word</Text>
      </View>
    </View>
  )
}
export default App