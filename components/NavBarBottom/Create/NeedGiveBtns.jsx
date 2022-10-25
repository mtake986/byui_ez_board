import React from "react";
import { StyleSheet, View } from "react-native";
import Btn from "./Btn";

const NeedGiveBtns = ({ boardType, setBoardType }) => {
  return (
    <View style={styles.btnContainer}>
      <Btn text="Need" boardType={boardType} setBoardType={setBoardType} />
      <Btn text="Give" boardType={boardType} setBoardType={setBoardType} />
    </View>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    marginTop: 10,
    marginBottom: 10,
    flexDirection: "row",
  },
});

export default NeedGiveBtns;
