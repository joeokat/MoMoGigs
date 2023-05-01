import { Text, View, Image, StyleSheet } from "react-native";
import React from "react";

export default function App() {
  return (
    <>
      <View>
        <Text style={{ fontSize: 24, fontWeight: 700, marginBottom: 24 }}>
          MoMo Gigs
        </Text>
        <Text style={{ fontSize: 18, fontWeight: 600, marginBottom: 16 }}>
          A passive way to earn money from home
        </Text>
        <Text style={{ fontSize: 16 }}>Descriptive text</Text>
      </View>

      <View>
        <View style={styles.card}>
          <Image />
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>Part 1</Text>
        </View>

        <View style={styles.faqs}>
          <Image />
          <Text style={{ color: "#fafafa", fontSize: 16, fontWeight: "bold" }}>
            FAQs
          </Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 100,
    borderRadius: 12,
    backgroundColor: "#ffbb1c",
  },

  faqs: {
    width: "100%",
    height: 150,
    borderRadius: 12,
    backgroundColor: "#212121",
    justifyContent: "center",
    alignItems: "center",
  },
});
