import React, { useCallback } from 'react'
import { StyleSheet, View } from 'react-native'

import { useSafeAreaInsets } from 'react-native-safe-area-context'

import Icon from '@components/Icon'
import ScaleTouchable from '@components/ScaleTouchable'
import Text from '@components/Text'
import { COLORS } from '@constants/color'
import { HEADER_HEIGHT } from '@constants/dimension'
import { NavigationService } from '@services/navigation.service'

interface HeaderProps {
  title?: string
  isGoback?: boolean

  customLeftComponent?: () => React.Component
  customRightComponent?: () => React.Component
}

const Header: React.FC<HeaderProps> = ({
  title,
  isGoback = true,
  customLeftComponent,
  customRightComponent,
}) => {
  const insets = useSafeAreaInsets()

  const onGoBack = useCallback(() => {
    NavigationService.goBack()
  }, [])

  const renderLeft = useCallback(() => {
    if (customLeftComponent) return customLeftComponent()

    if (!isGoback) return <View style={styles.decoyView} />

    return (
      <ScaleTouchable style={styles.leftWrapper} onPress={onGoBack}>
        {/* <Icon name={'chevron-left'} size={48} color={COLORS.BLUE} /> */}
      </ScaleTouchable>
    )
  }, [customLeftComponent, isGoback, onGoBack])

  const renderRight = useCallback(() => {
    if (customRightComponent) return customRightComponent()

    return <View style={styles.decoyView} />
  }, [customRightComponent])

  return (
    <View
      style={[
        styles.container,
        insets.top
          ? {
              height: HEADER_HEIGHT + insets.top,
              paddingTop: insets.top,
            }
          : {},
      ]}>
      {renderLeft()}

      <View style={styles.centerWrapper}>
        <Text type={'h4'} center>
          {title}
        </Text>
      </View>

      {renderRight()}
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    height: HEADER_HEIGHT,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.4,
    borderBottomColor: COLORS.BLACK_OPACITY(0.7),
    backgroundColor: COLORS.WHITE,
  },
  leftWrapper: {
    flex: 1,
    paddingLeft: 12,
    justifyContent: 'center',
  },
  centerWrapper: {
    flex: 5,
  },
  decoyView: {
    flex: 1,
    paddingRight: 12,
  },
})
