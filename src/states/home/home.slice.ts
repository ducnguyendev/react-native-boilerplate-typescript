import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { QuestionType } from 'interface/market/market.interface'

export interface HomeStateProps {
  question: QuestionType | undefined
  questionList: object
}

interface IQuestionListMock {
  [key: number]: {
    question: string
    id: number
  }
}

export const questionListMock: Record<
  number,
  {
    question: string
    id: number
  }
> = {
  1: {
    question: 'Has anyone close to you asked you to cut down on your workload?',
    id: 1,
  },
  2: {
    question:
      'Do you feel guilty that you are not spending enough time with your friends, family or even yourself?',
    id: 2,
  },
  3: {
    question:
      'In recent days, weeks or months have you become angry or resentful about your work or about colleagues, managers or clients?',
    id: 3,
  },
  4: {
    question:
      'Do you find yourself becoming increasingly emotional, for example crying, getting angry, shouting, or feeling tense for no obvious reason?',
    id: 4,
  },
}

const FIRST_INDEX = 1

const initialState: HomeStateProps = {
  question: questionListMock[FIRST_INDEX],
  questionList: questionListMock,
}

export const homeSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    navigateToQuestion: (state, action: PayloadAction<number>) => {
      const QuestionType: QuestionType = questionListMock[action.payload]

      state.question = QuestionType
    },
  },
})

export const { navigateToQuestion } = homeSlice.actions

export const homeReducer = homeSlice.reducer
