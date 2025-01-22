import React from 'react';
import { ContainerInfo, ContainerLogo, ContainerUserImage, ContentInfo, SnippetContainer, TextInfo } from './styles';
import { Image } from 'react-native';

import UserExemple from '../../assets/images/userExemple.png';
import ReactLogo from '../../assets/icons/ReactLogo.svg';
import { ThemeConsumer } from 'styled-components/native';

const SnippetComponent: React.FC = ()=> {
    return(
        <SnippetContainer>
            <ContainerUserImage>
                <Image
                    source={UserExemple}
                    style={{width: '100%', height: '100%'}}
                />
                <ContainerLogo>
                    <ThemeConsumer>
                        {
                            (theme)=>(
                                <ReactLogo width={25} height={25} color={theme?.icon_primary}  />
                            )
                        }
                    </ThemeConsumer>
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