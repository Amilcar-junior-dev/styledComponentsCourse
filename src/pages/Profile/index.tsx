import React, { useContext, useState } from 'react';
import {View, Text, FlatList} from 'react-native';
import { ContainerButtons, ContainerProfile, ContainerSkills, HeaderInfo, HeaderText, TextGeneric, TitleSkillContent } from './styles';
import SnippetComponent from '../../components/userSnippet';
import ButtomComponent from '../../components/Buttom';
import SwippeComponent from '../../components/Swippe';
import MedalSkillComponent from '../../components/MedallSkills';
import { MedalSkillComponentProps } from '../../components/MedallSkills/Models';
import LinearGradient from 'react-native-linear-gradient';
import { ThemeContext } from 'styled-components/native';

const Profile: React.FC = ()=> {

    const Theme = useContext(ThemeContext);

    const [ actionActiveIndex, setActionActiveIndex] =  useState(0);

    const Medals = [
        {id: '0', icon: 'ReactNative', label: 'React-Native' },
        {id: '1', icon: 'JavaScript', label: 'JavaScript' },
        {id: '2', icon: 'StyledComponents', label: 'Styled-Components' },
        {id: '3', icon: 'Tailwind', label: 'Tailwind' },
        {id: '4', icon: 'Firebase', label: 'Firebase' },
        {id: '5', icon: 'AWS', label: 'AWS' },
        {id: '6', icon: 'HTML', label: 'HTML' },
        {id: '7', icon: 'CSS', label: 'CSS' },
        {id: '8', icon: 'TypeScript', label: 'TypeScript' },
    ];

    return (
        <LinearGradient
            style={{flex:1}}
            colors={[Theme?.background!,Theme?.background!, Theme?.surface!]}
        >
                <SnippetComponent/>
                <HeaderInfo>
                    <HeaderText fs={50} bold wd={45}>
                        React
                        <HeaderText fs={35} bold wd={40}>Native</HeaderText>
                    </HeaderText>
                    <HeaderText fs={12} bold={false} wd={55}>
                        React Native une o melhor dos dois mundos: o desempenho de aplicativos nativos e a flexibilidade do desenvolvimento em JavaScript onde é possível  criar experiências incríveis com uma única base de código, permitindo entregar soluções rápidas, eficientes e escaláveis.
                    </HeaderText>
                </HeaderInfo>
                <ContainerButtons>
                    <ButtomComponent icon='Email' label='E-mail'/>
                    <ButtomComponent icon='Linkedin' label='Linkedin'/>
                    <ButtomComponent icon='GitHub'/>
                    <ButtomComponent icon='GitLab'/>
                    <SwippeComponent label='Contate-me' width={230}/>
                    <ButtomComponent icon='Instagram'/>
                    <ButtomComponent icon='Facebook'/>
                </ContainerButtons>
                <ContainerSkills>
                    <TitleSkillContent> Skills </TitleSkillContent>
                    <FlatList 
                        data={Medals}
                        horizontal
                        keyExtractor={(item)=> item.id}
                        renderItem={({item, index})=> (
                            <MedalSkillComponent 
                                onAnimationEnd={()=> {setActionActiveIndex((prevState)=> (prevState + 1) )}}
                                currentIndex={index === actionActiveIndex}
                                icon={item?.icon as MedalSkillComponentProps['icon']} 
                                label={item?.label} 
                            />
                        )}
                    />
                
                    <TitleSkillContent> Sobre mim: </TitleSkillContent>
                    <TextGeneric bold> Nome completo: <TextGeneric bold={false}> Junior Oliveira </TextGeneric> </TextGeneric>
                    <TextGeneric bold> Endereço: <TextGeneric bold={false}> Rua dos desenvolvedor, n 20 </TextGeneric> </TextGeneric>
                    <TextGeneric bold> Formação : <TextGeneric bold={false}> Ciência Contábeis </TextGeneric> </TextGeneric>
                    <TextGeneric bold={false}> 
                        Sou um desenvolvedor mobile com expertise em React Native, apaixonado por transformar ideias em aplicativos funcionais e intuitivos. Com uma sólida formação em ciência da computação. 
                    </TextGeneric>
                </ContainerSkills>

        </LinearGradient>
    )
};

export default Profile;