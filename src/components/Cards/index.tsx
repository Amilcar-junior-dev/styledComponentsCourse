import React from 'react';
import { CardText, ContainerCard, ContainerImage, ContentInfo } from './styles';
import LinearGradient from 'react-native-linear-gradient';

import ImageTest from '../../assets/images/FoodieFinder.png';
import { Animated } from 'react-native';

const CardComponent:React.FC = ()=> {

    const text = 'FoodieFinder conecta amantes da gastronomia com os melhores restaurantes e pratos locais, permitindo que os usuários descubram novos sabores e compartilhem suas experiências culinárias.'
    return (
        <ContainerCard>
            <LinearGradient
                style={{borderRadius: 10}}
                colors={["#345F85", "#0F1B25"]}
            >
                <ContainerImage 
                    source={ImageTest}
                />

                <Animated.View>
                    <ContentInfo>
                        <CardText fs={16} bold>
                              FoodieFinder
                        </CardText>
                        <CardText fs={12} bold={false}>
                              {text}
                        </CardText>
                    </ContentInfo>
                </Animated.View>
            </LinearGradient>
        </ContainerCard>
    )
};

export default CardComponent