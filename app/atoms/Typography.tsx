import type React from "react"
import { Text, StyleSheet } from "react-native"

type TypographyProps = {
  children: React.ReactNode
  variant?: "title" | "subtitle" | "body" | "caption"
  center?: boolean
  color?: string
}

const Typography = ({ children, variant = "body", center = false, color }: TypographyProps) => {
  return <Text style={[styles.text, styles[variant], center && styles.center, color && { color }]}>{children}</Text>
}

const styles = StyleSheet.create({
  text: {
    color: "#333",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 8,
  },
  body: {
    fontSize: 16,
    marginBottom: 4,
  },
  caption: {
    fontSize: 14,
    color: "#666",
  },
  center: {
    textAlign: "center",
  },
})

export default Typography
