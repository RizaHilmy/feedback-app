import { TouchableOpacity, Text, StyleSheet } from "react-native"

type ButtonProps = {
  title: string
  onPress: () => void
  primary?: boolean
}

const Button = ({ title, onPress, primary = true }: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.button, primary ? styles.primaryButton : styles.secondaryButton]}
      onPress={onPress}
    >
      <Text style={[styles.buttonText, primary ? styles.primaryButtonText : styles.secondaryButtonText]}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 8,
  },
  primaryButton: {
    backgroundColor: "#FF6B6B",
  },
  secondaryButton: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#FF6B6B",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
  },
  primaryButtonText: {
    color: "white",
  },
  secondaryButtonText: {
    color: "#FF6B6B",
  },
})

export default Button
