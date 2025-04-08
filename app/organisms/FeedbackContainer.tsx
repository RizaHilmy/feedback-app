"use client"
import { View, StyleSheet, Image } from "react-native"
import FeedbackForm from "../molecules/FeedbackForm"
import Typography from "../atoms/Typography"

type FeedbackContainerProps = {
  onSubmit: (value: number, comment: string) => void
}

const FeedbackContainer = ({ onSubmit }: FeedbackContainerProps) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://cdn-icons-png.flaticon.com/512/1189/1189682.png" }}
        style={styles.logo}
        resizeMode="contain"
      />

      <Typography variant="title" center>
        Kami Menghargai Pendapat Anda!
      </Typography>
      <Typography variant="body" center>
        Bantu kami meningkatkan layanan dengan memberikan feedback Anda
      </Typography>

      <FeedbackForm onSubmit={onSubmit} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
})

export default FeedbackContainer
