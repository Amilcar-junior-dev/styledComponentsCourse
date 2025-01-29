import 'styled-components';

import { palletColors } from '../theme/colors';
import { CardComponentProps } from '../components/Cards/Models';

export type ThemeType = typeof palletColors.light

declare module 'styled-components/native' {
    export interface DefaultTheme extends ThemeType {}
}

export type StackParamsList = {
    MainTabs: undefined;
    Details: CardComponentProps
}