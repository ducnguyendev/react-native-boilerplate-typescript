import { PropertyPath, isString, get, defaultTo, isNumber } from 'lodash'

export const safeGetString = (
  object: unknown,
  path: PropertyPath,
  defaultValue: string,
): string => {
  let value = get(object, path)
  value = defaultTo(value, defaultValue)
  if (isString(value)) {
    return value
  }
  return defaultValue
}

export const safeGetNumber = (
  object: unknown,
  path: PropertyPath,
  defaultValue: number,
): number => {
  let value = get(object, path)
  value = defaultTo(value, defaultValue)

  if (isNumber(value)) {
    return value
  }

  return defaultValue
}
