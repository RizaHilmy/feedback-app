"use client"

import { useState } from "react"
import { View, StyleSheet } from "react-native"
import EmojiSlider from "./EmojiSlider"
import TextInput from "../atoms/TextInput"
import Button from "../atoms/Button"
import Typography from "../atoms/Typography"

type FeedbackFormProps = {
  onSubmit: (value: number, comment: string) => void
}

const FeedbackForm = ({ onSubmit }: FeedbackFormProps) => {
  const [value, setValue] = useState(3)
  const [comment, setComment] = useState("")

  const handleSubmit = () => {
    onSubmit(value, comment)
  }

  return (
    <View style={styles.container}>
      <EmojiSlider value={value} onChange={setValue} />

      <View style={styles.commentSection}>
        <Typography variant="subtitle">Komentar Tambahan</Typography>
        <TextInput value={comment} onChangeText={setComment} placeholder="Ceritakan pengalaman Anda..." multiline />
      </View>

      <Button title="Kirim Feedback" onPress={handleSubmit} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    padding: 16,
  },
  commentSection: {
    width: "100%",
    marginVertical: 20,
  },
})

export default FeedbackForm
