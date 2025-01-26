import { ImageSourcePropType } from "react-native";

export interface CardComponentProps {
    item: {
        title: string;
        description: string;
        image: ImageSourcePropType;
        technologies: Array<{icon:string, description: string}>
    }
};