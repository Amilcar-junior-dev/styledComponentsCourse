import React, { useEffect, useRef } from 'react';
import { ContainerInfo, ContainerLogo, ContainerUserImage, ContentInfo, SnippetContainer, TextInfo } from './styles';
import { Animated, Easing, Image } from 'react-native';

import UserExemple from '../../assets/images/userExemple.png';
import ReactLogo from '../../assets/icons/ReactLogo.svg';
import { ThemeConsumer } from 'styled-components/native';
import { transformer } from '../../../metro.config';

const SnippetComponent: React.FC = ()=> {

    const rotation = useRef( new Animated.Value(0)).current;

    useEffect(()=>{
        const spinAnimated = Animated.loop(
            Animated.timing(rotation,{
                toValue:1,
                duration:3000,
                useNativeDriver: true,
                easing: Easing.linear
            })
        )
        spinAnimated.start();
        return  ()=> spinAnimated.stop()
    },[rotation])

    const spin = rotation.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
    });

    return(
        <SnippetContainer>
            <ContainerUserImage>
                <Image
                    source={UserExemple}
                    style={{width: '100%', height: '100%'}}
                />
                <ContainerLogo>
                    <Animated.View style={{transform: [{rotate: spin}]}}>

                        <ThemeConsumer >
                            {
                                (theme)=>(
                                    <ReactLogo width={25} height={25} color={theme?.icon_primary}  />
                                )
                            }
                        </ThemeConsumer>
                    </Animated.View>
                </ContainerLogo>
            </ContainerUserImage>
            <ContentInfo>
                <ContainerInfo>
                    <TextInfo bold> Maria Silva de Oliveira</TextInfo>
                </ContainerInfo>
                <ContainerInfo>
                    <TextInfo bold={false}> Especialista Mobile </TextInfo>
                </ContainerInfo>
            </ContentInfo>
        </SnippetContainer>
    )
};

export default SnippetComponent;