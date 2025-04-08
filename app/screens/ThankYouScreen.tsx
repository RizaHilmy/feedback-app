"use client"
import { SafeAreaView, StyleSheet } from "react-native"
import ThankYouContainer from "../organisms/ThankYouContainer"

type ThankYouScreenProps = {
  feedbackValue: number
  feedbackComment: string
  onReset: () => void
}

const ThankYouScreen = ({ feedbackValue, feedbackComment, onReset }: ThankYouScreenProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <ThankYouContainer feedbackValue={feedbackValue} feedbackComment={feedbackComment} onReset={onReset} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
})

export default ThankYouScreen
