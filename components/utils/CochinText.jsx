import React from "react";
import { Text, StyleSheet } from "react-native";

export default function CochinText({style, text}) {

  return (
    <Text style={[style, styles.cochin]}>
      {text}
    </Text>
  );
}

const styles = StyleSheet.create({
  cochin: {
    fontFamily: "Cochin",
  },
});
