import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { NeedGiveBtns, BoardForm } from "../../";

export default function FormInsideModal() {
  const [boardType, setBoardType] = useState(null);

  return (
    <View style={styles.form}>
      <NeedGiveBtns boardType={boardType} setBoardType={setBoardType} />
      {boardType ? <BoardForm /> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    marginVertical: 10,
  },
});
