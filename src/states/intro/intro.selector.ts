import { RootState } from '@states/store'

import { IntroStateProps } from './intro.slice'

export const introState = (state: RootState): IntroStateProps => state.intro
