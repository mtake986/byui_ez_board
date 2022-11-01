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
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },
});

export default NeedGiveBtns;
