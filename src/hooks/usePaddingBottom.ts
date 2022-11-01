import { useMemo } from 'react'

import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { isAndroid } from '@helpers/check.helper'

export const usePaddingBottom = () => {
  const insets = useSafeAreaInsets()

  const shouldPadding = useMemo(() => {
    return insets.bottom || isAndroid
  }, [insets.bottom])

  const value = useMemo(() => {
    return shouldPadding ? insets.bottom || 24 : 0
  }, [insets.bottom, shouldPadding])

  return {
    shouldPadding,
    value,
    style: shouldPadding ? { paddingBottom: value } : {},
  }
}
