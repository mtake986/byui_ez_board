import React from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";

export default function Main() {
  const { width, height } = Dimensions.get("window");
  return (
    <View style={styles.container}>
      <Text>
        width: {width}, height: {height}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    height: "85%",
  },
});
