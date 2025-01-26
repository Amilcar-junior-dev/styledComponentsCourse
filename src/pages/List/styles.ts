import styled from "styled-components/native";

export const ContainerView = styled.View`
    width: 100%;
    height: 100%;
    justify-content: center;
    padding: 10px;
`;

export const ContainerSearch = styled.View`
    width: 100%;
    flex-direction: row;
    margin-top: 20px;
    align-items: center;
    justify-content: space-around;
`;

export const ContainerInput = styled.View`
    width: 80%;
    height: 40px;
    align-items: center;
    padding: 8px 16px;
    border-radius: 30px;
    background-color: ${({theme})=> theme.surface};
`;