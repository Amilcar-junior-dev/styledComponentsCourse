import React from 'react';
import {View, Text} from 'react-native';
import { ContainerButtons, ContainerProfile, ContainerSkills, HeaderInfo, HeaderText, TextGeneric, TitleSkillContent } from './styles';
import SnippetComponent from '../../components/userSnippet';
import ButtomComponent from '../../components/Buttom';
import SwippeComponent from '../../components/Swippe';
const Profile: React.FC = ()=> {
    return (
        <ContainerProfile> 
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
                <TitleSkillContent> Sobre mim: </TitleSkillContent>
                <TextGeneric bold> Nome completo: <TextGeneric bold={false}> Junior Oliveira </TextGeneric> </TextGeneric>
                <TextGeneric bold> Endereço: <TextGeneric bold={false}> Rua dos desenvolvedor, n 20 </TextGeneric> </TextGeneric>
                <TextGeneric bold> Formação : <TextGeneric bold={false}> Ciência Contábeis </TextGeneric> </TextGeneric>
                <TextGeneric bold={false}> 
                    Sou um desenvolvedor mobile com expertise em React Native, apaixonado por transformar ideias em aplicativos funcionais e intuitivos. Com uma sólida formação em ciência da computação. 
                </TextGeneric>
            </ContainerSkills>
        </ContainerProfile>
    )
};

export default Profile;