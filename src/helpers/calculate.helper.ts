import { isInteger } from './check.helper'

export const convertPrice = (price: number, fixNumber = 1) => {
  return isInteger(price) ? price : parseFloat(price.toFixed(fixNumber))
}
