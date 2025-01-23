import React from 'react';
import {View, Text} from 'react-native';
import { ContainerButtons, ContainerProfile, HeaderInfo, HeaderText } from './styles';
import SnippetComponent from '../../components/userSnippet';
import ButtomComponent from '../../components/Buttom';
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
                <ButtomComponent icon='Instagram'/>
                <ButtomComponent icon='Facebook'/>
            </ContainerButtons>
        </ContainerProfile>
    )
};

export default Profile;