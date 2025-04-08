import { TextInput as RNTextInput, StyleSheet, View, Text } from "react-native"

type TextInputProps = {
  value: string
  onChangeText: (text: string) => void
  placeholder?: string
  multiline?: boolean
  label?: string
}

const TextInput = ({ value, onChangeText, placeholder, multiline = false, label }: TextInputProps) => {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <RNTextInput
        style={[styles.input, multiline && styles.multilineInput]}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        multiline={multiline}
        numberOfLines={multiline ? 4 : 1}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    width: "100%",
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: "500",
    color: "#333",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: "white",
  },
  multilineInput: {
    height: 100,
    textAlignVertical: "top",
  },
})

export default TextInput
