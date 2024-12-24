import React, { useEffect, useRef, useState } from "react";
import { ContainerDropDown, DropdownOptionsContainer, InputSelected, Option, OptionSelected } from "./styles";
import Arrow from '../../assets/icons/arrow.svg';
import { ThemeConsumer } from "styled-components/native";
import { DropDownComponentProps } from "./Models";
import { Animated } from "react-native";

const DropDownComponent: React.FC<DropDownComponentProps> = ({
    options, setDropdownValue
})=> {
    const [optionSelected, setOptionSelected] = useState(options[0]);
    const [dropdown, setDropdown] = useState(false);
    const ArrowAnimated = useRef(new Animated.Value(0)).current;
    const heigthAnimated = useRef(new Animated.Value(0)).current;

    useEffect(()=>{
        Animated.timing(ArrowAnimated, {
            toValue: dropdown ? 1 : 0,
            duration: 300,
            useNativeDriver: true
        }).start()

    },[dropdown])

    useEffect(()=>{
        Animated.timing(heigthAnimated, {
            toValue: dropdown ? options.length * 50 : 0,
            duration: 500,
            useNativeDriver: false
        }).start()

    },[dropdown])

    const interpolationAnimated = ArrowAnimated.interpolate({
        inputRange: [0 , 1],
        outputRange: ['180deg', '0deg' ]
    })

     return (
        <>
            <ContainerDropDown>
                <InputSelected onPress={()=> setDropdown(!dropdown)}>
                    <OptionSelected>
                        {optionSelected}
                    </OptionSelected>
                    <ThemeConsumer>
                        {
                            (theme)=>(
                                <Animated.View
                                    style={{
                                        transform: [
                                            {rotate: interpolationAnimated}
                                        ]
                                    }}
                                >
                                    <Arrow
                                        height={20}
                                        width={20}
                                        color={theme?.background}
                                    />

                                </Animated.View>
                            )
                        }
                    </ThemeConsumer>
                </InputSelected>
            </ContainerDropDown>
            <Animated.View
                style={{
                  overflow: 'hidden',
                  height: heigthAnimated
                }}
            >
                <DropdownOptionsContainer as={Animated.View}>
                    {
                        options.map((item, index)=> (
                            <Option 
                                key={index}
                                onPress={()=> {setOptionSelected(item),setDropdownValue(item),  setDropdown(false)}}
                            >
                                <OptionSelected>
                                    {item}
                                </OptionSelected>
                            </Option>
                        ))
                    }
                
                </DropdownOptionsContainer>
            </Animated.View>
        </>
     )
};

export default DropDownComponent;