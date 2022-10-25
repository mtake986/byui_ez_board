import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

export default function CloseBtn({ modalVisible, setModalVisible }) {
  return (
		<TouchableOpacity
			style={[styles.buttonClose]}
			onPress={() => setModalVisible(!modalVisible)}
		>
			<Text style={styles.close}>Close</Text>
		</TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonClose: {
    width: 200,
  },
  close: {
    backgroundColor: "rgb(255, 240, 240)",
    color: "rgb(206,58,52)",
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    textAlign: "center",
  },
});
