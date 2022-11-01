import React, { useCallback, useEffect, useState } from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'

import { useIsFocused } from '@react-navigation/native'
import RadioGroup, { RadioButtonProps } from 'react-native-radio-buttons-group'

import BlankSpacer from '@components/BlankSpacer'
import Button from '@components/Button'
import { stylesDefault } from '@constants/style'
import { useAppDispatch, useAppSelector } from '@hooks/useRedux.hook'
import { SCREEN_NAME } from '@navigation/screen-name'
import { NavigationService } from '@services/navigation.service'
import { navigateQuestion } from '@states/home/home.action'
import { homeState } from '@states/home/home.selector'
import { questionListMock } from '@states/home/home.slice'

const data: RadioButtonProps[] = [
  {
    id: '1',
    label: 'Yes',
    value: 'option1',
    selected: true,
  },
  {
    id: '2',
    label: 'No',
    value: 'option2',
    selected: false,
  },
]

const FIRST_QUESTION_INDEX = 1

const HomeScreen: React.FC = () => {
  const dispatch = useAppDispatch()
  const { question } = useAppSelector(homeState)
  const [radioButtons, setRadioButtons] = useState(data)
  const isFocused = useIsFocused()

  const onPressRadioButton = (radioButtonsArray: RadioButtonProps[]) => {
    console.log(radioButtonsArray)
    setRadioButtons(radioButtonsArray)
  }

  const navigateQuest = useCallback(
    (id: number) => {
      // pass id to function
      console.log('navigateQuest ', id)
      dispatch(navigateQuestion(id))
    },
    [dispatch],
  )

  useEffect(() => {
    if (isFocused) navigateQuest(FIRST_QUESTION_INDEX)
  }, [isFocused, navigateQuest])

  const renderHeader = () => {
    return (
      <>
        <Button
          title={
            question ? `Question ${question?.id}` : 'question default'
          }></Button>
      </>
    )
  }

  const renderQuestionContent = () => {
    return (
      <>
        <View
          style={{
            backgroundColor: '#D9D9D9',
            flex: 1,
            borderRadius: 5,
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal: 15,
          }}>
          <Text
            style={{ fontSize: 33, fontWeight: 'bold', textAlign: 'center' }}>
            {question ? `${question?.question}` : 'question default'}
          </Text>
        </View>
      </>
    )
  }

  const renderRadioGroup = () => {
    return (
      <RadioGroup
        radioButtons={data}
        onPress={onPressRadioButton}
        layout="row"
        containerStyle={{
          justifyContent: 'space-around',
        }}
      />
    )
  }

  const renderBottomButton = () => {
    return (
      <>
        {question?.id !== 1 ? (
          <>
            <Button
              title="Prev"
              onPress={() => {
                if (!question?.id) return console.error('question?.id is null')
                else {
                  navigateQuest(question?.id - 1)
                }
              }}
            />

            <BlankSpacer height={12}></BlankSpacer>
          </>
        ) : null}

        {question?.id === Object.keys(questionListMock).length ? (
          <>
            <Button
              title="Go to Done Screen"
              onPress={() => {
                NavigationService.navigation(SCREEN_NAME.Done)
              }}
            />
            <BlankSpacer height={12}></BlankSpacer>
          </>
        ) : null}

        {question?.id !== Object.keys(questionListMock).length ? (
          <>
            <Button
              title="Next"
              onPress={() => {
                if (!question?.id) return console.error('question?.id is null')
                else {
                  navigateQuest(question?.id + 1)
                }
              }}
            />

            <BlankSpacer height={12}></BlankSpacer>
          </>
        ) : null}
      </>
    )
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={[styles.container, stylesDefault.paddingTop10px]}>
        {renderHeader()}
        <BlankSpacer height={50}></BlankSpacer>
        {renderQuestionContent()}
        <BlankSpacer height={30}></BlankSpacer>
        {renderRadioGroup()}
        <BlankSpacer height={30}></BlankSpacer>
        {renderBottomButton()}
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
})
