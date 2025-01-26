import React, { useContext } from 'react';
import {View, Text} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import { ThemeContext } from 'styled-components/native';

const List: React.FC = ()=> {
    const Theme = useContext(ThemeContext);

    const colors = [
        Theme?.background!,
        Theme?.background!,
        Theme?.background!,
        Theme?.background!,
        Theme?.background!,
        Theme?.background!,
        Theme?.background!,
        Theme?.background! + 90
    ]

    return (
        <LinearGradient
            style={{flex:1}}
            colors={colors}
            start={{x:-1 ,y: -1.5 }}
            end={{x: 1, y: 1 }}
        > 
            <Text> Page List</Text>
        </LinearGradient>
    )
};

export default List;