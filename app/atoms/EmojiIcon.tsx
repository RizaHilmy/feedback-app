import { Text, StyleSheet } from "react-native"

type EmojiIconProps = {
  emoji: string
  size?: number
}

const EmojiIcon = ({ emoji, size = 32 }: EmojiIconProps) => {
  return <Text style={[styles.emoji, { fontSize: size }]}>{emoji}</Text>
}

const styles = StyleSheet.create({
  emoji: {
    textAlign: "center",
  },
})

export default EmojiIcon
