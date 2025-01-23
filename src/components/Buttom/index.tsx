import React, { useContext } from 'react';
import { ButtonLabel, ContainerButton } from './styles';
import { ButtomComponentProps } from './Models';
import { ThemeContext } from 'styled-components/native';

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


const ButtomComponent: React.FC<ButtomComponentProps> = ({
    sizeRadius = 50,
    icon,
    label,
    iconSize = 22, 
    action,
})=> {
    const Theme = useContext(ThemeContext);

    const IconSelected = {
        Email: <Email width={iconSize} height={iconSize} color={Theme?.icon_primary}/>,
        Linkedin: <Linkedin width={iconSize} height={iconSize} color={Theme?.icon_primary}/>,
        GitHub: <GitHub width={iconSize} height={iconSize} color={Theme?.icon_primary}/>,
        Instagram: <Instagram width={iconSize} height={iconSize} color={Theme?.icon_primary}/>,
        Facebook: <Facebook width={iconSize} height={iconSize} color={Theme?.icon_primary}/>,
        ReactNative: <ReactNative width={iconSize} height={iconSize} color={Theme?.icon_primary}/>,
        JavaScript: <JavaScript width={iconSize} height={iconSize} color={Theme?.icon_primary}/>,
        StyledComponents: <StyledComponents width={iconSize} height={iconSize} color={Theme?.icon_primary}/>,
        Tailwind: <Tailwind width={iconSize} height={iconSize} color={Theme?.icon_primary}/>,
        Firebase: <Firebase width={iconSize} height={iconSize} color={Theme?.icon_primary}/>,
        HTML: <HTML width={iconSize} height={iconSize} color={Theme?.icon_primary}/>,
        CSS: <CSS width={iconSize} height={iconSize} color={Theme?.icon_primary}/>,
        TypeScript: <TypeScript width={iconSize} height={iconSize} color={Theme?.icon_primary}/>,
        GitLab: <GitLab width={iconSize} height={iconSize} color={Theme?.icon_primary}/>,
    }
    return (
        <ContainerButton sizeRadius={sizeRadius}>
            {IconSelected[icon]}
            {label && <ButtonLabel>{label}</ButtonLabel>}
        </ContainerButton>
    )
};

export default ButtomComponent