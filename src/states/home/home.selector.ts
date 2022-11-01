import { RootState } from '@states/store'

import { NavigationStateProps } from './home.slice'

export const homeState = (state: RootState): NavigationStateProps => state.home
