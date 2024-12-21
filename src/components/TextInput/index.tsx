import React, { useRef, useState } from 'react';
import {Animated, TextInput} from'react-native';
import { AnimatedLabel, ContainerInput, ContainerLabel, Input } from './styles';
import { TextInputComponentProps } from './Models';

const TextInputComponent: React.FC<TextInputComponentProps> = ({
    type = 'primary',
    labelName, 
    setInputValue
})=> {
    const [ isFocused, setIsFocused] = useState(false);
    const [ value, setValue] = useState('');

    const inputRef = useRef<TextInput>(null);

    const labelPosition = useRef(new Animated.Value(0)).current;
    const labelScale = useRef(new Animated.Value(1)).current;

    const handleFocus = ()=> {
        setIsFocused(true)

        Animated.parallel([
            Animated.timing(labelPosition, {
                toValue: -22,
                duration: 200,
                useNativeDriver: true,
            }),
            Animated.timing(labelScale, {
                toValue: 0.7,
                duration: 200,
                useNativeDriver: true,
            }),
        ]).start();

    };
    const handleBlur = ()=> {
        if(!value){
            setIsFocused(false)
            Animated.parallel([
                Animated.timing(labelPosition, {
                    toValue: 0,
                    duration: 200,
                    useNativeDriver: true,
                }),
                Animated.timing(labelScale, {
                    toValue: 1,
                    duration: 200,
                    useNativeDriver: true,
                }),
            ]).start();
        }
    };

    return(
        <ContainerInput type={type}>
            <Input
                ref={inputRef}
                onFocus={handleFocus}
                onBlur={handleBlur}
                value={value}
                onChangeText={(text)=> setValue(text)}
                placeholder='Digite aqui...'
            />
            <ContainerLabel  
             onPress={()=> {handleFocus(), inputRef.current?.focus()}}
             type={type} 
            >
                <AnimatedLabel
                    style={{
                        transform: [
                            {translateY: labelPosition},
                            {scale: labelScale}
                        ]
                    }}
                >
                    {labelName}
                </AnimatedLabel>
            </ContainerLabel>
        </ContainerInput>
    )
};

export default TextInputComponent;