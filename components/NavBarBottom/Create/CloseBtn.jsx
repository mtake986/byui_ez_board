import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function CloseBtn({ modalVisible, setModalVisible }) {
  return (
    <TouchableOpacity
      style={styles.closeBtn}
      onPress={() => setModalVisible(!modalVisible)}
    >
      <Text style={styles.closeBtnText}>Close</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  closeBtn: {
    position: "absolute",
    bottom: 112,
    width: "150%",
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  closeBtnText: {
    fontSize: 20,
    backgroundColor: "rgb(255, 240, 240)",
    color: "rgb(206,58,52)",
    paddingHorizontal: 50,
    paddingVertical: 20,
    textAlign: "center",
  },
});
