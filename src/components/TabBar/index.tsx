import React, { ReactElement, useContext } from 'react';
import { TabBarContainer } from './styles';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { TouchableOpacity } from 'react-native';

import  Profile from '../../assets/icons/Profile.svg';
import  List from '../../assets/icons/List.svg';
import { ThemeContext } from 'styled-components/native';

type keyIcon = {
    [key: string]: (color: string)=> ReactElement
}

const MyTabBar = ({state, descriptors, navigation}:BottomTabBarProps )=> {
    const Theme = useContext(ThemeContext)
    const Icons: keyIcon = {
        Profile: (color:string)=> <Profile color={color}  width={30} height={30}/>,
        List: (color:string)=> <List color={color}  width={30} height={30}/>,
    };

    return (
        <TabBarContainer>
            {
                state.routes.map((route, index)=>{
                    const label = route.name;
                    const isFocused = state.index === index 

                    const Navigation = ()=> {
                        const eventNavigation = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true 
                        });
                        if(!isFocused && !eventNavigation.defaultPrevented){
                            navigation.navigate(route.name, route.params)
                        }
                    };

                    return (
                        <TouchableOpacity
                            key={index}
                            onPress={ Navigation }
                            style={{
                                flex:1,
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            {Icons[label](isFocused ? Theme?.surface_light!  : '#939393' ) }
                        </TouchableOpacity>
                    )
                })
            }
        </TabBarContainer>
    )
};

export default MyTabBar;
