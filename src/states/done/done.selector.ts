import { RootState } from '@states/store'

import { DoneStateProps } from './done.slice'

export const doneState = (state: RootState): DoneStateProps => state.done
