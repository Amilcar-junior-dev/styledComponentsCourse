import React, { useState, useRef, useEffect } from 'react';
import { Animated } from 'react-native';

import { CardText, ContainerCard, ContainerImage, ContentInfo } from './styles';
import LinearGradient from 'react-native-linear-gradient';

import ImageTest from '../../assets/images/FoodieFinder.png';
import Arrow from '../../assets/icons/arrow.svg';
import { CardComponentProps } from './Models';

import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackParamsList } from '../../@types';

type ListNavigationProp = StackNavigationProp<StackParamsList, 'MainTabs'>

const CardComponent:React.FC<CardComponentProps> = ({item})=> {

     const Navigation = useNavigation<ListNavigationProp>()

    const [ dropdown, setDropdown] = useState(false);
    const dropdownAnimated = useRef( new Animated.Value(0)).current;
    const heigthAnimated = useRef( new Animated.Value(0)).current;

    const text = 'FoodieFinder conecta amantes da gastronomia com os melhores restaurantes e pratos locais, permitindo que os usuários descubram novos sabores e compartilhem suas experiências culinárias.'

    useEffect(()=>{
        Animated.timing(dropdownAnimated, {
            toValue:dropdown ? 1 : 0 , 
            duration: 300,
            useNativeDriver: true
        }).start()
        
    },[dropdown])

    useEffect(()=>{
        Animated.timing(heigthAnimated, {
            toValue:dropdown ? 80 : 35 , 
            duration: 500,
            useNativeDriver: false
        }).start()
        
    },[dropdown])

    const interpolationAnimated = dropdownAnimated.interpolate({
        inputRange: [0,1],
        outputRange: ['180deg', '0deg']
    });


    return (
        <ContainerCard onPress={()=> Navigation.navigate('Details', {item: item})}>
            <LinearGradient
                style={{borderRadius: 10}}
                colors={["#345F85", "#0F1B25"]}
            >
                <ContainerImage 
                    source={item?.image}
                />

                <Animated.View style={{height: heigthAnimated}}>
                    <ContentInfo onPress={()=> setDropdown(!dropdown)}>
                        <Animated.View
                            style={{
                                position: 'absolute',
                                right:5,
                                top: 10,
                                transform: [{rotate: interpolationAnimated}]
                            }}
                        >
                            <Arrow  width={15} height={15} color={'#ffffff'}/>
                        </Animated.View>
                        <CardText fs={16} bold>
                              {item?.title}
                        </CardText>
                        {
                            dropdown &&
                            <CardText fs={12} bold={false}>
                                {item?.description?.length > 40 
                                    ? item?.description?.slice(0, 30) + '...'
                                    : item?.description
                                
                                }
                            </CardText>
                        }
                    </ContentInfo>
                </Animated.View>
            </LinearGradient>
        </ContainerCard>
    )
};

export default CardComponent