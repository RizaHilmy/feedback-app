"use client"

import { useState } from "react"
import { StatusBar } from "expo-status-bar"
import { SafeAreaProvider } from "react-native-safe-area-context"
import FeedbackScreen from "./screens/FeedbackScreen"
import ThankYouScreen from "./screens/ThankYouScreen"

export default function App() {
  const [submitted, setSubmitted] = useState(false)
  const [feedbackValue, setFeedbackValue] = useState(3)
  const [feedbackComment, setFeedbackComment] = useState("")

  const handleSubmit = (value: number, comment: string) => {
    setFeedbackValue(value)
    setFeedbackComment(comment)
    setSubmitted(true)
  }

  const handleReset = () => {
    setSubmitted(false)
    setFeedbackValue(3)
    setFeedbackComment("")
  }

  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      {!submitted ? (
        <FeedbackScreen onSubmit={handleSubmit} />
      ) : (
        <ThankYouScreen feedbackValue={feedbackValue} feedbackComment={feedbackComment} onReset={handleReset} />
      )}
    </SafeAreaProvider>
  )
}
