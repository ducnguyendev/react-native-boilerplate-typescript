import React from 'react'
import { StyleSheet, View, SafeAreaView } from 'react-native'

import BlankSpacer from '@components/BlankSpacer'
import Button from '@components/Button'
import Text from '@components/Text'
import { useAppDispatch } from '@hooks/useRedux.hook'
import { signIn } from '@states/auth/auth.action'

const LoginScreen: React.FC = () => {
  const dispatch = useAppDispatch()

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={[styles.container, styles.padding]}>
        <Text type="h1" style={{ fontSize: 32 }}>
          Log in to your account
        </Text>

        <BlankSpacer height={15} />

        <Text type="small">Welcome back! Please enter your details.</Text>

        <BlankSpacer height={32} />

        <BlankSpacer height={12} />

        <Button
          onPress={() => {
            dispatch(signIn())
          }}
          title="Sign In"
        />
      </View>
    </SafeAreaView>
  )
}

export default LoginScreen

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
