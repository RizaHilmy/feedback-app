"use client"
import { SafeAreaView, StyleSheet } from "react-native"
import FeedbackContainer from "../organisms/FeedbackContainer"

type FeedbackScreenProps = {
  onSubmit: (value: number, comment: string) => void
}

const FeedbackScreen = ({ onSubmit }: FeedbackScreenProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <FeedbackContainer onSubmit={onSubmit} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
})

export default FeedbackScreen
