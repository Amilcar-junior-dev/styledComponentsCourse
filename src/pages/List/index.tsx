import React, { useContext, useState } from 'react';
import {View, Text, TextInput, FlatList} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import { ThemeContext } from 'styled-components/native';
import { ContainerInput, ContainerSearch, ContainerView } from './styles';

import Search from '../../assets/icons/Search.svg';

import {mockDataBase} from '../../dataBase';
import CardComponent from '../../components/Cards';

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
                    <Search width={30} height={30} color={Theme?.text_primary}/>
                </ContainerSearch>
                <FlatList
                    data={mockDataBase}
                    keyExtractor={(_, index)=> index.toString()}
                    renderItem={()=> <CardComponent />}
                />
                
            </ContainerView>
        </LinearGradient>
    )
};

export default List;