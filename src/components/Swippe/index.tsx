import React, { useRef } from 'react';
import {Animated, Linking, PanResponder} from 'react-native';
import { Swippe, SwippeContainer, TextLabelSwippe } from './styles';
import Phone from '../../assets/icons/phone.svg';
import { ThemeConsumer } from 'styled-components/native';
import { SwippeComponentProps } from './Models';

const SwippeComponent:React.FC<SwippeComponentProps> = ({
    label,
    width,
})=> {

    const animatedSwippeValue = useRef(new Animated.Value(0)).current;

    const containerWidth = width;
    const limit = containerWidth

    const openPhone = ()=> {
        const phoneNumer = 'tel:99999999'
        Linking.openURL(phoneNumer)
    }

    const panResponderAnimated = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: ()=> true, 
            onPanResponderMove: (_, gestureState)=> {
                if(gestureState.dx >= 0 && gestureState.dx <= limit){
                    animatedSwippeValue.setValue(gestureState.dx)
                }
            },
            onPanResponderRelease: (_, gestureState)=> {
                if(gestureState.dx >= limit){
                    openPhone()
                    setTimeout(()=>{
                        animatedSwippeValue.setValue(0)
                    },500)
                }

            }
        })
    ).current;

    const animatedWidth = animatedSwippeValue.interpolate({
        inputRange: [0, limit],
        outputRange: [50, containerWidth]
    })

    const shadow = {
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height:2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    }
    return (
        <SwippeContainer style={shadow} width={width} >
            <TextLabelSwippe>
                {label}
            </TextLabelSwippe>
            <Swippe as={Animated.View}
                style={{
                    width: animatedWidth
                }}
                {...panResponderAnimated.panHandlers}
            >
                <ThemeConsumer>
                    {
                        (theme)=> (
                            <Phone width={20} height={20} color={theme?.surface_light}/>
                        )
                    }
                </ThemeConsumer>
               
            </Swippe>
        </SwippeContainer>
    )
};

export default SwippeComponent;