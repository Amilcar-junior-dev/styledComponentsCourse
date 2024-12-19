import 'styled-components';

import { palletColors } from '../theme/colors';

export type ThemeType = typeof palletColors.light

declare module 'styled-components/native' {
    export interface DefaultTheme extends ThemeType {}
}