import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function ResetBtn({ handleReset }) {
  return (
    <TouchableOpacity style={styles.resetBtn} onPress={() => handleReset()}>
      <Text style={styles.resetBtnText}>Reset</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  resetBtn: {
    width: '30%',
  },
  resetBtnText: {
    fontSize: 20,
    backgroundColor: "rgb(240, 240, 240)",
    color: "black",
    padding: 10,
    textAlign: "center",
  },
});
