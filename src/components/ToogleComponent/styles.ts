import styled from 'styled-components/native';

export const ToggleContainer = styled.TouchableOpacity<{enabled: boolean}>`
    height: 50px;
    width: 100px;
    justify-content: center;
    background-color: ${({theme, enabled})=> !enabled ?  theme.neutral_tertiary : theme.icon_primary};
    padding: 0px 5px;
    border-radius: 50px;
    border: 1px solid ${({theme, enabled})=> !enabled ?  theme.icon_primary : theme.surface} ;
    position: relative;
`;

export const ToggleCircle = styled.View<{enabled: boolean}>`
    height: 40px;
    width: 40px;
    background-color: ${({theme, enabled})=> !enabled ?  theme.icon_primary :theme.surface };
    border-radius: 40px;
    position: absolute;
    
`;