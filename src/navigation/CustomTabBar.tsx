import React from 'react'
import { StyleSheet, View } from 'react-native'

import { BottomTabBarProps } from '@react-navigation/bottom-tabs'

import Icon from '@components/Icon'
import ScaleTouchable from '@components/ScaleTouchable'
import Text from '@components/Text'
import { COLORS } from '@constants/color'
import { usePaddingBottom } from '@hooks/usePaddingBottom'
import { NavigationService } from '@services/navigation.service'

const CustomTabBar: React.FC<BottomTabBarProps> = ({ state, descriptors }) => {
  const shouldPaddingBottom = usePaddingBottom()

  const generateIcon = (routerName: string) => {
    switch (routerName) {
      case 'Home':
        return 'home'
      case 'Trackers':
        return 'home'
      case 'Spots':
        return 'home'
      case 'Futures':
        return 'home'
      case 'Offerings':
        return 'home'
      default:
        return ''
    }
  }

  return (
    <View style={[styles.container, { ...shouldPaddingBottom.style }]}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key]
        const isFocused = state.index === index
        const color = isFocused ? COLORS.BLACK : COLORS.GRAY
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name

        const onPress = () => {
          NavigationService.navigation(route.name)
        }

        return (
          <ScaleTouchable
            key={`${route.name}_${index}`}
            onPress={onPress}
            style={styles.itemWrapper}>
            {/* <Icon name={generateIcon(route.name)} color={color} /> */}
            <Text style={{ color }}>{label}</Text>
          </ScaleTouchable>
        )
      })}
    </View>
  )
}

export default CustomTabBar

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 24,
    paddingTop: 12,
    borderTopWidth: 0.5,
    borderTopColor: COLORS.GRAY_70,
    backgroundColor: COLORS.WHITE,
  },
  itemWrapper: {
    alignItems: 'center',
  },
})
