import React, { ReactElement, useContext, useState } from 'react';
import {View, Text, TouchableOpacity, ImageSourcePropType, Modal} from 'react-native';
import { CardDescriptionTecnology, ContainerDetails, ContainerImageCard, ContainerInformation, ContainerTitleModal, Description, HeaderImage, ModalContainer, ModalContent, TitleDetails, TitleModal } from './styles';
import { ThemeContext } from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import Arrow from '../../assets/icons/arrow.svg'
import { useNavigation, useRoute } from '@react-navigation/native';
import { CardComponentProps } from '../../components/Cards/Models';
import ButtomComponent from '../../components/Buttom';
import { ButtomComponentProps } from '../../components/Buttom/Models';

import Email from '../../assets/icons/Email.svg';
import Linkedin from '../../assets/icons/Linkedin.svg';
import GitHub from '../../assets/icons/GitHub.svg';
import Instagram from '../../assets/icons/Instagran.svg';
import Facebook from '../../assets/icons/Facebook.svg';
import ReactNative from '../../assets/icons/ReactLogo.svg';
import JavaScript from '../../assets/icons/JavaScriptLogo.svg';
import StyledComponents from '../../assets/icons/StyledComponentsLogo.svg';
import Tailwind from '../../assets/icons/TailwindLogo.svg';
import Firebase from '../../assets/icons/FirebaseLogo.svg';
import HTML from '../../assets/icons/HTMLogo.svg';
import CSS from '../../assets/icons/CSSLogo.svg';
import TypeScript from '../../assets/icons/TypeScriptLogo.svg';
import GitLab from '../../assets/icons/GitLab.svg';

interface RouteProps {
    key: string;
    name: string;
    params: CardComponentProps;
};
type keyIcon = {
    [key: string]: ReactElement
};

const Details: React.FC = ()=> {

    const Theme = useContext(ThemeContext);
    const Route = useRoute<RouteProps>();
    const Navigation = useNavigation();

    const [visible, setVisible] = useState({visible: false, icon: '', description: ''})
    const colors  = Array(8).fill(Theme?.background).concat(Theme?.background! + 99)
    
    const IconSelected: keyIcon = {
        Email: <Email width={35} height={35} color={Theme?.icon_primary}/>,
        Linkedin: <Linkedin width={35} height={35} color={Theme?.icon_primary}/>,
        GitHub: <GitHub width={35} height={35} color={Theme?.icon_primary}/>,
        Instagram: <Instagram width={35} height={35} color={Theme?.icon_primary}/>,
        Facebook: <Facebook width={35} height={35} color={Theme?.icon_primary}/>,
        ReactNative: <ReactNative width={35} height={35} color={Theme?.icon_primary}/>,
        JavaScript: <JavaScript width={35} height={35} color={Theme?.icon_primary}/>,
        StyledComponents: <StyledComponents width={35} height={35} color={Theme?.icon_primary}/>,
        Tailwind: <Tailwind width={35} height={35} color={Theme?.icon_primary}/>,
        Firebase: <Firebase width={35} height={35} color={Theme?.icon_primary}/>,
        HTML: <HTML width={35} height={35} color={Theme?.icon_primary}/>,
        CSS: <CSS width={35} height={35} color={Theme?.icon_primary}/>,
        TypeScript: <TypeScript width={35} height={35} color={Theme?.icon_primary}/>,
        GitLab: <GitLab width={35} height={35} color={Theme?.icon_primary}/>,
    }

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
                <ContainerInformation>
                    <TitleDetails>
                        {Route?.params?.item?.title}
                    </TitleDetails>
                    <Description wd={100}>
                        {Route?.params?.item?.description}
                    </Description>
                    <TitleDetails>
                       Tecnologias
                    </TitleDetails>
                    {
                        Route?.params?.item?.technologies?.map((item, index)=>(
                            <CardDescriptionTecnology 
                                key={index}
                                onPress={()=> setVisible({visible: true, icon: item?.icon, description: item?.description })}
                            >
                                <ButtomComponent 
                                    icon={item?.icon as ButtomComponentProps['icon']} 
                                    iconSize={35}
                                />
                                <Description wd={80}>
                                    {item?.description}
                                </Description>
                            </CardDescriptionTecnology>
                        ))
                    }
                </ContainerInformation>
                <Modal
                    transparent
                    visible={visible.visible}
                    animationType='slide'
                    onDismiss={()=>{}}
                    onRequestClose={()=>{}}
                >
                    <ModalContainer onPress={()=> setVisible({visible: false, icon: '', description: ''})}>
                        <ModalContent>
                            <ContainerTitleModal>
                                {IconSelected[visible?.icon]}
                                <TitleModal>{visible.icon}</TitleModal>
                            </ContainerTitleModal>
                            <Description wd={100} color={Theme?.icon_primary}> 
                                {visible?.description}
                            </Description>
                        </ModalContent>
                    </ModalContainer>
                </Modal>
            </LinearGradient>
        </ContainerDetails>
    )
};

export default Details;