import { View, StyleSheet, Image } from "react-native"
import Typography from "../atoms/Typography"
import Button from "../atoms/Button"
import EmojiIcon from "../atoms/EmojiIcon"

const EMOJIS = ["😢", "😕", "😐", "🙂", "😄"]

type ThankYouContainerProps = {
  feedbackValue: number
  feedbackComment: string
  onReset: () => void
}

const ThankYouContainer = ({ feedbackValue, feedbackComment, onReset }: ThankYouContainerProps) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://cdn-icons-png.flaticon.com/512/2107/2107957.png" }}
        style={styles.image}
        resizeMode="contain"
      />

      <Typography variant="title" center>
        Terima Kasih!
      </Typography>
      <Typography variant="body" center>
        Feedback Anda sangat berarti bagi kami
      </Typography>

      <View style={styles.feedbackSummary}>
        <Typography variant="subtitle" center>
          Anda memberikan penilaian:
        </Typography>
        <View style={styles.emojiContainer}>
          <EmojiIcon emoji={EMOJIS[feedbackValue]} size={60} />
        </View>

        {feedbackComment ? (
          <View style={styles.commentContainer}>
            <Typography variant="subtitle">Komentar Anda:</Typography>
            <View style={styles.commentBox}>
              <Typography variant="body">{feedbackComment}</Typography>
            </View>
          </View>
        ) : null}
      </View>

      <Button title="Berikan Feedback Lagi" onPress={onReset} primary={false} />
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
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  feedbackSummary: {
    width: "100%",
    marginVertical: 30,
    alignItems: "center",
  },
  emojiContainer: {
    marginVertical: 20,
    padding: 10,
    backgroundColor: "#f9f9f9",
    borderRadius: 50,
    elevation: 2,
  },
  commentContainer: {
    width: "100%",
    marginTop: 20,
  },
  commentBox: {
    backgroundColor: "#f9f9f9",
    padding: 16,
    borderRadius: 8,
    marginTop: 8,
    width: "100%",
  },
})

export default ThankYouContainer
