import React from 'react';
import { CheckRadio, ContainerRadioButtonComponent, Radio, TextOption } from './styles';
import { RadioButtonComponentProps } from './Models';

const RadioButtonComponent: React.FC<RadioButtonComponentProps> = ({
    option,
    check, 
    setOptionSelectd
})=> {
    return (
        <ContainerRadioButtonComponent
            onPress={()=> setOptionSelectd(option) }
        >
            <Radio>
                <CheckRadio check={check} option={option}/>
            </Radio>
            <TextOption>
                {option}
            </TextOption>
        </ContainerRadioButtonComponent>
    )
};

export default RadioButtonComponent;