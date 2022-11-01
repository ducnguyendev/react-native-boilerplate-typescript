import React, { forwardRef } from 'react'
import { StyleSheet, View, TextInput as RNTextInput, Text } from 'react-native'

export interface TextInputProps {
  label?: string
  value?: string
  onChange?: (value: string) => void
  placeholder?: string
}

const TextInput: React.FC<TextInputProps> = forwardRef(
  (
    { label = '', value = '', placeholder = '', onChange = () => null },
    ref,
  ) => {
    const renderLabel = () => {
      if (!label) return

      return (
        <View style={styles.labelWrapper}>
          <Text>{label}</Text>
        </View>
      )
    }

    return (
      <View style={styles.container}>
        {renderLabel()}

        <View style={styles.textInputWrapper}>
          <RNTextInput
            value={value}
            placeholder={placeholder}
            onChangeText={onChange}
            style={styles.textInputStyle}
          />
        </View>
      </View>
    )
  },
)

TextInput.displayName = 'TextInput'

export default TextInput

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  labelWrapper: {
    paddingBottom: 8,
  },
  textInputWrapper: {
    borderWidth: 1,
    paddingHorizontal: 16,
    borderRadius: 8,
    height: 48,
  },
  textInputStyle: {
    flex: 1,
  },
})
