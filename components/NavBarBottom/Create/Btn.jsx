import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";

const Btn = ({ text, boardType, setBoardType }) => {
  return (
    <TouchableOpacity
      style={[
        styles.modalOpenBtn,
        text === "Need" ? styles.needBtn : styles.giveBtn,
        boardType === null ? styles.beforeChosen : 
          boardType === text ? styles.chosenBtn : 
          styles.unchosenBtn
      ]}
      onPress={() => {
        setBoardType(text)
        console.log(boardType)
      }}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  modalOpenBtn: {
    borderRadius: 5,
    padding: 7,
    margin: 10,
    width: 100,
  },
  needBtn: {
    backgroundColor: "rgb(206,58,52)",
  },
  giveBtn: {
    backgroundColor: "rgb(0, 122, 255)",
  },
  text: {
    textAlign: "center",
    color: "white",
    fontSize: 24,
    fontFamily: "Avenir",
    fontWeight: "bold",
  },
  chosenBtn: {
    opacity: 1,
  },
  unchosenBtn: {
    opacity: 0.3,
  },
  beforeChosen : {
    opacity: 1,
  }
});

export default Btn;
