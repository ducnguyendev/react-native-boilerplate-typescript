// import { chain, isEqual, get } from 'lodash'
import chain from 'lodash/chain'
import get from 'lodash/get'
import isEqual from 'lodash/isEqual'

import { safeGetString, safeGetNumber } from '@helpers/object.helper'

export class QuestionModel {
  constructor(public question: string, public id: number) {}

  public static instantiateItem(
    json: any = undefined,
  ): QuestionModel | undefined {
    const question = safeGetString(json, 'question', '')
    const id = safeGetNumber(json, 'id', 0)

    return new QuestionModel(question, id)
  }

  public static instantiateList(
    jsonArray: unknown[] | undefined = undefined,
  ): QuestionModel[] {
    return chain(jsonArray)
      .map((json) => {
        return QuestionModel.instantiateItem(json)
      })
      .uniqWith((a, b) => isEqual(a, b))
      .compact()
      .value()
  }
}
