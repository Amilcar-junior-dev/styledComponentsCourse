import React, { useContext, useState } from 'react';
import {View, Text, TextInput} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import { ThemeContext } from 'styled-components/native';
import { ContainerInput, ContainerSearch, ContainerView } from './styles';

const List: React.FC = ()=> {
    const Theme = useContext(ThemeContext);

    const [ value, setValue] = useState('');

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
            <ContainerView>
                <ContainerSearch>
                    <ContainerInput>
                        <TextInput
                            style={{width:'100%', height: '100%', color:Theme?.surface_light }}
                            placeholder='Digite aqui...'
                            placeholderTextColor={Theme?.surface_light}
                            value={value}
                            onChangeText={(text)=> setValue(text)}

                        />
                    </ContainerInput>
                </ContainerSearch>
                
            </ContainerView>
        </LinearGradient>
    )
};

export default List;