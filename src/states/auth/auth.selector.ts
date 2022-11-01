import { RootState } from '@states/store'

import { AuthStateProps } from './auth.slice'

export const authState = (state: RootState): AuthStateProps => state.auth
