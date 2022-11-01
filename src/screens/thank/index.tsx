import React from 'react'
import { StyleSheet, View, SafeAreaView } from 'react-native'

import BlankSpacer from '@components/BlankSpacer'
import Button from '@components/Button'
import Text from '@components/Text'

const ThankScreen: React.FC = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={[styles.container, styles.padding]}>
        <Text type="h1" style={{ fontSize: 32 }}>
          Thank You !
        </Text>

        <BlankSpacer height={32} />

        <Button
          title="We hear you !"
          onPress={() => {
            // NavigationService.navigation(SCREEN_NAME.Home)
          }}
        />
      </View>
    </SafeAreaView>
  )
}

export default ThankScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  padding: {
    paddingHorizontal: 20,
  },
})
