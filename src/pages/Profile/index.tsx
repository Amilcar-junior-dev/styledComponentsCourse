import React from 'react';
import {View, Text} from 'react-native';
import { ContainerProfile } from './styles';
import SnippetComponent from '../../components/userSnippet';
const Profile: React.FC = ()=> {
    return (
        <ContainerProfile> 
            <SnippetComponent/>
        </ContainerProfile>
    )
};

export default Profile;