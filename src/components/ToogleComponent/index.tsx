import React, { useEffect, useRef, useState } from 'react';
import {Animated} from 'react-native';
import { ToggleCircle, ToggleContainer } from './styles';
import { ToggleComponentProps } from './Models';

const ToggleComponent: React.FC<ToggleComponentProps> = ({
    setEnabledToggle
})=> {
    const [ enable, setEnable] = useState(false);

    const animatedValue = useRef(new Animated.Value(5)).current;

    useEffect(()=>{
        setEnabledToggle(enable)
    },[enable]);

    useEffect(()=>{
        Animated.timing( animatedValue, {
            toValue: enable ? 1 : 0,
            duration: 500,
            useNativeDriver: true
        }).start();
    },[enable])

    const circlePosition = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [7, 53]
    })

    // 53 é a representação de: ToggleContainer(100) - ToggleCircle(40) - margem direita(7)
    // 100 - 40 -7 = 53

    return (
        <ToggleContainer
            enabled={enable}
            onPress={()=> setEnable(!enable)}
        >
            <ToggleCircle 
                as={Animated.View}
                enabled={enable} 
                style={{
                    transform: [
                        {
                            translateX: circlePosition
                        }
                    ]
                }}
            />
        </ToggleContainer>
    )
};

export default  ToggleComponent;