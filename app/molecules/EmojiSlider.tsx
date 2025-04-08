"use client"

import { useState, useEffect } from "react"
import { View, StyleSheet, PanResponder, Animated, Dimensions } from "react-native"
import EmojiIcon from "../atoms/EmojiIcon"
import Typography from "../atoms/Typography"

const EMOJIS = ["😢", "😕", "😐", "🙂", "😄"]
const { width } = Dimensions.get("window")
const SLIDER_WIDTH = width * 0.8
const STEP_WIDTH = SLIDER_WIDTH / (EMOJIS.length - 1)

type EmojiSliderProps = {
  value: number
  onChange: (value: number) => void
}

const EmojiSlider = ({ value, onChange }: EmojiSliderProps) => {
  const [position] = useState(new Animated.Value(value * STEP_WIDTH))
  const [currentValue, setCurrentValue] = useState(value)

  useEffect(() => {
    position.setValue(value * STEP_WIDTH)
    setCurrentValue(value)
  }, [value])

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (_, gestureState) => {
      const newPosition = Math.max(0, Math.min(SLIDER_WIDTH, gestureState.moveX - 30))
      position.setValue(newPosition)

      const newValue = Math.round(newPosition / STEP_WIDTH)
      if (newValue !== currentValue && newValue >= 0 && newValue < EMOJIS.length) {
        setCurrentValue(newValue)
        onChange(newValue)
      }
    },
    onPanResponderRelease: () => {
      Animated.spring(position, {
        toValue: currentValue * STEP_WIDTH,
        useNativeDriver: false,
      }).start()
    },
  })

  return (
    <View style={styles.container}>
      <Typography variant="subtitle" center>
        Bagaimana pengalaman Anda?
      </Typography>

      <View style={styles.sliderContainer}>
        <View style={styles.track} />

        <Animated.View
          style={[
            styles.thumb,
            {
              transform: [{ translateX: position }],
            },
          ]}
          {...panResponder.panHandlers}
        >
          <EmojiIcon emoji={EMOJIS[currentValue]} size={40} />
        </Animated.View>

        <View style={styles.emojiContainer}>
          {EMOJIS.map((emoji, index) => (
            <View key={index} style={styles.emojiMarker}>
              <EmojiIcon emoji={emoji} size={24} />
            </View>
          ))}
        </View>
      </View>

      <View style={styles.labelContainer}>
        <Typography variant="caption">Sangat Buruk</Typography>
        <Typography variant="caption">Sangat Baik</Typography>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    marginVertical: 20,
  },
  sliderContainer: {
    width: SLIDER_WIDTH,
    height: 60,
    marginTop: 30,
    marginBottom: 10,
    justifyContent: "center",
  },
  track: {
    width: "100%",
    height: 4,
    backgroundColor: "#ddd",
    borderRadius: 2,
    position: "absolute",
  },
  thumb: {
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 30,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    position: "absolute",
    marginLeft: -30,
    zIndex: 10,
  },
  emojiContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    position: "absolute",
    bottom: -30,
  },
  emojiMarker: {
    alignItems: "center",
  },
  labelContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: SLIDER_WIDTH,
    marginTop: 30,
  },
})

export default EmojiSlider
