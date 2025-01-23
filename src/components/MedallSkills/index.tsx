import React, { useContext } from 'react';
import { Container, ContainerMedal, MedalLabel } from './styles';

import ReactNative from '../../assets/icons/ReactLogo.svg';
import JavaScript from '../../assets/icons/JavaScriptLogo.svg';
import StyledComponents from '../../assets/icons/StyledComponentsLogo.svg';
import Tailwind from '../../assets/icons/TailwindLogo.svg';
import Firebase from '../../assets/icons/FirebaseLogo.svg';
import AWS from '../../assets/icons/AWSLogo.svg';
import HTML from '../../assets/icons/HTMLogo.svg';
import CSS from '../../assets/icons/CSSLogo.svg';
import TypeScript from '../../assets/icons/TypeScriptLogo.svg';

import { ThemeContext } from 'styled-components/native';
import { MedalSkillComponentProps } from './Models';

const MedalSkillComponent: React.FC<MedalSkillComponentProps> = ({
    icon,
    label,
})=> {

    const Theme = useContext(ThemeContext);

    const LogoIcons = {
        ReactNative: <ReactNative width={45} height={45}  color={Theme?.icon_primary} />,
        JavaScript: <JavaScript width={45} height={45}  color={Theme?.icon_primary} />,
        StyledComponents: <StyledComponents width={45} height={45}  color={Theme?.icon_primary} />,
        Tailwind: <Tailwind width={45} height={45}  color={Theme?.icon_primary} />,
        Firebase: <Firebase width={45} height={45}  color={Theme?.icon_primary} />,
        AWS: <AWS width={45} height={45}  color={Theme?.icon_primary} />,
        HTML: <HTML width={45} height={45}  color={Theme?.icon_primary} />,
        CSS: <CSS width={45} height={45}  color={Theme?.icon_primary} />,
        TypeScript: <TypeScript width={45} height={45}  color={Theme?.icon_primary} />,
    };

    return(
        <Container>
            <ContainerMedal>
                {LogoIcons[icon]  }
            </ContainerMedal>
            <MedalLabel> React-Native</MedalLabel>
        </Container>
    )
};
export default MedalSkillComponent;
