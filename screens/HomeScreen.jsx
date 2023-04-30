import { Text, View, Image, StyleSheet } from "react-native";
import React from "react";

export default function App() {
  return (
    <>
      <View style={{ marginBottom: 24 }}>
        <Text style={{ fontSize: 24, fontWeight: 700, marginBottom: 32 }}>
          Inside Out
        </Text>
        <Text style={{ fontSize: 18, fontWeight: 600, marginBottom: 16 }}>
          The Introvert's Guide to Self-Discovery
        </Text>
        <Text style={{ fontSize: 16 }}>
          Descriptive dedication: This name speaks directly to your target
          audience and highlights the idea of self-discovery. It's clear and
          straightforward, which could be appealing to introverted readers.
        </Text>
      </View>

      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Image />
          <Text style={styles.cardHeading}>Part 1</Text>
        </View>

        <View style={styles.faqs}>
          <Image />
          <Text style={styles.faqsHeading}>FAQs</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },

  card: {
    width: 140,
    height: 140,
    backgroundColor: "#ffbb1c",
    borderRadius: 12,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
    marginLeft: 16,
  },

  cardHeading: {
    fontSize: 16,
    fontWeight: "bold",
  },

  faqs: {
    width: 295,
    height: 140,
    backgroundColor: "#212121",
    borderRadius: 12,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
    marginLeft: 16,
  },

  faqsHeading: {
    color: "#fafafa",
    fontSize: 16,
    fontWeight: "bold",
  },
});
