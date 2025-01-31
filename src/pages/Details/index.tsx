import React, { useContext } from 'react';
import {View, Text, TouchableOpacity, ImageSourcePropType} from 'react-native';
import { ContainerDetails, ContainerImageCard, HeaderImage } from './styles';
import { ThemeContext } from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import Arrow from '../../assets/icons/arrow.svg'
import { useNavigation, useRoute } from '@react-navigation/native';
import { CardComponentProps } from '../../components/Cards/Models';

interface RouteProps {
    key: string;
    name: string;
    params: CardComponentProps;
}

const Details: React.FC = ()=> {

    const Theme = useContext(ThemeContext);
    const Route = useRoute<RouteProps>();
    const Navigation = useNavigation()
    
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
        <ContainerDetails> 
            <LinearGradient
                style={{flex:1}}
                colors={colors}
                start={{x:-1 ,y: -1.5 }}
                end={{x: 1, y: 1 }}
            > 
                <TouchableOpacity
                    onPress={()=> Navigation.goBack() }
                    style={{position: 'absolute', top:10, left: 10,zIndex:2 }}
                >
                    <Arrow width={30} height={30} color={Theme?.surface} style={{transform: [{rotate: '-90deg'}]}}/>
                </TouchableOpacity>
                <HeaderImage>
                    <ContainerImageCard source={Route?.params?.item?.image}/>
                </HeaderImage>
            </LinearGradient>
        </ContainerDetails>
    )
};

export default Details;